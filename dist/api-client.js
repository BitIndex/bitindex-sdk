"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const defaultOptions = {
    api_url: 'https://api.bitindex.network',
    // api_key: 'your api key ', // Get a key at www.bitindex.network
    network: 'main',
    version_path: 'api/v3',
};
/**
 * API Client
 */
class APIClient {
    constructor(options) {
        this.options = defaultOptions;
        this.options = Object.assign({}, this.options, options);
        this.fullUrl = `${this.options.api_url}/${this.options.version_path}/${this.options.network}`;
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
    tx_getTransaction(txid, callback) {
        return new Promise((resolve, reject) => {
            if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'txid required'
                }, callback);
            }
            axios_1.default.get(this.fullUrl + `/tx/${txid}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    tx_getTransactionRaw(txid, callback) {
        return new Promise((resolve, reject) => {
            if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'txid required'
                }, callback);
            }
            axios_1.default.get(this.fullUrl + `/rawtx/${txid}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    webhook_getMonitoredAddresses(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/webhook/monitored_addrs?api_key=${this.options.api_key}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    webhook_updateMonitoredAddresses(addrs, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.put(this.fullUrl + `/webhook/monitored_addrs?api_key=${this.options.api_key}`, addrs, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    webhook_deleteMonitoredAddresses(addrs, callback) {
        const deleteAddrs = [];
        for (const addr of addrs) {
            deleteAddrs.push({
                addr,
                delete: true,
            });
        }
        return new Promise((resolve, reject) => {
            axios_1.default.put(this.fullUrl + `/webhook/monitored_addrs?api_key=${this.options.api_key}`, deleteAddrs, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    webhook_getConfig(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/webhook/endpoint?api_key=${this.options.api_key}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    webhook_updateConfig(url, enabled, secret, callback) {
        if (!url || !secret || enabled === undefined) {
            throw new Error("require url, secret, and enabled params for updating webhook endpoint");
        }
        return new Promise((resolve, reject) => {
            axios_1.default.put(this.fullUrl + `/webhook/endpoint?api_key=${this.options.api_key}`, {
                url,
                enabled,
                secret
            }, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    blockheader(blockhash, callback) {
        return new Promise((resolve, reject) => {
            if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'blockhash required'
                }, callback);
            }
            axios_1.default.get(this.fullUrl + `/blockheader/${blockhash}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    block(blockhash, callback) {
        return new Promise((resolve, reject) => {
            if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'blockhash required'
                }, callback);
            }
            axios_1.default.get(this.fullUrl + `/block/${blockhash}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    rawblock(blockhash, callback) {
        return new Promise((resolve, reject) => {
            if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'blockhash required'
                }, callback);
            }
            axios_1.default.get(this.fullUrl + `/rawblock/${blockhash}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    blockhash(blockhash, callback) {
        return new Promise((resolve, reject) => {
            if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'blockhash required'
                }, callback);
            }
            axios_1.default.get(this.fullUrl + `/rawblock/${blockhash}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    blockindex(height, callback) {
        return new Promise((resolve, reject) => {
            if (!height || /^(\s*)$/.test(height)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'height required'
                }, callback);
            }
            axios_1.default.get(this.fullUrl + `/block-index/${height}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    status_getBestBlockHash(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.api_url + `/api/status?q=getBestBlockHash`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    status_getLastBlockHash(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.api_url + `/api/status?q=getLastBlockHash`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    status_getDifficulty(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.api_url + `/api/status?q=getDifficulty`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    status(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.api_url + `/api/status`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    address_getUtxos(address, fromIndex = 0, toIndex = 20, callback) {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback);
            });
        }
        let addrs = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        }
        else {
            addrs = address;
        }
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/addr/${address}/utxo`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    address_getStatus(address, callback, fromIndex = 0, toIndex = 1000) {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback);
            });
        }
        let addrs = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        }
        else {
            addrs = address;
        }
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/addr/${address}?fromIndex=${fromIndex}&toIndex=${toIndex}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    isStringOrNonEmptyArray(item) {
        if (!item) {
            return false;
        }
        if (Array.isArray(item) && !item.length) {
            return false;
        }
        return true;
    }
    xpub_getStatus(xpub, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/xpub/${xpub}/status?&api_key=${this.options.api_key}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    xpub_getAddressNext(xpub, reserveTime = 0, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/xpub/${xpub}/addrs/next?reserveTime=${reserveTime}&api_key=${this.options.api_key}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    xpub_getTransactions(xpub, fromIndex = 0, toIndex = 1000, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/xpub/${xpub}/txs?fromIndex=${fromIndex}&toIndex=${toIndex}&api_key=${this.options.api_key}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    xpub_getAddresses(xpub, fromIndex = 0, toIndex = 1000, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/xpub/${xpub}/addrs?fromIndex=${fromIndex}&toIndex=${toIndex}&api_key=${this.options.api_key}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    xpub_getUtxos(xpub, fromIndex = 0, toIndex = 1000, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/xpub/${xpub}/utxo?fromIndex=${fromIndex}&toIndex=${toIndex}&api_key=${this.options.api_key}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    addresses_getUtxos(address, fromIndex = 0, toIndex = 20, callback) {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback);
            });
        }
        let addrs = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        }
        else {
            addrs = address;
        }
        let payload = {
            addrs: Array.isArray(addrs) ? addrs.join(',') : addrs
        };
        if (fromIndex) {
            payload.fromIndex = fromIndex;
        }
        if (toIndex) {
            payload.toIndex = toIndex;
        }
        if (addrs.length === 1) {
            return new Promise((resolve, reject) => {
                axios_1.default.get(this.fullUrl + `/addr/${addrs}/utxo`, {
                    headers: {}
                }).then((response) => {
                    this.callbackAndResolve(resolve, response.data, callback);
                }).catch((ex) => {
                    this.callbackAndResolve(resolve, {
                        code: ex.response.status,
                        message: ex.message ? ex.message : ex.toString()
                    }, callback);
                });
            });
        }
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.fullUrl + `/addrs/utxo`, payload, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    address_getSummary(address, callback) {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback);
            });
        }
        let addrs = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        }
        else {
            addrs = address;
        }
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.fullUrl + `/addr/${address}`, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    address_getTxsOptions(address, options, callback) {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    message: 'address required'
                }, callback);
            });
        }
        let addrs = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        }
        else {
            addrs = address;
        }
        return new Promise((resolve, reject) => {
            let payload = {
                addrs: Array.isArray(addrs) ? addrs.join(',') : addrs
            };
            if (options && options.fromIndex) {
                payload.fromIndex = options.fromIndex;
            }
            if (options && options.toIndex) {
                payload.toIndex = options.toIndex;
            }
            if (options && options.includeAsm) {
                payload.includeAsm = options.includeAsm;
            }
            if (options && options.includeHex) {
                payload.includeHex = options.includeHex;
            }
            axios_1.default.post(this.fullUrl + `/addrs/txs`, payload, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    address_getTxs(address, fromIndex = 0, toIndex = 20, noAsm = true, noScript = true, noSpent = true, callback) {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    message: 'address required'
                }, callback);
            });
        }
        let addrs = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        }
        else {
            addrs = address;
        }
        return new Promise((resolve, reject) => {
            let payload = {
                addrs: Array.isArray(addrs) ? addrs.join(',') : addrs
            };
            if (fromIndex) {
                payload.fromIndex = fromIndex;
            }
            if (toIndex) {
                payload.toIndex = toIndex;
            }
            if (noAsm) {
                payload.noAsm = noAsm;
            }
            if (noScript) {
                payload.noScript = noScript;
            }
            if (noSpent) {
                payload.noSpent = noSpent;
            }
            axios_1.default.post(this.options.api_url + `/api/addrs/txs`, payload, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback);
            });
        });
    }
    sendTx(rawtx, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.fullUrl + `/tx/send`, { rawtx }, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, ex.response.data, callback);
            });
        });
    }
}
exports.APIClient = APIClient;
