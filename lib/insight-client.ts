import axios from 'axios';
declare var Buffer: any;

const defaultOptions = {
    insight_api: 'https://api.bitindex.network',
}

/**
 * Insight API Client
 */
export class InsightClient {
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

    tx(txid: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'txid required'
                }, callback);
            }
            axios.get(this.options.insight_api + `/api/tx/${txid}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);

            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    rawtx(txid: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'txid required'
                }, callback);
            }
            axios.get(this.options.insight_api + `/api/rawtx/${txid}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
    block(blockhash: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'blockhash required'
                }, callback);
            }
            axios.get(this.options.insight_api + `/api/block/${blockhash}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
    rawblock(blockhash: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'blockhash required'
                }, callback);
            }
            axios.get(this.options.insight_api + `/api/rawblock/${blockhash}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
    blockhash(blockhash: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'blockhash required'
                }, callback);
            }
            axios.get(this.options.insight_api + `/api/rawblock/${blockhash}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
    blockindex(height: any, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!height || /^(\s*)$/.test(height)) {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: 'height required'
                }, callback);
            }
            axios.get(this.options.insight_api + `/api/block-index/${height}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status_getBestBlockHash(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.insight_api + `/api/status?q=getBestBlockHash`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status_getLastBlockHash(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.insight_api + `/api/status?q=getLastBlockHash`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status_getDifficulty(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.insight_api + `/api/status?q=getDifficulty`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.insight_api + `/api/status`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    addrUtxo(addr: any, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.insight_api + `/api/addr/${addr}/utxo`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    addrsUtxo(addrs: any, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
        let payload: any = {
            addrs: Array.isArray(addrs) ? addrs.join(',') : addrs
        };

        if (fromIndex) {
            payload.fromIndex = fromIndex;
        }
        if (toIndex) {
            payload.toIndex = toIndex;
        }

        return new Promise((resolve, reject) => {
            axios.post(this.options.insight_api + `/api/addrs/utxo`,
                payload,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    addrTxs(address: any, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.insight_api + `/api/txs?address=${address}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    addrsTxs(txs: any, fromIndex: number = 0, toIndex: number = 20, noAsm: boolean = true, noScript: boolean = true, noSpent: boolean = true, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {

            let payload: any = {
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

            axios.post(this.options.insight_api + `/api/addrs/txs`,
                payload,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, {
                    success: true,
                    data: response.data
                }, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    success: false,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
}