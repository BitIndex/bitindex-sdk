import { InsightClient } from './insight-client';

export class InsightAPI {
  options = undefined;

  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
  }

  rawblock(blockhash: string, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.rawblock(blockhash, callback);
  }

  block(blockhash: string, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.block(blockhash, callback);
  }

  tx(txid: string, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.tx(txid, callback);
  }

  rawtx(txid: string, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.rawtx(txid, callback);
  }

  blockindex(height: any, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.blockindex(height, callback);
  }

  status_getBestBlockHash(callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.status_getBestBlockHash(callback);
  }

  status_getLastBlockHash(callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.status_getLastBlockHash(callback);
  }

  status_getDifficulty(callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.status_getDifficulty(callback);
  }

  status(callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.status(callback);
  }

  addrUtxo(addr: any, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.addrsUtxo(addr, fromIndex, toIndex, callback);
  }

  addrsUtxo(addrs: any[], fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.addrsUtxo(addrs, fromIndex, toIndex, callback);
  }

  addrTxs(addr: any, fromIndex: number = 0, toIndex: number = 20, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.addrTxs(addr, callback);
  }

  addrsTxs(addrs: any, fromIndex: number = 0, toIndex: number = 20, noAsm: boolean = true, noScript: boolean = true, noSpent: boolean = true, callback?: Function): Promise<any> {
    const insightClient = new InsightClient(this.options);
    return insightClient.addrsTxs(addrs, fromIndex, toIndex, noAsm, noScript, noSpent, callback);
  }

}

export default class BitIndexSDK {
  options;
  insight;

  constructor(options?: any) {
    if (options) {
      this.options = options;
    }
    this.insight = new InsightAPI(this.options);
  }
}

export function instance(options?: any): BitIndexSDK {
  return new BitIndexSDK(options);
}

try {
  if (window) {
    window['bitindex'] = BitIndexSDK;
  }
}
catch (ex) {
  // Window is not defined, must be running in windowless env....
}
