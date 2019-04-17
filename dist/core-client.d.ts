/**
 * Core API Client
 */
export declare class CoreClient {
    options: {
        api: string;
    };
    constructor(options: any);
    /**
     * Resolve a promise and/or invoke a callback
     * @param resolveOrReject Resolve or reject function to call when done
     * @param data Data to pass forward
     * @param callback Invoke an optional callback first
     */
    private callbackAndResolve;
    getAddressUtxos(addrs: any, callback?: Function): Promise<any>;
    sendTx(rawtx: string, callback?: Function): Promise<any>;
}
