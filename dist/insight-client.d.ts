/**
 * Insight API Client
 */
export declare class InsightClient {
    options: {
        insight_api: string;
    };
    constructor(options: any);
    /**
     * Resolve a promise and/or invoke a callback
     * @param resolveOrReject Resolve or reject function to call when done
     * @param data Data to pass forward
     * @param callback Invoke an optional callback first
     */
    private callbackAndResolve;
    tx(txid: string, callback?: Function): Promise<any>;
    rawtx(txid: string, callback?: Function): Promise<any>;
    block(blockhash: string, callback?: Function): Promise<any>;
    rawblock(blockhash: string, callback?: Function): Promise<any>;
    blockhash(blockhash: string, callback?: Function): Promise<any>;
    blockindex(height: any, callback?: Function): Promise<any>;
    status_getBestBlockHash(callback?: Function): Promise<any>;
    status_getLastBlockHash(callback?: Function): Promise<any>;
    status_getDifficulty(callback?: Function): Promise<any>;
    status(callback?: Function): Promise<any>;
    addrUtxo(addr: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    addrsUtxo(addrs: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    addrTxs(address: any, callback?: Function): Promise<any>;
    addrsTxs(txs: any, fromIndex?: number, toIndex?: number, noAsm?: boolean, noScript?: boolean, noSpent?: boolean, callback?: Function): Promise<any>;
    sendTx(rawtx: string, callback?: Function): Promise<any>;
}
