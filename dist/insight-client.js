"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const defaultOptions = {
    insight_api: 'https://api.bitindex.network',
};
/**
 * Insight API Client
 */
class InsightClient {
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
    tx(txid, callback) {
        return new Promise((resolve, reject) => {
            if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'txid required'
                }, callback);
            }
            axios_1.default.get(this.options.insight_api + `/api/tx/${txid}`, {
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
    rawtx(txid, callback) {
        return new Promise((resolve, reject) => {
            if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'txid required'
                }, callback);
            }
            axios_1.default.get(this.options.insight_api + `/api/rawtx/${txid}`, {
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
    block(blockhash, callback) {
        return new Promise((resolve, reject) => {
            if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'blockhash required'
                }, callback);
            }
            axios_1.default.get(this.options.insight_api + `/api/block/${blockhash}`, {
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
    rawblock(blockhash, callback) {
        return new Promise((resolve, reject) => {
            if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'blockhash required'
                }, callback);
            }
            axios_1.default.get(this.options.insight_api + `/api/rawblock/${blockhash}`, {
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
    blockhash(blockhash, callback) {
        return new Promise((resolve, reject) => {
            if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'blockhash required'
                }, callback);
            }
            axios_1.default.get(this.options.insight_api + `/api/rawblock/${blockhash}`, {
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
    blockindex(height, callback) {
        return new Promise((resolve, reject) => {
            if (!height || /^(\s*)$/.test(height)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'height required'
                }, callback);
            }
            axios_1.default.get(this.options.insight_api + `/api/block-index/${height}`, {
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
    status_getBestBlockHash(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.insight_api + `/api/status?q=getBestBlockHash`, {
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
    status_getLastBlockHash(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.insight_api + `/api/status?q=getLastBlockHash`, {
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
    status_getDifficulty(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.insight_api + `/api/status?q=getDifficulty`, {
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
    status(callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.insight_api + `/api/status`, {
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
    addrUtxo(addr, fromIndex = 0, toIndex = 20, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.insight_api + `/api/addr/${addr}/utxo`, {
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
    addrsUtxo(addrs, fromIndex = 0, toIndex = 20, callback) {
        let payload = {
            addrs: Array.isArray(addrs) ? addrs.join(',') : addrs
        };
        if (fromIndex) {
            payload.fromIndex = fromIndex;
        }
        if (toIndex) {
            payload.toIndex = toIndex;
        }
        return new Promise((resolve, reject) => {
            axios_1.default.post(this.options.insight_api + `/api/addrs/utxo`, payload, {
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
    addrTxs(address, callback) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(this.options.insight_api + `/api/txs?address=${address}`, {
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
    addrsTxs(txs, fromIndex = 0, toIndex = 20, noAsm = true, noScript = true, noSpent = true, callback) {
        return new Promise((resolve, reject) => {
            let payload = {
                addrs: Array.isArray(txs) ? txs.join(',') : txs
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
                payload.toIndex = noSpent;
            }
            axios_1.default.post(this.options.insight_api + `/api/addrs/txs`, payload, {
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
            axios_1.default.post(this.options.insight_api + `/api/tx/send`, { rawtx }, {
                headers: {}
            }).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, ex.response.data, callback);
            });
        });
    }
}
exports.InsightClient = InsightClient;
