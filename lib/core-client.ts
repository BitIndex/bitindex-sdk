import axios from 'axios';

const defaultOptions = {
    api: 'https://api.bitindex.network',
}

/**
 * Core API Client
 */
export class CoreClient {
    options = defaultOptions;
    constructor(options: any) {
        this.options = Object.assign({}, this.options, options);
    }

    /**
     * Resolve a promise and/or invoke a callback
     * @param resolveOrReject Resolve or reject function to call when done
     * @param data Data to pass forward
     * @param callback Invoke an optional callback first
     */
    private callbackAndResolve(resolveOrReject: Function, data: any, callback?: Function) {
        if (callback) {
            callback(data);
        }
        if (resolveOrReject) {
            return resolveOrReject(data)
        }
    }

    getAddressUtxos(addrs: any, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!addrs || Array.isArray(addrs) && !addrs.length) {
                return this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'address required'
                }, callback);
            }
            let addresses = addrs;
            if (!Array.isArray(addrs)) {
                addresses = [addrs];
            }
            axios.get(this.options.api + `/api/v2/addrs/utxos?address=${addresses.join(',')}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
}