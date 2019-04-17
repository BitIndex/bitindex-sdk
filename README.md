# bitindex-sdk
> BitIndex Javascript SDK
https://www.bitindex.network

BitIndex is a Bitcoin (SV) blockchain API for developers and wallet providers.
Get started with your free API key at [BitIndex](https://www.bitindex.network)

## Installation and Usage

**Installation**
```sh
npm install bitindex-sdk --save
```

**Include**
```javascript
// Include the library
var bitindex = require('bitindex-sdk');
```

##  What's Included in this SDK

### Insight API
A Bitcoin blockchain REST service compatible with [Bitcore Node](https://github.com/bitpay/bitcore-node).

BitIndex is [Bitcore Insight-API](https://github.com/bitpay/insight-api/blob/45ebf7a152c1abfd179bf1b0d32734a2bd36e105/README.md) compatible (Websockets and Webhooks coming soon!)
Use BitIndex to power your Bitcoin (SV) applications that rely on the Insight API payload formats.


### BitIndex API

API at https://www.bitindex.network/docs.html


### BitIndex Admin API (Coming soon!)

Manage your BitIndex account with the Admin API. Not yet implemented.


## Getting Started
The API endpoints:

- Insight API
    - https://api.bitindex.network/api
- BitIndex API:
    - https://api.bitindex.network/api/v2

## Prerequisites

- Get started with your free API key at [BitIndex](https://bitindex.network)

## Insight API HTTP Endpoints

### Raw Block: /api/rawblock/<blockHash>

**HTTP Request**
Retrieve the raw hex of a block.

Request format:
`GET https://api.bitindex.network/api/rawblock/00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2`

Response format:
```
{
  "rawblock": "00000020af777fb344890f50fb4ac3..."
}
```

**BitIndex SDK**
```javascript
var result = await bitindex.insight.rawblock('00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2');
/*
    {
        data: {
            rawblock: "0000c02025f77..."
        }
    }
*/
```

### Block: /api/block/<blockhash>

Retrieve JSON encoded block.

**HTTP Request**

Request format:
`GET https://api.bitindex.network/api/block/00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2`

Response format:
```javascript

{
    "hash": "00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2",
    "confirmations": 3,
    "size": 628,
    "height": 574245,
    "version": 536870912,
    "versionHex": "20000000",
    "merkleroot": "e19718da67f3128403836bc7fb78670962dbe0337fc14b5bad3a63df54208300",
    "tx": [
        "83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76",
        "a77a6bf8316f1b554ff798e2124774b738183e66f612c77cd667b50412d2c7e5",
        "6509bfde92889cd7424a6fe63cf3d83daa17b8ec7f30a141820f9221cd64aedd"
    ],
    "time": 1552937505,
    "mediantime": 1552936057,
    "nonce": 525258784,
    "bits": "180a8555",
    "difficulty": 104506491764.6737,
    "chainwork": "000000000000000000000000000000000000000000ddaaae5f36fbbabcbefbcb",
    "previousblockhash": "000000000000000000225ece4dd99e605e6f7f71a0c34afb500f8944b37f77af",
    "nextblockhash": "0000000000000000041c68cc8e188d932ebe57e24c2be4219f7294dd563fce8a"
}
```

**BitIndex SDK**
```javascript
var result = await bitindex.insight.block('00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2');
/*
{
    success: true,
    data: {
        hash: '000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52',
        confirmations: 10,
        size: 1397,
        height: 575870,
        version: 549453824,
        versionHex: '20c00000',
        merkleroot: '5eff2b149295b0010548910fc158664ee36f26781fbaceb42e71d924fac725c4',
        tx:
        [ '16d005b2b9b0c63a791da6e9d41566962fa403619d3cacce9d9a2c33cd10573c',
          'a836d07957fa6f9f12cd2a4ef07c914204d2d8109b4eda2faed9235125c58000',
          'e94dd09fa211490138a3141b3f1754cb2fc080e6bac52055bff8b909beb36d66',
          'c45d885ed16f0f9a47023ef45d9b8c70a100ccf535982343206f0d932032c559',
          'd9e67c9879e568d454ff491638f149cabe9c9853af48ccfb314585fc6cf190dd',
          '99e536eb11700d5d04eafd55dbad9c43f6a93ac11aacd4f0564487664585c0ed',
          'f13094f1007c276fc536163af79e97ecaf55e88b56d8d393e860ee84e546bbd6' ],
        time: 1553919636,
        mediantime: 1553915823,
        nonce: 1390191648,
        bits: '180beac2',
        difficulty: 92262545584.60136,
        chainwork: '000000000000000000000000000000000000000000de4ca83d16db8a005b4264',
        previousblockhash: '000000000000000008db5e402d1045c27de3d11a77c2ac7c420838c1b67df725',
        nextblockhash:'0000000000000000046c026c285ed7bc7ba7998f90938eb160c0f69b21dbdf2b'
    }
}
*/
```

### Block Index: /block-index/<height>
Get block hash by height.

**HTTP Request**

Request format:
`GET https://api.bitindex.network/api/block-index/574245`

Response format:
```
{
    "blockHash": "00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2"
}
```

**BitIndex SDK**


```javascript
const result = await index.instance(options).insight.blockindex(575870);
{
    success: true,
    data:  {
        blockHash: "000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52"
    }
}
```

### Transaction (JSON): /api/tx/<txid>

**HTTP Requeast**

Request format:
`GET https://api.bitindex.network/api/tx/83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76`

Response format:

```javascript
// Example of normal transaction:
{
    "hex": "01000000013236b323b28021186c6496f15389856970037647564cd39762d3bf08c5e63da9010000008b483045022100b0bd793326e22435a4135f3f3c775661d78da7f6752ec30e6e5fe13adf795f9202207bd820c0f6ffa40a6fcb8c981e1c2da6f3a579a02f8d1e1a4495af0b3c023dd74141043cf0a503fd150ad112de4503f7dd17dcdba99e41cd7f8b52315fa1a4f9e499b9493fddcc15a594022f9734b8cf12a068d51328664192f351c3b618e52ae1f85fffffffff020000000000000000fd03016a2231394878696756345179427633744870515663554551797131707a5a56646f4175741d7b20226d657373616765223a202248656c6c6f20776f726c642122207d106170706c69636174696f6e2f6a736f6e057574662d380100017c22313550636948473232534e4c514a584d6f53556157566937575371633768436676610d424954434f494e5f45434453412231455868536247466945415a4345356565427655785436634256486872705057587a411cbbb175c287f1c325f9687206ae93d88514c217678d83a5e8ef85f814e8a7e9964c4440ca35e7edd0e0ab82b463dd6171e7e3b759a79d99e35fa0fe34629170d9010601060100010101020103010401051f3a0900000000001976a9149467df677dc153a88243465d09ca5fe8f7ba8cf988ac00000000",
    "txid": "a77840a25b1b092dfb21c2018c2d78990f1e599f9992b33b388515df4a2d3996",
    "hash": "a77840a25b1b092dfb21c2018c2d78990f1e599f9992b33b388515df4a2d3996",
    "size": 494,
    "version": 1,
    "locktime": 0,
    "vin": [
        {
            "txid": "a93de6c508bfd36297d34c564776037069858953f196646c182180b223b33632",
            "vout": 1,
            "scriptSig": {
                "asm": "3045022100b0bd793326e22435a4135f3f3c775661d78da7f6752ec30e6e5fe13adf795f9202207bd820c0f6ffa40a6fcb8c981e1c2da6f3a579a02f8d1e1a4495af0b3c023dd7[ALL|FORKID] 043cf0a503fd150ad112de4503f7dd17dcdba99e41cd7f8b52315fa1a4f9e499b9493fddcc15a594022f9734b8cf12a068d51328664192f351c3b618e52ae1f85f",
                "hex": "483045022100b0bd793326e22435a4135f3f3c775661d78da7f6752ec30e6e5fe13adf795f9202207bd820c0f6ffa40a6fcb8c981e1c2da6f3a579a02f8d1e1a4495af0b3c023dd74141043cf0a503fd150ad112de4503f7dd17dcdba99e41cd7f8b52315fa1a4f9e499b9493fddcc15a594022f9734b8cf12a068d51328664192f351c3b618e52ae1f85f"
            },
            "sequence": 4294967295
        }
    ],
    "vout": [
        {
            "value": 0,
            "n": 0,
            "scriptPubKey": {
                "asm": "OP_RETURN 31394878696756345179427633744870515663554551797131707a5a56646f417574 7b20226d657373616765223a202248656c6c6f20776f726c642122207d 6170706c69636174696f6e2f6a736f6e 7574662d38 0 124 313550636948473232534e4c514a584d6f5355615756693757537163376843667661 424954434f494e5f4543445341 31455868536247466945415a4345356565427655785436634256486872705057587a 1cbbb175c287f1c325f9687206ae93d88514c217678d83a5e8ef85f814e8a7e9964c4440ca35e7edd0e0ab82b463dd6171e7e3b759a79d99e35fa0fe34629170d9 6 6 0 1 2 3 4 5",
                "hex": "6a2231394878696756345179427633744870515663554551797131707a5a56646f4175741d7b20226d657373616765223a202248656c6c6f20776f726c642122207d106170706c69636174696f6e2f6a736f6e057574662d380100017c22313550636948473232534e4c514a584d6f53556157566937575371633768436676610d424954434f494e5f45434453412231455868536247466945415a4345356565427655785436634256486872705057587a411cbbb175c287f1c325f9687206ae93d88514c217678d83a5e8ef85f814e8a7e9964c4440ca35e7edd0e0ab82b463dd6171e7e3b759a79d99e35fa0fe34629170d901060106010001010102010301040105",
                "type": "nulldata"
            }
        },
        {
            "value": 0.00604703,
            "n": 1,
            "scriptPubKey": {
                "asm": "OP_DUP OP_HASH160 9467df677dc153a88243465d09ca5fe8f7ba8cf9 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a9149467df677dc153a88243465d09ca5fe8f7ba8cf988ac",
                "reqSigs": 1,
                "type": "pubkeyhash",
                "addresses": [
                    "1EXhSbGFiEAZCE5eeBvUxT6cBVHhrpPWXz"
                ]
            }
        }
    ],
    "blockhash": "0000000000000000078652164f0c8a6e89725cd2cc2e185a78127063fec4ed4b",
    "confirmations": 160,
    "time": 1552960057,
    "blocktime": 1552960057
}

// Example of Coinbase transaction:
{
    "blockhash": "00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2",
    "blocktime": 1552937505,
    "confirmations": 194,
    "hash": "83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76",
    "hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff1c0325c308753978435a5f31325138344aedeebd79504fec53c6610000ffffffff01387e814a000000001976a9140f57956c54545eced0a8aa739a5adc6e34ab2db288ac00000000",
    "locktime": 0,
    "size": 113,
    "time": 1552937505,
    "txid": "83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76",
    "version": 1,
    "vin": [
        {
            "coinbase": "0325c308753978435a5f31325138344aedeebd79504fec53c6610000",
            "sequence": 4294967295
        }
    ],
    "vout": [
        {
            "n": 0,
            "scriptPubKey": {
                "addresses": [
                    "12Q84JKE1TvM2p8pw57G8joNZD1r3u9xCZ"
                ],
                "asm": "OP_DUP OP_HASH160 0f57956c54545eced0a8aa739a5adc6e34ab2db2 OP_EQUALVERIFY OP_CHECKSIG",
                "hex": "76a9140f57956c54545eced0a8aa739a5adc6e34ab2db288ac",
                "reqSigs": 1,
                "type": "pubkeyhash"
            },
            "value": 12.5000044
        }
    ]
}

```

**BitIndex SDK**

```javascript
 var result = await bitindex.insight.tx('83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76');

 /*
    {
        success: true,
        data: {
            // JSON transaction data for normal or coinbase transaction
        }
    }

 */

```

### Transaction (Raw)
**HTTP Request**

Request Format:

`GET https://api.bitindex.network/api/rawtx/83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76`

Response Format:
```javascript
{
    success: true,
    "rawtx": "01000000018bae5e8...."
}
```

**BitIndex SDK**

```javascript
 var result = await bitindex.insight.rawtx('369d78ee889e8ffd538c89a514539bff2211a254a89ed9643ed07e0fd3909026');
/*
{
    success: true,
    "rawtx": "01000000018bae5e8...."
}
*/
```


### Address  (Coming Soon!)

Request format:
```
  /api/addr/[:addr][?noTxList=1][&from=&to=]
  /api/addr/mmvP3mTe53qxHdPqXEvdu8WdC7GfQ2vmx5?noTxList=1
  /api/addr/mmvP3mTe53qxHdPqXEvdu8WdC7GfQ2vmx5?from=1000&to=2000
```
Response format:
```
{
    "addrStr": "1EXhSbGFiEAZCE5eeBvUxT6cBVHhrpPWXz",
    "balance": 0.00604703,
    "balanceSat": 604703,
    "totalReceived": 2.26103922,
    "totalReceivedSat": 226103922,
    "totalSent": 2.25499219,
    "totalSentSat": 225499219,
    "unconfirmedBalance": 0,
    "unconfirmedBalanceSat": 0,
    "unconfirmedTxApperances": 0,
    "txApperances": 432,
    "transactions": [
        "a77840a25b1b092dfb21c2018c2d78990f1e599f9992b33b388515df4a2d3996",
        "a93de6c508bfd36297d34c564776037069858953f196646c182180b223b33632",
        "..."
    ]
}
```

### Address Properties  (Coming Soon!)
```
  /api/addr/[:addr]/balance
  /api/addr/[:addr]/totalReceived
  /api/addr/[:addr]/totalSent
  /api/addr/[:addr]/unconfirmedBalance
```
The response contains the value in Satoshis.

### Unspent Outputs: /api/addr/:addr/utxo

**HTTP Request**

Request Format:
`GET /api/addr/12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX/utxo`

Response Format:
```
[
    {
        "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
        "txid": "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
        "vout": 0,
        "amount": 0.00015399,
        "satoshis": 15399,
        "value": 15399,
        "height": 576168,
        "confirmations": 2,
        "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
    },
    {
        "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
        "txid": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
        "vout": 1,
        "amount": 0.00014656,
        "satoshis": 14656,
        "value": 14656,
        "height": 576025,
        "confirmations": 145,
        "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
    }
]
```

**BitIndex SDK**

```javascript

 var result = await bitindex.insight.addrUtxo('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');
/*
{
    success: true,
    data:[
        {
            "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
            "txid": "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
            "vout": 0,
            "amount": 0.00015399,
            "satoshis": 15399,
            "value": 15399,
            "height": 576168,
            "confirmations": 2,
            "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
        },
        {
            "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
            "txid": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
            "vout": 1,
            "amount": 0.00014656,
            "satoshis": 14656,
            "value": 14656,
            "height": 576025,
            "confirmations": 145,
            "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
        }
    ]
}
*/

```

### Unspent Outputs for Multiple Addresses: GET /api/addrs/:addr1,addr2,.../utxo

**HTTP Request**

Request Format:
`GET /api/addr/12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX,1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD/utxo`

Response Format:
```
[
    {
        "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
        "amount": 0.00015411,
        "height": 1,
        "satoshis": 15411,
        "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
        "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
        "value": 15411,
        "vout": 0,
    },
    {
        "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
        "txid": "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
        "vout": 0,
        "amount": 0.00015399,
        "satoshis": 15399,
        "value": 15399,
        "height": 576168,
        "confirmations": 2,
        "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
    },
    {
        "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
        "txid": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
        "vout": 1,
        "amount": 0.00014656,
        "satoshis": 14656,
        "value": 14656,
        "height": 576025,
        "confirmations": 145,
        "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
    }
]
```

**BitIndex SDK**

```javascript

 var result = await bitindex.insight.addrUtxo(['12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);
/*
{
    success: true,
    data:[
        {
            "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
            "amount": 0.00015411,
            "height": 1,
            "satoshis": 15411,
            "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
            "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
            "value": 15411,
            "vout": 0,
        },
        {
            "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
            "txid": "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
            "vout": 0,
            "amount": 0.00015399,
            "satoshis": 15399,
            "value": 15399,
            "height": 576168,
            "confirmations": 2,
            "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
        },
        {
            "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
            "txid": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
            "vout": 1,
            "amount": 0.00014656,
            "satoshis": 14656,
            "value": 14656,
            "height": 576025,
            "confirmations": 145,
            "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
        }
    ]
}
*/

```

### Unspent Outputs for Multiple Addresses: POST /api/addrs/utxo

Bulk operation for many addresses

**HTTP Request**

Request Format:
`POST /api/addrs/utxo`
Post body:
```
{
    addrs: "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX,1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD"
}
```

Response Format:
```
[
    {
        "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
        "amount": 0.00015411,
        "height": 1,
        "satoshis": 15411,
        "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
        "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
        "value": 15411,
        "vout": 0,
    },
    {
        "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
        "txid": "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
        "vout": 0,
        "amount": 0.00015399,
        "satoshis": 15399,
        "value": 15399,
        "height": 576168,
        "confirmations": 2,
        "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
    },
    {
        "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
        "txid": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
        "vout": 1,
        "amount": 0.00014656,
        "satoshis": 14656,
        "value": 14656,
        "height": 576025,
        "confirmations": 145,
        "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
    }
]
```

**BitIndex SDK**

```javascript

 var result = await bitindex.insight.addrsUtxo(['12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);
/*
{
    success: true,
    data:[
        {
            "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
            "amount": 0.00015411,
            "height": 1,
            "satoshis": 15411,
            "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
            "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
            "value": 15411,
            "vout": 0,
        },
        {
            "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
            "txid": "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
            "vout": 0,
            "amount": 0.00015399,
            "satoshis": 15399,
            "value": 15399,
            "height": 576168,
            "confirmations": 2,
            "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
        },
        {
            "address": "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
            "txid": "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
            "vout": 1,
            "amount": 0.00014656,
            "satoshis": 14656,
            "value": 14656,
            "height": 576025,
            "confirmations": 145,
            "scriptPubKey": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac"
        }
    ]
}
*/

```

### Transactions by Block  (Coming Soon!)
```
  /api/txs/?block=HASH
  /api/txs/?block=00000000fa6cf7367e50ad14eb0ca4737131f256fc4c5841fd3c3f140140e6b6
```
### Transactions by Address  (Coming Soon!)
```
  /api/txs/?address=ADDR
  /api/txs/?address=mmhmMNfBiZZ37g1tgg2t8DDbNoEdqKVxAL
```

### Transactions for Multiple Addresses  (Coming Soon!)
GET method:
```
  /api/addrs/[:addrs]/txs[?from=&to=]
  /api/addrs/2NF2baYuJAkCKo5onjUKEPdARQkZ6SYyKd5,2NAre8sX2povnjy4aeiHKeEh97Qhn97tB1f/txs?from=0&to=20
```

POST method:
```
  /api/addrs/txs
```

POST params:
```
addrs: 2NF2baYuJAkCKo5onjUKEPdARQkZ6SYyKd5,2NAre8sX2povnjy4aeiHKeEh97Qhn97tB1f
from (optional): 0
to (optional): 20
noAsm (optional): 1 (will omit script asm from results)
noScriptSig (optional): 1 (will omit the scriptSig from all inputs)
noSpent (option): 1 (will omit spent information per output)
```

Sample output:
```
{ totalItems: 100,
  from: 0,
  to: 20,
  items:
    [ { txid: '3e81723d069b12983b2ef694c9782d32fca26cc978de744acbc32c3d3496e915',
       version: 1,
       locktime: 0,
       vin: [Object],
       vout: [Object],
       blockhash: '00000000011a135e5277f5493c52c66829792392632b8b65429cf07ad3c47a6c',
       confirmations: 109367,
       time: 1393659685,
       blocktime: 1393659685,
       valueOut: 0.3453,
       size: 225,
       firstSeenTs: undefined,
       valueIn: 0.3454,
       fees: 0.0001 },
      { ... },
      { ... },
      ...
      { ... }
    ]
 }
```

Note: if pagination params are not specified, the result is an array of transactions.

### Transaction Broadcasting
POST method:
```
  /api/tx/send
```
POST params:
```
  rawtx: "signed transaction as hex string"
  eg
  rawtx: 01000000017b1eabe0209b1fe794124575ef807057c77ada2138ae4fa8d6c4de0398a14f3f00000000494830450221008949f0cb400094ad2b5eb399d59d01c14d73d8fe6e96df1a7150deb388ab8935022079656090d7f6bac4c9a94e0aad311a4268e082a725f8aeae0573fb12ff866a5f01ffffffff01f0ca052a010000001976a914cbc20a7664f2f69e5355aa427045bc15e7c6c77288ac00000000

```
POST response:
```
  {
      txid: [:txid]
  }
  eg
  {
      txid: "c7736a0a0046d5a8cc61c8c3c2821d4d7517f5de2bc66a966011aaa79965ffba"
  }
```

### Status of the Bitcoin Network
```
  /api/status?q=xxx
```

Where "xxx" can be:

 * getInfo
 * getDifficulty
 * getBestBlockHash
 * getLastBlockHash



### Block Summaries (Coming in Future)

Get block summaries by date:
```
  /api/blocks?limit=3&blockDate=2016-04-22
```

Example response:
```
{
  "blocks": [
    {
      "height": 408495,
      "size": 989237,
      "hash": "00000000000000000108a1f4d4db839702d72f16561b1154600a26c453ecb378",
      "time": 1461360083,
      "txlength": 1695,
      "poolInfo": {
        "poolName": "BTCC Pool",
        "url": "https://pool.btcc.com/"
      }
    }
  ],
  "length": 1,
  "pagination": {
    "next": "2016-04-23",
    "prev": "2016-04-21",
    "currentTs": 1461369599,
    "current": "2016-04-22",
    "isToday": true,
    "more": true,
    "moreTs": 1461369600
  }
}
```

## Webhooks - Add address to monitor: PUT /api/v2/webhooks/main/addrs

Add addresseses to be monitored for webhooks.

**HTTP Request**
Request Format:
`PUT /api/v2/webhooks/main/addrs`
Post body:
```
[
    {
        addr: "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
    },
    {
        addr: "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
        tags: "tag1,tag2"
    },
    {
        addr: "xpub1234..."
    }
]
```

Response Format:
```javascript
{
    success: true,
    message: 'Error message on failure'
}

```

**BitIndex API**


todo...



## Webhooks - Remove address from monitoring: DELETE /api/v2/webhooks/main/addrs

Delete addresseses from being monitored for webhooks.

**HTTP Request**
Request Format:
`DELETE /api/v2/webhooks/main/addrs`
Post body:
```
[
    "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
    "xpub1234..."
]
```

Response Format:
```javascript
{
    success: true,
    message: 'Error message on failure'
}

```

**BitIndex SDK**
### Webhooks API

##### PUT /api/v2/webhook_endpoints?api_key=YOUR_API_KEY
Enable webhooks and specify the URL to receive callbacks at

Request body (`application/json`)
```
{
    "url": "http://yourappdomain.com/path/callback",
    "secret": "secret123key",
    "enabled": true
}
```

##### GET /api/v2/webhook_endpoints?api_key=YOUR_API_KEY
Get webhook settings.

Response body (`application/json`)
```
{
    data: {
        "id": "9561c720-10bc-11e9-bb8c-9932d7d4e1a6",
        "url": "http://yourappdomain.com/path/callback",
        "secret": "secret123key",
        "enabled": true
    }
}
```
localhost:3000/api/v2/monitored?api_key=key1
##### PUT /api/v2/monitored?api_key=YOUR_API_KEY
Add addresses and xpubs for monitoring to receive webhooks when payments are made.

Request body (`application/json`)
```
[
  {
    "addr": "xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ"
  },
  {
    "addr": "1M6N389jhRi5DQgoQcNir2e2REpYeAYavD"
  }
]
```

##### GET /api/v2/monitored?api_key=YOUR_API_KEY
Get all addresses and xpubs monitored.

Response body (`application/json`)
```
{
    "data": [
        {
            "addr": "xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ"
        },
        {
            "addr": "1M6N389jhRi5DQgoQcNir2e2REpYeAYavD"
        }
    ]
]
```


##### POST /webhook/callback (to your server)
Callbacks for addresses are received at your configured URL.

Note: You can receive up to multiple callbacks in any order. Make sure to check the 'confirmations' parameter and always use the highest 'confirmations' your application has seen before.

It is possible that old webhooks are in transit with a lower 'confirmations' than what you have received before.

Note: You should be able to rely on payments of 3 confirmations. Always check with the > and < operators since it cannot be guaranteed that you will receive a webhook with exactly _3 confirmations_ (it could be 4, 5 or more).

Request body (`application/json`)
```
{
    txid: 'e9865ab744ef236f0f436455a439263a53d9708f5eca66625dccb85cf1ff5947',
    address: '1M6N389jhRi5DQgoQcNir2e2REpYeAYavD',
    xpub: 'xpub6CYu...',    // Xpub will be present if address is associated with an xpub
    path: '1/0',            // Path is set if xpub is present
    satoshis: 1273,
    confirmations: 3,
    vout: 0,
    secret: "secret123key", // Set this secret key above and then compare in your code
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


