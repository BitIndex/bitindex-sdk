# BitIndex Javascript SDK
https://www.bitindex.network

BitIndex is a powerful Bitcoin SV blockchain API built for developers.

*Insight-API Compatible*

![bitindex_header](bitindex_header.png)

[View HTML API Documentation](https://www.bitindex.network/developers/api-documentation-v3.html)

---
## Quick Preview

Easily query balances, utxos, and transactions.

Mainnet:

https://api.bitindex.network/api/v3/main/addr/12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX
https://api.bitindex.network/api/v3/main/addr/12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX/utxo
https://api.bitindex.network/api/v3/main/tx/96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6

Testnet:

https://api.bitindex.network/api/v3/test/addr/mw72ykErwcQoHnRwabNwoR7iqgFw4ZCzkV
https://api.bitindex.network/api/v3/test/addr/mw72ykErwcQoHnRwabNwoR7iqgFw4ZCzkV/utxo
https://api.bitindex.network/api/v3/test/tx/2cb32f8816f47f072fae8bbe506fe39ed9e81c7ecee65fae2d5a40cd299f557e

STN

https://api.bitindex.network/api/v3/stn/addr/n4ioKcJWq8LwxMCyUGSyk8H8MMrMKVCKmK
https://api.bitindex.network/api/v3/stn/addr/n4ioKcJWq8LwxMCyUGSyk8H8MMrMKVCKmK/utxo
https://api.bitindex.network/api/v3/stn/tx/1a31edadbfa73702c0768ceace77ba6000cd91d705f3a0030be98bd9a1bcd027

---
## Table of Contents
* [Installation and Usage](#installation-and-usage)
* [Prerequisites](#Prerequisites)
* [What's Included in this SDK](#whats-Included-in-this-SDK)
* [Endpoints](#endpoints)
* [Promises vs. Callbacks](#promises-vs-callback)
* [Browser Examples](https://github.com/BitIndex/bitindex-sdk/tree/master/lib/examples)
* [Distribution](https://github.com/BitIndex/bitindex-sdk/tree/master/dist)
    - [Latest Bundle](https://github.com/BitIndex/bitindex-sdk/blob/master/dist/bundle.min.js)
    - [Basic Browser Example](https://github.com/BitIndex/bitindex-sdk/blob/master/dist/basic.html)
    - [Live Browser Example](https://media.bitcoinfiles.org/94dc4e05dc1a1cd87d62e3b1d69b7f0dd15dd7555948849b9ce7e81a9f690993)
    - [Typescript Definitions](https://github.com/BitIndex/bitindex-sdk/blob/master/dist)
* [Operations](#operations)
    - [Address](#address)
        - [address.getUtxos](#addressgetUtxos)
        - [address.getStatus](#addressgetStatus)
        - [address.getTransactions](#addressgetTransactions)
    - [Transaction](#transaction)
        - [tx.get](#txget)
        - [tx.getRaw](#txgetRaw)
        - [tx.send](#txsend)
    - [Chain Info](#chaininfo)
        - [chaininfo.status](#chaininfostatus)
        - [chaininfo.bestBlockHash](#chaininfobestBlockHash)
        - [chaininfo.lastBlockHash](#chaininfolastBlockHash)
        - [chaininfo.difficulty](#chaininfodifficulty)
    - [Block](#block)
        - [block.getByBlockHash](#blockgetByBlockHash)
        - [block.getByBlockHashRaw](#blockgetByBlockHashRaw)
        - [block.getBlockHashByIndex](#blockgetBlockHashByIndex)
    - [Xpub](#xpub)
        - [xpub.getUtxos](#xpubgetUtxos)
        - [xpub.getAddresses](#xpubgetAddresses)
        - [xpub.status](#xpubstatus)
        - [xpub.getTransactions](#xpubgetTransactions)
        - [xpub.getAddressNext](#xpubgetAddressNext)
    - [Webhook](#webhook)
        - [webhook.updateConfig](#webhookupdateConfig)
        - [webhook.getConfig](#webhookgetConfig)
        - [webhook.updateMonitoredAddresses](#webhookupdateMonitoredAddresses)
        - [webhook.getMonitoredAddresses](#webhookgetMonitoredAddresses)
        - [Callback Example](#callback-example)

## Installation and Usage

**Installation**
```sh
npm install bitindex-sdk --save
```

**Include**
```javascript
// Node
var bitindex = require('bitindex-sdk').instance();
```

```html
<!-- Browser -->
<script src="dist/bundle.min.js"></script>
<script language="javascript">
    // ...
    var bitindex = new BitIndex();
    var result = await bitindex.address.getUtxos('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');
    console.log('result', result);
</script>
```

## Prerequisites

- No API authentication needed except for Xpub calls
- For Xpub calls get an API key at [BitIndex](https://www.bitindex.network)


## What's Included in this SDK

### BitIndex API v3

Documentation: https://www.bitindex.network/developers/api-documentation-v3.html

*New*: BitIndex is now [Bitcore Insight-API](https://github.com/bitpay/insight-api/blob/45ebf7a152c1abfd179bf1b0d32734a2bd36e105/README.md) compatible.
The Insight-API compatibile methods are indicated with a comment.

## Endpoints

*Please note:* Currently only the "main" (mainnet) endpoint is supported.

Endpoints:
- https://api.bitindex.network/api/v3/main (Mainnet)
- https://api.bitindex.network/api/v3/test (Testnet)
- https://api.bitindex.network/api/v3/stn (Scaling Testnet - STN)

Example get a transaction on 'Mainnet':

https://api.bitindex.network/api/v3/main/tx/96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6

Example get a transaction on 'Testnet':

https://api.bitindex.network/api/v3/test/tx/0849b19c494ffe2d74fe4a7930f11e74a3ad10607f47e61bc06a892f89bcee67

Example get a transaction on 'Scaling Testnet (STN)':

https://api.bitindex.network/api/v3/stn/tx/d677e2a67fd960cf85489a365bbdc3b5e5de2ccc91f7552d096ccebfaf3e584f


### Promises vs. Callback

Both `await` and callback styles are supported for all methods.

Example:

```javascript

// Await style with promises
var result = await bitindex.address.getUtxos('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');

// Callback style
bitindex.address.getUtxos('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', function(result) {
    // ...
});

```

### Address

#### address.getUtxos

Get unspent outputs

```javascript
var result = await bitindex.address.getUtxos('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');
// Or specify multiple addresses to retrieve Utxo's for all addresses...
var result = await bitindex.address.getUtxos(['17d9np3mtaz13kYdePwc2Cufd6dMoNjWib', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);

/*
    [
        {
            address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
            txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
            vout: 0,
            amount: 0.00015399,
            satoshis: 15399,
            value: 15399,
            height: 576168,
            confirmations: 1,
            scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
        },
        {
            address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
            txid: '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
            vout: 1,
            amount: 0.00014656,
            satoshis: 14656,
            value: 14656,
            height: 576025,
            confirmations: 144,
            scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
        }
    ]
*/
```

#### address.getStatus

Get balances and transaction info

```javascript
var result = await bitindex.address.getStatus('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');

/*
{
    "addrStr": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
    "balance": 0.00030055,
    "balanceSat": 30055,
    "totalReceived": 0.00060576,
    "totalReceivedSat": 60576,
    "totalSent": 0.00030521,
    "totalSentSat": 30521,
    "unconfirmedBalance": 0,
    "unconfirmedBalanceSat": 0,
    "unconfirmedTxApperances": 0,
    "txApperances": 4,
    "transactions": [
        "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
        "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
        "d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
        "bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45"
    ]
}
*/
```

#### address.getTransactions

Get full transactions where the addresses was the sender or receiver.

```javascript
var result = await bitindex.address.getTransactions('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');

console.log(result);
/*
{
  "totalItems": 4,
  "from": 0,
  "to": 50,
  "items": [
    {
      "txid": "bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
      "size": 225,
      "version": 1,
      "locktime": 0,
      "vin": [
        {
          "txid": "e8ef92e542cceaedef6ce338498240d7db80925ff009d77fac34e3ddc134c1a4",
          "vout": 1,
          "scriptSig": {
            "hex": "47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7"
          },
          "sequence": 4294967295,
          "n": 0,
          "value": 0.00924603,
          "addr": "17d9np3mtaz13kYdePwc2Cufd6dMoNjWib",
          "valueSat": 924603
        }
      ],
      "vout": [
        {
          "value": 0.00015463,
          "n": 0,
          "scriptPubKey": {
            "hex": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
            ]
          },
          "valueSat": 15463
        },
        {
          "value": 0.00908911,
          "n": 1,
          "scriptPubKey": {
            "hex": "76a9146656783b099d284e4a7871b5fc17848db11d4aef88ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
              "1AL7WaqTfGqU1LrKzcdsjzNJC4YrtVFrgb"
            ]
          },
          "valueSat": 908911
        }
      ],
      "blockhash": "0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
      "confirmations": 143,
      "time": 1554007897,
      "blocktime": 1554007897,
      "rawtx": "0100000001a4c134c1dde334ac7fd709f05f9280dbd740824938e36cefedeacc42e592efe8010000006a47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7ffffffff02673c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac6fde0d00000000001976a9146656783b099d284e4a7871b5fc17848db11d4aef88ac00000000",
      "blockheight": 576025,
      "valueOut": 0.00924374,
      "valueIn": 0.00924603,
      "fees": 0.00000229
    }
  ]
}
*/
```

### Transaction

#### tx.get

Get a single transaction

```javascript
var result = await bitindex.tx.get('96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6');

/*
{
    "hex": "0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
    "txid": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
    "hash": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
    "size": 301,
    "version": 1,
    "locktime": 0,
    "vin": [
    {
        "txid": "d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
        "vout": 1,
        "scriptSig": {
            "asm": "30440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb7[ALL|FORKID] 044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a",
            "hex": "4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
        },
        "sequence": 4294967295
    }
    ],
    "vout": [
    {
        "value": 0,
        "n": 0,
        "scriptPubKey": {
            "asm": "OP_RETURN 31394878696756345179427633744870515663554551797131707a5a56646f417574 1717859169 746578742f6d61726b646f776e 5554462d38 616e6f74686572",
            "hex": "6a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f74686572",
            "type": "nulldata"
        }
    },
    {
        "value": 0.00014656,
        "n": 1,
        "scriptPubKey": {
            "asm": "OP_DUP OP_HASH160 10bdcba3041b5e5517a58f2e405293c14a7c70c1 OP_EQUALVERIFY OP_CHECKSIG",
            "hex": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
            "reqSigs": 1,
            "type": "pubkeyhash",
            "addresses": [
            "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
            ]
        }
    }
    ],
    "blockhash": "0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
    "confirmations": 3428,
    "time": 1554007897,
    "blocktime": 1554007897
}
*/
```

#### tx.getRaw

Get a single transaction in raw hex format

```javascript
var result = await bitindex.tx.get('96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6');

/*
{
    rawtx: "0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000"
}
*/
```


#### tx.send

Send broadcast of a raw transaction

```javascript
var result = await bitindex.tx.send('0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000');

/*
{
    txid: "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6"
}
*/
```

### Chain Info

#### chaininfo.status

Get chain info and network status

```javascript
var result = await bitindex.chaininfo.status();

/*
{
    info: {
        version: 100010100,
        protocolversion: 70015,
        // blocks: 576014,
        timeoffset: 0,
        // connections: 8,
        proxy: '',
        // difficulty: 97359826681.75484,
        testnet: false,
        relayfee: 0.00001,
        errors: 'This is a pre-release test build - use at your own risk - do not use for mining or merchant applications',
        network: 'livenet'
    }
}
*/
```

#### chaininfo.bestBlockHash

Get best block hash

```javascript
var result = await bitindex.chaininfo.bestBlockHash();

/*
{
  "bestblockhash": "00000000000000000835e1703971ecbb6462daded264151708b1ba483bd0cfc2"
}
*/
```

#### chaininfo.lastBlockHash

Get last block hash

```javascript
var result = await bitindex.chaininfo.lastBlockHash();

/*
{
  "syncTipHash": "00000000000000000835e1703971ecbb6462daded264151708b1ba483bd0cfc2",
  "lastblockhash": "00000000000000000835e1703971ecbb6462daded264151708b1ba483bd0cfc2"
}
*/
```

#### chaininfo.difficulty

Get difficulty

```javascript
var result = await bitindex.chaininfo.difficulty();

/*
{
  "difficulty": 71973293399.13077
}
*/
```


### Block

#### block.getByBlockHash

Get block by hash

```javascript
var result = await bitindex.chaininfo.getByBlockHash('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');

/*
{
    hash: '000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52',
    confirmations: 10,
    size: 1397,
    height: 575870,
    version: 549453824,
    versionHex: '20c00000',
    merkleroot: '5eff2b149295b0010548910fc158664ee36f26781fbaceb42e71d924fac725c4',
    tx:
    [
        '16d005b2b9b0c63a791da6e9d41566962fa403619d3cacce9d9a2c33cd10573c',
        'a836d07957fa6f9f12cd2a4ef07c914204d2d8109b4eda2faed9235125c58000',
        'e94dd09fa211490138a3141b3f1754cb2fc080e6bac52055bff8b909beb36d66',
        'c45d885ed16f0f9a47023ef45d9b8c70a100ccf535982343206f0d932032c559',
        'd9e67c9879e568d454ff491638f149cabe9c9853af48ccfb314585fc6cf190dd',
        '99e536eb11700d5d04eafd55dbad9c43f6a93ac11aacd4f0564487664585c0ed',
        'f13094f1007c276fc536163af79e97ecaf55e88b56d8d393e860ee84e546bbd6'
    ],
    time: 1553919636,
    mediantime: 1553915823,
    nonce: 1390191648,
    bits: '180beac2',
    difficulty: 92262545584.60136,
    chainwork: '000000000000000000000000000000000000000000de4ca83d16db8a005b4264',
    previousblockhash: '000000000000000008db5e402d1045c27de3d11a77c2ac7c420838c1b67df725',
    nextblockhash: '0000000000000000046c026c285ed7bc7ba7998f90938eb160c0f69b21dbdf2b'
}
*/
```

#### block.getByBlockHashRaw

Get raw block by hash

```javascript
var result = await bitindex.chaininfo.getByBlockHashRaw('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');

/*
{
    "rawblock": "0000c02025f77db6c13808427cacc2771ad1e37dc245102d405edb080000000000000000c425c7fa24d9712eb4ceba1f78266fe34e6658c10f91480501b09592142bff5e94ee9e5cc2ea0b1820a4dc520701000000010000000000000000000000000000000000000000000000000000000000000000ffffffff53037ec908040fef9e5cfabe6d6df41491ca64d04613901a883289cefe0bb98ff57c057e9b05669464ee97d0eb1480000000000000000808061ca3f50a0100142f70726f68617368696e672e636f6d442702002f00000000011281814a000000001976a9147f346e50f5d8eaf4519794668089d9d473a20dbb88ac0000000002000000013dd3087289ab1dd9c2644fec7c73985906f06d44ebf196c06ab51165e9641323000000006b483045022100c8b098c97c6613f9abd391737e8dcc1af7ee59d00f6d49ba4f01c866b7d4eb2702204b946965292283c8c998c965f85bf24b67308870bf99bac047f9b464fd24e1ca412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01487db11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7bc9080002000000010080c5255123d9ae2fda4e9b10d8d20442917cf04e2acd129f6ffa5779d036a8000000006a47304402201f37c5068e2eda3ec4c491f51dbd447c22003a4614b9284a51cfe5f1df7d7c3d02201aa79d17d2b306538d5693538b8b1fd2ff354286b6606916241a483558e96b9c412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01857cb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001666db3be09b9f8bf5520c5bae680c02fcb54173f1b14a338014911a29fd04de9000000006a4730440220603a05534df953ce410250e150935d6eb9349f100bd07d013082bbe3ac79bc0802205219d2eec4b5ba5f270c0d870e0e741b3a14cb6046d5d7fdc0246e10c2d98e31412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01c27bb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800020000000159c53220930d6f2043239835f5cc00a1708c9b5df43e02479a0f6fd15e885dc4000000006a47304402202852448f44746ad9e6fac1bc2abb66bfa6faaa2d828f056f74f298cfdec3fba202201e4b1d4196c60e137c12bd7d6f5e519f9475634986d716e3bb5b8546b8dab91a412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01ff7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001dd90f16cfc854531fbcc48af53989cbeca49f1381649ff54d468e579987ce6d9000000006b483045022100b63ed1e8cbeee5a9f21abca10ac3582ab79f6fb5cde73f562b332a7cfd9268300220047c967acecb77326e069cf388a2898affec665043046c59a5e008ec2092274d412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff013c7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac2dc908000200000001edc0854566874456f0d4ac1ac13aa9f6439caddb55fdea045d0d7011eb36e599000000006a47304402201f1ed57604b6e4c50a1997cd9d78a78a1ca80cbeffc93dfd36a944b289eed611022028648db1adc259cd149091a9e9f7ca5e15142e162d60ed7c86c07d97e85819c6412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff017979b11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800"
}
*/
```

#### block.getBlockHashByIndex

Get raw block by hash

```javascript
var result = await bitindex.chaininfo.getBlockHashByIndex('575870');

/*
{
    "blockHash": "000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52"
}
*/
```

### Xpub

#### xpub.getUtxos

Get utxos for derived addresses from an xpub.

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

var result = await bitindex.xpub.getUtxos('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');

/*
[
    {
        "address": "1MAaJjvGZAJAP4DcBTiCXcRMwj2Q7gZ2oU",
        "num": 31,
        "chain": 1,
        "txid": "1c5c83b2f5b1d16ea8bb80c03dbd9bb98e939d94ca71553e4b8acee6f5534fd2",
        "vout": 0,
        "value": 1242,
        "height": 577570,
        "path": "1/31",
        "scriptPubKey": "76a914dd320fc943b5d115313ff62627f77eecdfb6183088ac",
        "amount": 0.00001242,
        "satoshis": 1242,
        "confirmations": 1862
    }
]
*/
```

#### xpub.getAddresses

Get addresses for an xpub

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

var result = await bitindex.xpub.getAddresses('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');

/*
[
    {
        "address": "1M6N389jhRi5DQgoQcNir2e2REpYeAYavD",
        "num": 0,
        "chain": 1,
        "path": '1/0'
    },
    {
        "address": "18Fw8CPkXT8FNDDDLXHnqkRkf8yHa8zKSj",
        "num": 0,
        "chain": 0,
        "path": '0/0'
    }
]
*/
```

#### xpub.getStatus

Get balances and status for xpub

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

var result = await bitindex.xpub.getStatus('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');

/*
{
    "confirmed": 41446,
    "unconfirmed": 0
}
*/
```

#### xpub.getTransactions

Get transactions for xpub addresses

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

var result = await bitindex.xpub.getTransactions('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');

/*
[
    {
        "address": "1MAaJjvGZAJAP4DcBTiCXcRMwj2Q7gZ2oU",
        "chain": 1,
        "height": 579543,
        "num": 31,
        "path": "1/31",
        "txid": "9c6c9a91f45edc8b9126736648087bdb7cf9ac1c85234787a55178b8dc4344a9",
    }
]
*/
```

#### xpub.getAddressNext

Get next free address for the xpub.  You can use `reserveTime` to choose how long to hold an address.

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

// Reserve an address for 1 hour.
// Subsequent calls will return the next address that is available and not reserved.
var result = await bitindex.xpub.getAddressNext('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ', 3600);

/*
[
    {
        "address": "15h9n5TmGdJK7SXk1CCqvKFuhoiDJP5Wkm",
        "chain": 0,
        "num": 34,
        "path": "0/34",
    },
    {
        "address": "1PbXGRs9xRN9UFP4SPUYrtE3KmQ6bATSvF",
        "chain": 1,
        "num": 34,
        "path": "1/34",
    }
]
*/

// Do not reserve the address and just get the next free one.
var result = await bitindex.xpub.getAddressNext('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');

/*
[
    {
        "address": "15h9n5TmGdJK7SXk1CCqvKFuhoiDJP5Wkm",
        "chain": 0,
        "num": 34,
        "path": "0/34",
    },
    {
        "address": "1PbXGRs9xRN9UFP4SPUYrtE3KmQ6bATSvF",
        "chain": 1,
        "num": 34,
        "path": "1/34",
    }
]
*/
```

### Webhooks

#### webhook.updateConfig

Update webhook configuration.

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

// Enable callbacks
var result = await index.instance(options).webhook.updateConfig(
    'http://noneexistenturl1230000.com/callback',
    true,
    'mysecret'
);
/*
{
    url: 'http://noneexistenturl1230000.com/callback',
    enabled: true,
    secret: 'mysecret'
}
});
*/

```

#### webhook.getConfig

Get the webhook configuration.

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

// Enable callbacks
var result = await index.instance(options).webhook.getConfig();
/*
{
    url: 'http://noneexistenturl1230000.com/callback',
    enabled: true,
    secret: 'mysecret'
}
});
*/

```

#### webhook.updateMonitoredAddresses

Update addresses and xpubs that are monitored for payments.

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

// Update addresses and xpubs that are monitored.
// You must enable webhooks to receive
var result = await index.instance(options).webhook.updateMonitoredAddresses(
    [
        {
            addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
        },
        {
            addr: '1GjiTsV66HXngNX6Fq8xMnYZVj13munG3m'
        }
    ]
);
```

#### webhook.getMonitoredAddresses

Get addresses and xpubs that are monitored for payments.

NOTE: You must provide an `api_key` for xpub related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

// Update addresses and xpubs that are monitored.
// You must enable webhooks to receive
var result = await index.instance(options).webhook.getMonitoredAddresses(
    [
        {
            addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
        },
        {
            addr: '1GjiTsV66HXngNX6Fq8xMnYZVj13munG3m'
        }
    ]
);
```


#### Callback Example

Notify at the webhook endpoint callback url when an address or child address of an xpub receives a payment.

Callbacks for addresses are received at your configured URL.

Note: You can receive up to multiple callbacks in any order. Make sure to check the 'confirmations' parameter and always use the highest 'confirmations' your application has seen before.

It is possible that old webhooks are in transit with a lower 'confirmations' than what you have received before.

Note: You should be able to rely on payments of 3 confirmations.

Always check with the > and < operators since it cannot be guaranteed that you will receive a webhook with exactly 3 confirmations (it could be 4, 5 or more).

Sample POST Request Body (Content-Type: application/json)
```javascript
{
    txid: 'e9865ab744ef236f0f436455a439263a53d9708f5eca66625dccb85cf1ff5947',
    address: '1M6N389jhRi5DQgoQcNir2e2REpYeAYavD',
    xpub: 'xpub6CYu...',    // Xpub will be present if address is associated with an xpub
    path: '1/0',            // Path is set if xpub is present
    satoshis: 1273,
    confirmations: 3,
    vout: 0,
    secret: "secret123key", // Set this secret key above and then compare in your code
    network: "main", // only main supported for now.
}
```


## Build and Test

```
npm run build
npm test
```

-----------


 ## Any questions or ideas?

 We would love to hear from you!
 https://www.BitIndex.network
 https://twitter.com/BitIndexNetwork


