import assert from 'node:assert/strict';
import test from 'node:test';

import { extractSdkApi } from '../sync-wasm-sdk-api.mjs';

test('extracts SDK property methods, signatures, deprecations, and callback events', () => {
  const sdkDeclaration = `
declare class WasmSdk {
    _invoker<T>(functionName: string): Promise<T>;
    sendMessage: (params: SendMsgParams, operationID?: string) => Promise<WsResponse<MessageItem>>;
    /**
     * @deprecated Use setConversation instead.
     */
    setConversationDraft: <T>(params: SetConversationDraftParams, operationID?: string) => Promise<WsResponse<T>>;
    uploadFile: (data: UploadFileParams) => Promise<WsResponse<{
        url: string;
    }>>;
    fileMapSet(uuid: string, file: File): Promise<any>;
}
`;
  const eventDeclaration = `
export declare enum SdkEvent {
    OnConnectSuccess = "OnConnectSuccess",
    OnRecvOfflineNewMessage = "onRecvOfflineNewMessage"
}
`;

  const result = extractSdkApi(sdkDeclaration, eventDeclaration);

  assert.deepEqual(
    result.methods.map((method) => method.name),
    ['fileMapSet', 'sendMessage', 'setConversationDraft', 'uploadFile'],
  );
  assert.equal(result.methods[2].deprecated, true);
  assert.match(result.methods[0].signature, /uuid: string/);
  assert.match(result.methods[3].signature, /url: string/);
  assert.deepEqual(result.events, [
    { name: 'OnConnectSuccess', value: 'OnConnectSuccess' },
    { name: 'OnRecvOfflineNewMessage', value: 'onRecvOfflineNewMessage' },
  ]);
});
