export declare class InsightAPI {
    options: undefined;
    constructor(options?: any);
    rawblock(blockhash: string, callback?: Function): Promise<any>;
    block(blockhash: string, callback?: Function): Promise<any>;
    tx(txid: string, callback?: Function): Promise<any>;
    rawtx(txid: string, callback?: Function): Promise<any>;
    blockindex(height: any, callback?: Function): Promise<any>;
    status_getBestBlockHash(callback?: Function): Promise<any>;
    status_getLastBlockHash(callback?: Function): Promise<any>;
    status_getDifficulty(callback?: Function): Promise<any>;
    status(callback?: Function): Promise<any>;
    getAddressUtxos(addr: any, fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    getAddressesUtxos(addrs: any[], fromIndex?: number, toIndex?: number, callback?: Function): Promise<any>;
    getAddressTxs(addr: any, callback?: Function): Promise<any>;
    getAddressesTxs(addrs: any, fromIndex?: number, toIndex?: number, noAsm?: boolean, noScript?: boolean, noSpent?: boolean, callback?: Function): Promise<any>;
    sendTx(rawtx: string, callback?: Function): Promise<any>;
}
export default class BitIndexSDK {
    options: any;
    insight: any;
    core: any;
    constructor(options?: any);
    getAddressUtxos(addrs: any, callback?: Function): Promise<any>;
    sendTx(rawtx: string, callback?: Function): Promise<any>;
}
export declare function instance(options?: any): BitIndexSDK;
