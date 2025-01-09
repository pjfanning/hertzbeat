/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hertzbeat.collector.dispatch.entrance.processor;

import com.google.protobuf.ByteString;
import io.netty.channel.ChannelHandlerContext;
import lombok.extern.slf4j.Slf4j;
import org.apache.hertzbeat.collector.dispatch.entrance.CollectServer;
import org.apache.hertzbeat.common.entity.message.ClusterMsg;
import org.apache.hertzbeat.common.script.Script;
import org.apache.hertzbeat.common.util.JsonUtil;
import org.apache.hertzbeat.remoting.netty.NettyRemotingProcessor;

/**
 * ScriptProcessor
 */
@Slf4j
public class ScriptRequestProcessor implements NettyRemotingProcessor {

    private final CollectServer collectServer;

    public ScriptRequestProcessor(final CollectServer collectServer) {
        this.collectServer = collectServer;
    }

    @Override
    public ClusterMsg.Message handle(ChannelHandlerContext ctx, ClusterMsg.Message message) {
        String result = null;
        try {
            Script script = JsonUtil.fromJson(message.getMsg().toStringUtf8(), Script.class);
            if (script != null) {
                result = String.valueOf(collectServer.getScriptExecutor().executeScript(script.getContent()));
                log.info("ScriptProcessor execute script result: {}", result);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ClusterMsg.Message.newBuilder()
                .setIdentity(message.getIdentity())
                .setDirection(ClusterMsg.Direction.RESPONSE)
                .setMsg(ByteString.copyFromUtf8(result))
                .build();
    }
}
