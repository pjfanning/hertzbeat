import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface KeyValuePair {
  key: string;
  value: string;
}

@Component({
  selector: 'app-labels-input',
  templateUrl: './labels-input.component.html',
  styleUrl: './labels-input.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelsInputComponent),
      multi: true
    }
  ]
})
export class LabelsInputComponent implements OnInit, ControlValueAccessor {
  constructor() {}

  @Input() keyAlias: string = 'Key';
  @Input() valueAlias: string = 'Value';

  keyValues: KeyValuePair[] = [];

  // ControlValueAccessor
  private onChange: any = () => {};
  private onTouched: any = () => {};

  writeValue(value: Record<string, string>): void {
    this.keyValues = Object.entries(value || {}).map(([key, value]) => ({
      key,
      value
    }));

    if (this.keyValues.length === 0) {
      this.addNew();
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // set disabled state here
  }

  ngOnInit(): void {
    if (this.keyValues.length === 0) {
      this.addNew();
    }
  }

  addNew(e?: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    this.keyValues.push({
      key: '',
      value: ''
    });
  }

  removeCurrent(index: number, e?: MouseEvent) {
    if (e) {
      e.preventDefault();
    }
    if (this.keyValues.length > 1) {
      this.keyValues.splice(index, 1);
      this.emitChange();
    }
  }

  emitChange() {
    const result: Record<string, string> = {};
    this.keyValues.forEach(item => {
      if (item.key?.trim()) {
        result[item.key] = item.value || '';
      }
    });
    if (Object.keys(result).length === 0 || Object.values(result).every(v => v === '')) {
      this.onChange(null);
    } else {
      this.onChange(result);
    }
    this.onTouched();
  }
}
