import axios from 'axios';

export interface BitIndexApiClientOptions {
    api_url: string;
    api_key?: string;
    network: string;
    version_path: string;
}

const defaultOptions: BitIndexApiClientOptions = {
    api_url: 'https://api.bitindex.network',
    // api_key: 'your api key ', // Get a key at www.bitindex.network
    network: 'main', // 'test', or 'stn'
    version_path: 'api/v3',
}
/**
 * API Client
 */
export class APIClient {
    options = defaultOptions;
    fullUrl;
    constructor(options: any) {
        this.options = Object.assign({}, this.options, options);
        this.fullUrl = `${this.options.api_url}/${this.options.version_path}/${this.options.network}`;
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

    tx_getTransaction(txid: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'txid required'
                }, callback);
            }
            axios.get(this.fullUrl + `/tx/${txid}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);

            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    tx_getTransactionRaw(txid: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!txid || /^(\s*)$/.test(txid)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'txid required'
                }, callback);
            }
            axios.get(this.fullUrl + `/rawtx/${txid}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    webhook_getMonitoredAddresses(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/webhook/monitored_addrs?api_key=${this.options.api_key}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    webhook_updateMonitoredAddresses(addrs: Array<{addr: string}>, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.put(this.fullUrl + `/webhook/monitored_addrs?api_key=${this.options.api_key}`,
                addrs,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    webhook_getConfig(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/webhook/endpoint?api_key=${this.options.api_key}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    webhook_updateConfig(url: string, enabled: boolean, secret: string, callback?: Function): Promise<any> {
        if (!url || !secret || enabled === undefined) {
            throw new Error("require url, secret, and enabled params for updating webhook endpoint");
        }
        return new Promise((resolve, reject) => {
            axios.put(this.fullUrl + `/webhook/endpoint?api_key=${this.options.api_key}`,
                {
                    url,
                    enabled,
                    secret
                },
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    block(blockhash: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'blockhash required'
                }, callback);
            }
            axios.get(this.fullUrl + `/block/${blockhash}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
    rawblock(blockhash: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'blockhash required'
                }, callback);
            }
            axios.get(this.fullUrl + `/rawblock/${blockhash}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
    blockhash(blockhash: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!blockhash || /^(\s*)$/.test(blockhash)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'blockhash required'
                }, callback);
            }
            axios.get(this.fullUrl + `/rawblock/${blockhash}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }
    blockindex(height: any, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
             if (!height || /^(\s*)$/.test(height)) {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'height required'
                }, callback);
            }
            axios.get(this.fullUrl + `/block-index/${height}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status_getBestBlockHash(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.api_url + `/api/status?q=getBestBlockHash`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status_getLastBlockHash(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.api_url + `/api/status?q=getLastBlockHash`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status_getDifficulty(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.api_url + `/api/status?q=getDifficulty`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    status(callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.options.api_url + `/api/status`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    address_getUtxos(address: any, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {

        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback)
            });
        }
        let addrs: string[] = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        } else {
            addrs = address;
        }

        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/addr/${address}/utxo`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    address_getStatus(address: any, callback?: Function, fromIndex: number = 0, toIndex: number = 1000): Promise<any> {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback)
            });
        }
        let addrs: string[] = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        } else {
            addrs = address;
        }
        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/addr/${address}?fromIndex=${fromIndex}&toIndex=${toIndex}`,
                {
                    headers: {}
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    private isStringOrNonEmptyArray(item: any):  boolean {
        if (!item) {
            return false;
        }

        if (Array.isArray(item) && !item.length) {
            return false;
        }

        return true;
    }

    xpub_getStatus(xpub: any, callback?: Function): Promise<any> {

        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/xpub/${xpub}/status?&api_key=${this.options.api_key}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    xpub_getAddressNext(xpub: any, reserveTime: number = 0, callback?: Function): Promise<any> {

        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/xpub/${xpub}/addrs/next?reserveTime=${reserveTime}&api_key=${this.options.api_key}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    xpub_getTransactions(xpub: any, fromIndex: number = 0, toIndex: number = 1000, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/xpub/${xpub}/txs?fromIndex=${fromIndex}&toIndex=${toIndex}&api_key=${this.options.api_key}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    xpub_getAddresses(xpub: any, fromIndex: number = 0, toIndex: number = 1000, callback?: Function): Promise<any> {

        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/xpub/${xpub}/addrs?fromIndex=${fromIndex}&toIndex=${toIndex}&api_key=${this.options.api_key}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    xpub_getUtxos(xpub: any, fromIndex: number = 0, toIndex: number = 1000, callback?: Function): Promise<any> {

        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/xpub/${xpub}/utxo?fromIndex=${fromIndex}&toIndex=${toIndex}&api_key=${this.options.api_key}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    addresses_getUtxos(address: any, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback)
            });
        }
        let addrs: string[] = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        } else {
            addrs = address;
        }

        let payload: any = {
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
                axios.get(this.fullUrl + `/addr/${addrs}/utxo`,
                    {
                        headers: { }
                    }
                ).then((response) => {
                    this.callbackAndResolve(resolve, response.data, callback);
                }).catch((ex) => {
                    this.callbackAndResolve(resolve, {
                        code: ex.response.status,
                        message: ex.message ? ex.message : ex.toString()
                    }, callback)
                })
            });
        }

        return new Promise((resolve, reject) => {
            axios.post(this.fullUrl + `/addrs/utxo`,
                payload,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    address_getSummary(address: any, callback?: Function): Promise<any> {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    code: 422,
                    message: 'address required'
                }, callback)
            });
        }
        let addrs: string[] = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        } else {
            addrs = address;
        }

        return new Promise((resolve, reject) => {
            axios.get(this.fullUrl + `/addr/${address}`,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    address_getTxs(address: any, fromIndex: number = 0, toIndex: number = 20, noAsm: boolean = true, noScript: boolean = true, noSpent: boolean = true, callback?: Function): Promise<any> {
        if (!this.isStringOrNonEmptyArray(address)) {
            return new Promise((resolve, reject) => {
                this.callbackAndResolve(resolve, {
                    message: 'address required'
                }, callback)
            });
        }
        let addrs: string[] = [];
        if (!Array.isArray(address)) {
            addrs.push(address);
        } else {
            addrs = address;
        }

        return new Promise((resolve, reject) => {

            let payload: any = {
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
                payload.toIndex = noSpent;
            }

            axios.post(this.options.api_url + `/api/addrs/txs`,
                payload,
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, {
                    code: ex.response.status,
                    message: ex.message ? ex.message : ex.toString()
                }, callback)
            })
        });
    }

    sendTx(rawtx: string, callback?: Function): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.post(this.fullUrl + `/tx/send`,
                { rawtx },
                {
                    headers: { }
                }
            ).then((response) => {
                this.callbackAndResolve(resolve, response.data, callback);
            }).catch((ex) => {
                this.callbackAndResolve(resolve, ex.response.data, callback)
            })
        });
    }
}