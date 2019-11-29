Note: BitIndex is now part of [MatterCloud](https://www.MatterCloud.net).
# [Deprecated - see below] BitIndex Javascript SDK

# Replaced by MatterCloudJS
Get it at: [https://github.com/mattercloud/mattercloudjs]


![bitindex_header](bitindex_header.png)

[View Old HTML API Documentation](https://www.bitindex.network/developers/api-documentation-v3.html)

---
## Quick Preview

Easily query balances, utxos, and transactions.

https://api.bitindex.network/api/v3/main/addr/12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX/utxo
https://api.bitindex.network/api/v3/main/tx/96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6

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
        - [address.getUtxosWithOptions](#addressgetUtxosWithOptions)
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
        - [block.getBlockHeaders](#blockgetBlockHeaders)
    - [Payments](#payments)
        - [payments.generatePaymentTxFromAddrs](#paymentsgeneratePaymentTxFromAddrs)

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

- API authentication
- Get an API key at [BitIndex](https://www.mattercloud.net)


## What's Included in this SDK

### BitIndex API v3

Documentation: https://www.bitindex.network/developers/api-documentation-v3.html

## Endpoints

*Please note:* Currently only the "main" (mainnet) endpoint is supported.

Endpoints:
- https://api.bitindex.network/api/v3/main (Mainnet)

Example get a transaction on 'Mainnet':

https://api.bitindex.network/api/v3/main/tx/96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6

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

#### address.getUtxosWithOptions

Get unspent outputs with options to filter and sort.

- offset
- limit
- afterHeight
- sort ('confirmations:asc', 'confirmations:desc', 'value:desc', etc)

```javascript
var result = await bitindex.address.getUtxosWithOptions({
    addrs: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', afterHeight: 576167, sort: 'value:desc'
});
// Or specify multiple addresses to retrieve Utxo's for all addresses...
var result = await bitindex.address.getUtxosWithOptions({
    addrs: ['17d9np3mtaz13kYdePwc2Cufd6dMoNjWib', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD'], afterHeight: 576167, sort: 'value:desc'
});
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
        }
    ]
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

#### block.getBlockHeaderByBlockHash

Get blockheader by hash. This dooes not return the txids in the block, for faster performance.
If you want the txids, then use `block.getByBlockHash`

```javascript
var result = await bitindex.block.getBlockHeaderByBlockHash('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');

/*
{
    hash: '000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52',
    confirmations: 10,
    height: 575870,
    version: 549453824,
    versionHex: '20c00000',
    merkleroot: '5eff2b149295b0010548910fc158664ee36f26781fbaceb42e71d924fac725c4',
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

#### block.getByBlockHash

Get block by hash. Warning: If you do not need the txids, then use block.getBlockHeaderByBlockHash because it is much faster to load.

```javascript
var result = await bitindex.block.getByBlockHash('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');

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
var result = await bitindex.block.getByBlockHashRaw('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');

/*
{
    "rawblock": "0000c02025f77db6c13808427cacc2771ad1e37dc245102d405edb080000000000000000c425c7fa24d9712eb4ceba1f78266fe34e6658c10f91480501b09592142bff5e94ee9e5cc2ea0b1820a4dc520701000000010000000000000000000000000000000000000000000000000000000000000000ffffffff53037ec908040fef9e5cfabe6d6df41491ca64d04613901a883289cefe0bb98ff57c057e9b05669464ee97d0eb1480000000000000000808061ca3f50a0100142f70726f68617368696e672e636f6d442702002f00000000011281814a000000001976a9147f346e50f5d8eaf4519794668089d9d473a20dbb88ac0000000002000000013dd3087289ab1dd9c2644fec7c73985906f06d44ebf196c06ab51165e9641323000000006b483045022100c8b098c97c6613f9abd391737e8dcc1af7ee59d00f6d49ba4f01c866b7d4eb2702204b946965292283c8c998c965f85bf24b67308870bf99bac047f9b464fd24e1ca412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01487db11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7bc9080002000000010080c5255123d9ae2fda4e9b10d8d20442917cf04e2acd129f6ffa5779d036a8000000006a47304402201f37c5068e2eda3ec4c491f51dbd447c22003a4614b9284a51cfe5f1df7d7c3d02201aa79d17d2b306538d5693538b8b1fd2ff354286b6606916241a483558e96b9c412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01857cb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001666db3be09b9f8bf5520c5bae680c02fcb54173f1b14a338014911a29fd04de9000000006a4730440220603a05534df953ce410250e150935d6eb9349f100bd07d013082bbe3ac79bc0802205219d2eec4b5ba5f270c0d870e0e741b3a14cb6046d5d7fdc0246e10c2d98e31412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01c27bb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800020000000159c53220930d6f2043239835f5cc00a1708c9b5df43e02479a0f6fd15e885dc4000000006a47304402202852448f44746ad9e6fac1bc2abb66bfa6faaa2d828f056f74f298cfdec3fba202201e4b1d4196c60e137c12bd7d6f5e519f9475634986d716e3bb5b8546b8dab91a412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01ff7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001dd90f16cfc854531fbcc48af53989cbeca49f1381649ff54d468e579987ce6d9000000006b483045022100b63ed1e8cbeee5a9f21abca10ac3582ab79f6fb5cde73f562b332a7cfd9268300220047c967acecb77326e069cf388a2898affec665043046c59a5e008ec2092274d412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff013c7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac2dc908000200000001edc0854566874456f0d4ac1ac13aa9f6439caddb55fdea045d0d7011eb36e599000000006a47304402201f1ed57604b6e4c50a1997cd9d78a78a1ca80cbeffc93dfd36a944b289eed611022028648db1adc259cd149091a9e9f7ca5e15142e162d60ed7c86c07d97e85819c6412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff017979b11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800"
}
*/
```

#### block.getBlockHashByIndex

Get raw block by hash

```javascript
var result = await bitindex.block.getBlockHashByIndex('575870');

/*
{
    "blockHash": "000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52"
}
*/
```

#### block.getBlockHeaders

Get blockheaders with options

```javascript
var result = bitindex.block.getBlockHeaders(
{
    fromHeight: -1, // Latest is -1. Or choose a specific height
    fromBlockHash: '000000003031a0e73735690c5a1ff2a4be82553b2a12b776fbd3a215dc8f778d',
    order: 'asc',
    limit: 20,
});
/*
[
    {
        "hash": "000000003031a0e73735690c5a1ff2a4be82553b2a12b776fbd3a215dc8f778d",
        "confirmations": 606673,
        "strippedsize": 0,
        "size": 215,
        "weight": 0,
        "height": 6,
        "version": 1,
        "versionHex": "00000001",
        "merkleroot": "20251a76e64e920e58291a30d4b212939aae976baca40e70818ceaa596fb9d37",
        "time": 1231471789,
        "nonce": 2538380312,
        "bits": "1d00ffff",
        "difficulty": 1,
        "previousblockhash": "000000009b7262315dbf071787ad3656097b892abffd1f95a1a022f896f533fc",
        "nextblockhash": "0000000071966c2b1d065fd446b1e485b2c9d9594acd2007ccbd5441cfc89444",
        "txcnt": 1,
        "coinbaseinfo": "BP//AB0BIw==",
        "coinbasetxid": "20251a76e64e920e58291a30d4b212939aae976baca40e70818ceaa596fb9d37"
    }
]
*/
```

### Payments


#### payments.generatePaymentTxFromAddrs

Generate an unsigned transaction with inputs and target. Uses available utxos from addresses.

NOTE: You must provide an `api_key` for all related calls.

```javascript

var bitindex = require('bitindex-sdk').instance({
    api_key: "your api key"
});

var result = await index.instance(options).payments.generatePaymentTxFromAddrs(
    {
        "feeRate": 1, // (optional) 1 bytes per sat
        "utxoInputSourceAddrs": "18FnwHbZz5wwCxJ4h2sQsAMYd7qyHryJUX",
        "changeAddr": "1CgECg3kJdSWEkozDMaEZh1kuHWVwSnN9Z",
        "targets": [
            {
            "address": "1KeRD3q4aPoW4cqu3zTkfPrRmXFkoEXE51",
            "value": 1009
            }
        ]
    }
);
```
Sample Response:
```
{
    "tx": {
        "hash": "2c923cc7e6f6b17ddc5633a9c9d0c74e5a4f08bfcc66bfe902c224568936549a",
        "version": 1,
        "inputs": [
            {
                "prevTxId": "7a4c9192176fe171beb09b644268cf14ec8e6a0d61a7da87f6342a35a57deb7f",
                "outputIndex": 3,
                "sequenceNumber": 4294967295,
                "script": "",
                "scriptString": "",
                "output": {
                    "satoshis": 550368,
                    "script": "76a9144f950ca34751b3d45a021475759a719654b0e6f788ac"
                },
                "address": "18FnwHbZz5wwCxJ4h2sQsAMYd7qyHryJUX"
            }
        ],
        "outputs": [
            {
                "satoshis": 1009,
                "script": "76a914cc85dcbf69eeb000f4074179df666d639289f67688ac"
            },
            {
                "satoshis": 549190,
                "script": "76a9148014a040e7fc4d1a86404197b1ea9389eb2bf8ed88ac"
            }
        ],
        "nLockTime": 0
    },
    "fee": 169
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


