"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_client_1 = require("./api-client");
class AddressMethods {
    constructor(options) {
        if (options) {
            this.options = options;
        }
    }
    getUtxos(addrs, callback, fromIndex = 0, toIndex = 20) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.address_getUtxos(addrs, fromIndex, toIndex, callback);
    }
    getSummary(addr, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.address_getSummary(addr, callback);
    }
    getTransactions(addr, callback, fromIndex = 0, toIndex = 20, noAsm = true, noScript = true, noSpent = true) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.address_getTxs(addr, fromIndex, toIndex, noAsm, noScript, noSpent, callback);
    }
    getStatus(addr, callback, fromIndex = 0, toIndex = 20) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.address_getStatus(addr, callback, fromIndex, toIndex);
    }
}
class XpubMethods {
    constructor(options) {
        if (options) {
            this.options = options;
        }
    }
    getUtxos(xpub, callback, fromIndex = 0, toIndex = 20) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.xpub_getUtxos(xpub, fromIndex, toIndex, callback);
    }
    getAddressNext(xpub, reserveTime = 0, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.xpub_getAddressNext(xpub, reserveTime, callback);
    }
    getAddresses(xpub, callback, fromIndex = 0, toIndex = 20) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.xpub_getAddresses(xpub, fromIndex, toIndex, callback);
    }
    getStatus(xpub, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.xpub_getStatus(xpub, callback);
    }
    getTransactions(xpub, callback, fromIndex = 0, toIndex = 20) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.xpub_getTransactions(xpub, fromIndex, toIndex, callback);
    }
}
class TxMethods {
    constructor(options) {
        if (options) {
            this.options = options;
        }
    }
    get(txid, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.tx_getTransaction(txid, callback);
    }
    getRaw(txid, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.tx_getTransactionRaw(txid, callback);
    }
    send(rawtx, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.sendTx(rawtx, callback);
    }
}
class BlockMethods {
    constructor(options) {
        if (options) {
            this.options = options;
        }
    }
    getByBlockHashRaw(blockhash, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.rawblock(blockhash, callback);
    }
    getByBlockHash(blockhash, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.block(blockhash, callback);
    }
    getBlockHashByIndex(index, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.blockindex(index, callback);
    }
}
class ChainInfoMethods {
    constructor(options) {
        if (options) {
            this.options = options;
        }
    }
    bestBlockHash(callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.status_getBestBlockHash(callback);
    }
    lastBlockHash(callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.status_getLastBlockHash(callback);
    }
    difficulty(callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.status_getDifficulty(callback);
    }
    status(callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.status(callback);
    }
}
class WebhookMethods {
    constructor(options) {
        if (options) {
            this.options = options;
        }
    }
    updateConfig(url, enabled, secret, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.webhook_updateConfig(url, enabled, secret, callback);
    }
    getConfig(callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.webhook_getConfig(callback);
    }
    updateMonitoredAddresses(addrs, callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.webhook_updateMonitoredAddresses(addrs, callback);
    }
    getMonitoredAddresses(callback) {
        const apiClient = new api_client_1.APIClient(this.options);
        return apiClient.webhook_getMonitoredAddresses(callback);
    }
}
const defaultOptions = {
    api_url: 'https://api.bitindex.network',
    network: 'main',
    version_path: 'api/v3',
    api_key: '' // Set to your API key for xpub and webhook related calls
};
class BitIndexSDK {
    constructor(providedOptions) {
        this.options = Object.assign({}, defaultOptions, providedOptions);
        this.address = new AddressMethods(this.options);
        this.xpub = new XpubMethods(this.options);
        this.tx = new TxMethods(this.options);
        this.block = new BlockMethods(this.options);
        this.chaininfo = new ChainInfoMethods(this.options);
        this.webhook = new WebhookMethods(this.options);
    }
}
exports.default = BitIndexSDK;
function instance(options) {
    const mergedOptions = Object.assign({}, defaultOptions, options);
    return new BitIndexSDK(mergedOptions);
}
exports.instance = instance;
try {
    if (window) {
        window['BitIndex'] = BitIndexSDK;
    }
}
catch (ex) {
    // Window is not defined, must be running in windowless env....
}
