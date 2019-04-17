"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const defaultOptions = {
    api: 'https://api.bitindex.network',
};
/**
 * Core API Client
 */
class CoreClient {
    constructor(options) {
        this.options = defaultOptions;
        this.options = Object.assign({}, this.options, options);
    }
    /**
     * Resolve a promise and/or invoke a callback
     * @param resolveOrReject Resolve or reject function to call when done
     * @param data Data to pass forward
     * @param callback Invoke an optional callback first
     */
    callbackAndResolve(resolveOrReject, data, callback) {
        if (callback) {
            callback(data);
        }
        if (resolveOrReject) {
            return resolveOrReject(data);
        }
    }
    getAddressUtxos(addrs, callback) {
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
            axios_1.default.get(this.options.api + `/api/v2/addrs/utxos?address=${addresses.join(',')}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    sendTx(rawtx, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.options.api + `/api/v2/tx/send`, { rawtx }, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, ex.response.data, callback);
            });
        });
    }
}
exports.CoreClient = CoreClient;
