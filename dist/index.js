"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insight_client_1 = require("./insight-client");
const core_client_1 = require("./core-client");
class InsightAPI {
    constructor(options) {
        this.options = undefined;
        if (options) {
            this.options = options;
        }
    }
    rawblock(blockhash, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.rawblock(blockhash, callback);
    }
    block(blockhash, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.block(blockhash, callback);
    }
    tx(txid, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.tx(txid, callback);
    }
    rawtx(txid, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.rawtx(txid, callback);
    }
    blockindex(height, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.blockindex(height, callback);
    }
    status_getBestBlockHash(callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.status_getBestBlockHash(callback);
    }
    status_getLastBlockHash(callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.status_getLastBlockHash(callback);
    }
    status_getDifficulty(callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.status_getDifficulty(callback);
    }
    status(callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.status(callback);
    }
    getAddressUtxos(addr, fromIndex = 0, toIndex = 20, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.addrsUtxo(addr, fromIndex, toIndex, callback);
    }
    getAddressesUtxos(addrs, fromIndex = 0, toIndex = 20, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.addrsUtxo(addrs, fromIndex, toIndex, callback);
    }
    getAddressTxs(addr, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.addrTxs(addr, callback);
    }
    getAddressesTxs(addrs, fromIndex = 0, toIndex = 20, noAsm = true, noScript = true, noSpent = true, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.addrsTxs(addrs, fromIndex, toIndex, noAsm, noScript, noSpent, callback);
    }
    sendTx(rawtx, callback) {
        const insightClient = new insight_client_1.InsightClient(this.options);
        return insightClient.sendTx(rawtx, callback);
    }
}
exports.InsightAPI = InsightAPI;
class BitIndexSDK {
    constructor(options) {
        if (options) {
            this.options = options;
        }
        this.insight = new InsightAPI(this.options);
        this.core = new core_client_1.CoreClient(this.options);
    }
    getAddressUtxos(addrs, callback) {
        return this.core.getAddressUtxos(addrs, callback);
    }
    sendTx(rawtx, callback) {
        return this.core.sendTx(rawtx, callback);
    }
}
exports.default = BitIndexSDK;
function instance(options) {
    return new BitIndexSDK(options);
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
