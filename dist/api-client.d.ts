export interface BitIndexApiClientOptions {
    api_url: string;
    api_key?: string;
    network: string;
    version_path: string;
}
/**
 * API Client
 */
export declare class APIClient {
    options: BitIndexApiClientOptions;
    fullUrl: any;
    constructor(options: any);
    /**
     * Resolve a promise and/or invoke a callback
     * @param resolveOrReject Resolve or reject function to call when done
     * @param data Data to pass forward
     * @param callback Invoke an optional callback first
     */
    private callbackAndResolve;
    tx_getTransaction(txid: string, callback?: Function): Promise<any>;
    tx_getTransactionRaw(txid: string, callback?: Function): Promise<any>;
    webhook_getMonitoredAddresses(callback?: Function): Promise<any>;
    webhook_updateMonitoredAddresses(addrs: Array<{
        addr: string;
    }>, callback?: Function): Promise<any>;
    webhook_getConfig(callback?: Function): Promise<any>;
    webhook_updateConfig(url: string, enabled: boolean, secret: string, callback?: Function): Promise<any>;
    blockheader(blockhash: string, callback?: Function): Promise<any>;
    block(blockhash: string, callback?: Function): Promise<any>;
    rawblock(blockhash: string, callback?: Function): Promise<any>;
    blockhash(blockhash: string, callback?: Function): Promise<any>;
    blockindex(height: any, callback?: Function): Promise<any>;
    status_getBestBlockHash(callback?: Function): Promise<any>;
    status_getLastBlockHash(callback?: Function): Promise<any>;
    status_getDifficulty(callback?: Function): Promise<any>;
    status(callback?: Function): Promise<any>;
    address_getUtxos(address: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    address_getStatus(address: any, callback?: Function, fromIndex?: number, toIndex?: number): Promise<any>;
    private isStringOrNonEmptyArray;
    xpub_getStatus(xpub: any, callback?: Function): Promise<any>;
    xpub_getAddressNext(xpub: any, reserveTime?: number, callback?: Function): Promise<any>;
    xpub_getTransactions(xpub: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    xpub_getAddresses(xpub: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    xpub_getUtxos(xpub: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    addresses_getUtxos(address: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    address_getSummary(address: any, callback?: Function): Promise<any>;
    address_getTxsOptions(address: any, options?: {
        fromIndex?: number;
        toIndex?: number;
        afterHeight?: number;
        afterBlockHash?: string;
        includeAsm?: boolean;
        includeHex?: boolean;
    }, callback?: Function): Promise<any>;
    address_getTxs(address: any, fromIndex?: number, toIndex?: number, noAsm?: boolean, noScript?: boolean, noSpent?: boolean, callback?: Function): Promise<any>;
    sendTx(rawtx: string, callback?: Function): Promise<any>;
}
