/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { finalize } from 'rxjs/operators';

import { Tag } from '../../../pojo/Tag';
import { TagService } from '../../../service/tag.service';
import { formatTagName } from '../../../shared/utils/common-util';

@Component({
  selector: 'app-setting-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class SettingTagsComponent implements OnInit {
  @ViewChild('tagForm', { static: false }) tagForm: NgForm | undefined;

  constructor(
    private notifySvc: NzNotificationService,
    private modal: NzModalService,
    private tagService: TagService,
    @Inject(ALAIN_I18N_TOKEN) private i18nSvc: I18NService
  ) {}

  pageIndex: number = 1;
  pageSize: number = 8;
  total: number = 0;
  tags!: Tag[];
  tableLoading: boolean = false;
  checkedTagIds = new Set<number>();
  // used for filtering tag name or tag value
  search: string | undefined;

  ngOnInit(): void {
    this.loadTagsTable();
  }

  sync() {
    this.loadTagsTable();
  }

  loadTagsTable() {
    this.tableLoading = true;
    let tagsInit$ = this.tagService.loadTags(this.search, 1, this.pageIndex - 1, this.pageSize).subscribe(
      message => {
        this.tableLoading = false;
        this.checkedAll = false;
        this.checkedTagIds.clear();
        if (message.code === 0) {
          let page = message.data;
          this.tags = page.content;
          this.pageIndex = page.number + 1;
          this.total = page.totalElements;
        } else {
          console.warn(message.msg);
        }
        tagsInit$.unsubscribe();
      },
      error => {
        this.tableLoading = false;
        tagsInit$.unsubscribe();
        console.error(error.msg);
      }
    );
  }

  onDeleteTags() {
    if (this.checkedTagIds == null || this.checkedTagIds.size === 0) {
      this.notifySvc.warning(this.i18nSvc.fanyi('common.notify.no-select-delete'), '');
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18nSvc.fanyi('common.confirm.delete-batch'),
      nzOkText: this.i18nSvc.fanyi('common.button.ok'),
      nzCancelText: this.i18nSvc.fanyi('common.button.cancel'),
      nzOkDanger: true,
      nzOkType: 'primary',
      nzClosable: false,
      nzOnOk: () => this.deleteTags(this.checkedTagIds)
    });
  }

  onDeleteOneTag(tagId: number) {
    let alerts = new Set<number>();
    alerts.add(tagId);
    this.modal.confirm({
      nzTitle: this.i18nSvc.fanyi('common.confirm.delete'),
      nzOkText: this.i18nSvc.fanyi('common.button.ok'),
      nzCancelText: this.i18nSvc.fanyi('common.button.cancel'),
      nzOkDanger: true,
      nzOkType: 'primary',
      nzClosable: false,
      nzOnOk: () => this.deleteTags(alerts)
    });
  }

  deleteTags(tagIds: Set<number>) {
    this.tableLoading = true;
    const deleteTags$ = this.tagService.deleteTags(tagIds).subscribe(
      message => {
        deleteTags$.unsubscribe();
        if (message.code === 0) {
          this.notifySvc.success(this.i18nSvc.fanyi('common.notify.delete-success'), '');
          this.updatePageIndex(tagIds.size);
          this.loadTagsTable();
        } else {
          this.tableLoading = false;
          this.notifySvc.error(this.i18nSvc.fanyi('common.notify.delete-fail'), message.msg);
        }
      },
      error => {
        this.tableLoading = false;
        deleteTags$.unsubscribe();
        this.notifySvc.error(this.i18nSvc.fanyi('common.notify.delete-fail'), error.msg);
      }
    );
  }

  updatePageIndex(delSize: number) {
    const lastPage = Math.max(1, Math.ceil((this.total - delSize) / this.pageSize));
    this.pageIndex = this.pageIndex > lastPage ? lastPage : this.pageIndex;
  }

  // begin: List multiple choice paging
  checkedAll: boolean = false;
  onAllChecked(checked: boolean) {
    if (checked) {
      this.tags.forEach(monitor => this.checkedTagIds.add(monitor.id));
    } else {
      this.checkedTagIds.clear();
    }
  }
  onItemChecked(monitorId: number, checked: boolean) {
    if (checked) {
      this.checkedTagIds.add(monitorId);
    } else {
      this.checkedTagIds.delete(monitorId);
    }
  }
  onTablePageChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex, sort, filter } = params;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.loadTagsTable();
  }
  // end: List multiple choice paging

  // start 新增修改Tag model
  isManageModalVisible = false;
  isManageModalOkLoading = false;
  isManageModalAdd = true;
  tag!: Tag;
  onNewTag() {
    this.tag = new Tag();
    this.isManageModalVisible = true;
    this.isManageModalAdd = true;
  }
  onEditOneTag(tagValue: Tag) {
    this.tag = tagValue;
    this.isManageModalVisible = true;
    this.isManageModalAdd = false;
  }
  onManageModalCancel() {
    this.isManageModalVisible = false;
  }
  onManageModalOk() {
    if (this.tagForm?.invalid) {
      Object.values(this.tagForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    this.isManageModalOkLoading = true;
    this.tag.name = this.tag.name.trim();
    if (this.tag.tagValue != undefined) {
      this.tag.tagValue = this.tag.tagValue.trim();
    }
    if (this.tag.description != undefined) {
      this.tag.description = this.tag.description.trim();
    }
    if (this.isManageModalAdd) {
      const modalOk$ = this.tagService
        .newTag(this.tag)
        .pipe(
          finalize(() => {
            modalOk$.unsubscribe();
            this.isManageModalOkLoading = false;
          })
        )
        .subscribe(
          message => {
            if (message.code === 0) {
              this.isManageModalVisible = false;
              this.notifySvc.success(this.i18nSvc.fanyi('common.notify.new-success'), '');
              this.loadTagsTable();
            } else {
              this.notifySvc.error(this.i18nSvc.fanyi('common.notify.new-fail'), message.msg);
            }
          },
          error => {
            this.notifySvc.error(this.i18nSvc.fanyi('common.notify.new-fail'), error.msg);
          }
        );
    } else {
      const modalOk$ = this.tagService
        .editTag(this.tag)
        .pipe(
          finalize(() => {
            modalOk$.unsubscribe();
            this.isManageModalOkLoading = false;
          })
        )
        .subscribe(
          message => {
            if (message.code === 0) {
              this.isManageModalVisible = false;
              this.notifySvc.success(this.i18nSvc.fanyi('common.notify.edit-success'), '');
              this.loadTagsTable();
            } else {
              this.notifySvc.error(this.i18nSvc.fanyi('common.notify.edit-fail'), message.msg);
            }
          },
          error => {
            this.notifySvc.error(this.i18nSvc.fanyi('common.notify.edit-fail'), error.msg);
          }
        );
    }
  }
  // end 新增修改告警定义model
  protected readonly formatTagName = formatTagName;

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.loadTagsTable();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.loadTagsTable();
  }
}
