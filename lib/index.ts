import { APIClient } from './api-client';

class AddressMethods {
  options;
  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
  }

  getUtxos(addrs: any[], fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.address_getUtxos(addrs, fromIndex, toIndex, callback);
  }

  getSummary(addr: any, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.address_getSummary(addr, callback);
  }

  getTxs(addr: any, callback?: Function, fromIndex: number = 0, toIndex: number = 20, noAsm: boolean = true, noScript: boolean = true, noSpent: boolean = true): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.address_getTxs(addr, fromIndex, toIndex, noAsm, noScript, noSpent, callback);
  }
  getStatus(addr: string, callback?: Function, fromIndex: number = 0, toIndex: number = 20): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.address_getStatus(addr, callback, fromIndex, toIndex);
  }
}

class XpubMethods {
  options;
  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
  }

  getUtxos(xpub: string, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.xpub_getUtxos(xpub, fromIndex, toIndex, callback);
  }
  getAddressNext(xpub: string, reserveTime: number = 0, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.xpub_getAddressNext(xpub, reserveTime, callback);
  }
  getAddresses(xpub: string, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.xpub_getAddresses(xpub, fromIndex, toIndex, callback);
  }
  getStatus(xpub: string, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.xpub_getStatus(xpub, callback);
  }

  getTransactions(xpub: string, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.xpub_getTransactions(xpub, fromIndex, toIndex, callback);
  }
}

class TxMethods {
  options;
  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
  }

  get(txid: string, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.tx_getTransaction(txid, callback);
  }
  getRaw(txid: string, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.tx_getTransactionRaw(txid, callback);
  }

  send(rawtx: string, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.sendTx(rawtx, callback);
  }
}

class BlockMethods {
  options;
  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
  }

  getByBlockHashRaw(blockhash: string, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.rawblock(blockhash, callback);
  }

  getByBlockHash(blockhash: string, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.block(blockhash, callback);
  }

  getBlockHashByIndex(index: any, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.blockindex(index, callback);
  }
}

class ChainInfoMethods {
  options;
  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
  }
  bestBlockHash(callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.status_getBestBlockHash(callback);
  }

  lastBlockHash(callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.status_getLastBlockHash(callback);
  }

  difficulty(callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.status_getDifficulty(callback);
  }

  status(callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.status(callback);
  }
}

class WebhookMethods {
  options;
  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
  }
  updateConfig(url: string, enabled: boolean, secret: string, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.webhook_updateConfig(url, enabled, secret, callback);
  }

  getConfig(callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.webhook_getConfig(callback);
  }

  updateMonitoredAddresses(addrs: Array<{addr: string}>, callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.webhook_updateMonitoredAddresses(addrs, callback);
  }

  getMonitoredAddresses(callback?: Function): Promise<any> {
    const apiClient = new APIClient(this.options);
    return apiClient.webhook_getMonitoredAddresses(callback);
  }
}

export default class BitIndexSDK {
  options;
  address;
  xpub;
  tx;
  block;
  chaininfo;
  webhook;
  constructor(options?: any) {
    if (options) {
      this.options = options;
    } else {
      throw Error("Required options for constructor")
    }
    this.address = new AddressMethods(this.options);
    this.xpub = new XpubMethods(this.options);
    this.tx = new TxMethods(this.options);
    this.block = new BlockMethods(this.options);
    this.chaininfo = new ChainInfoMethods(this.options);
    this.webhook = new WebhookMethods(this.options);
  }
}

export function instance(options?: any): BitIndexSDK {
  return new BitIndexSDK(options);
}

try {
  if (window) {
    window['BitIndex'] = BitIndexSDK;
  }
}
catch (ex) {
  // Window is not defined, must be running in windowless env....
}
