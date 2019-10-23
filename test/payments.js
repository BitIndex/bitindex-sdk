'use strict';
var expect = require('chai').expect;
var bsv = require('bsv');
var index = require('../dist/index.js');

const options = {
   // api_url: 'http://localhost:3000',
   //network: 'test',
   api_url: 'https://api.bitindex.network',
   api_key: '3CXxsbZq1q2qsSrFdsdwvz7vn91iCWTiVwFGtn9G9zYQDR7cx7p9brWB8Wn8eVy9wm' // Get your api key at www.bitindex.network
};

/*
describe('#generatePaymentTxFromAddrs POST /payments/addrs/tx/generate test', () => {
    it('should generating a payment txs from addrs', async () => {
        var result = await index.instance(options).payments.generatePaymentTxFromAddrs(
            {
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
        expect(result).to.eql(
            {
               "tx": {
                  "hash": "a276cfd18bcfeb2fa656d1b653dfb8aa5befa1f6cd8152a0ccdf2e203260d9f7",
                  "version": 1,
                  "inputs": [
                     {
                           "prevTxId": "671ad3e22b4bf13247fc74d43ad2179935d14d5cae486a36a77ee8f042f8fee0",
                           "txid": "671ad3e22b4bf13247fc74d43ad2179935d14d5cae486a36a77ee8f042f8fee0",
                           "outputIndex": 3,
                           "sequenceNumber": 4294967295,
                           "script": "76a9144f950ca34751b3d45a021475759a719654b0e6f788ac",
                           "scriptString": "OP_DUP OP_HASH160 20 0x4f950ca34751b3d45a021475759a719654b0e6f7 OP_EQUALVERIFY OP_CHECKSIG",
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
        );
    });

});

describe('#generatePaymentTxFromXpub POST /payments/addrs/xpub/generate test', () => {
    it('should generating a payment txs from xpub', async () => {
        var result = await index.instance(options).payments.generatePaymentTxFromXpub(
            {
                "utxoInputSourceXpub": "xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ",
                "changeAddr": "1CgECg3kJdSWEkozDMaEZh1kuHWVwSnN9Z",
                "targets": [
                {
                "address": "1KeRD3q4aPoW4cqu3zTkfPrRmXFkoEXE51",
                "value": 12500
                }
                ]
            }
        );
        expect(result).to.eql(
            {
                "tx": {
                    "hash": "61d97db5234122c33adecf28935cf35fd2acd56f1cb7a03e77f8ea3136020e02",
                    "version": 1,
                    "inputs": [
                        {
                            "prevTxId": "7d66f5265c41858dbf64f1b6d8e297174340a0d64c2a35af33d31f42ba6e0272",
                            "txid": "7d66f5265c41858dbf64f1b6d8e297174340a0d64c2a35af33d31f42ba6e0272",
                            "outputIndex": 0,
                            "sequenceNumber": 4294967295,
                            "script": "76a914f39a08c81d96f50942e35f921601aafcb6d05e7b88ac",
                            "scriptString": "OP_DUP OP_HASH160 20 0xf39a08c81d96f50942e35f921601aafcb6d05e7b OP_EQUALVERIFY OP_CHECKSIG",
                            "output": {
                                "satoshis": 12062,
                                "script": "76a914f39a08c81d96f50942e35f921601aafcb6d05e7b88ac"
                            },
                            "path": "0/1",
                            "address": "1PD3j791JCCJTMwi8NtzsNUgfy39sftfqx"
                        },
                        {
                            "prevTxId": "9c6c9a91f45edc8b9126736648087bdb7cf9ac1c85234787a55178b8dc4344a9",
                            "txid": "9c6c9a91f45edc8b9126736648087bdb7cf9ac1c85234787a55178b8dc4344a9",
                            "outputIndex": 0,
                            "sequenceNumber": 4294967295,
                            "script": "76a914dd320fc943b5d115313ff62627f77eecdfb6183088ac",
                            "scriptString": "OP_DUP OP_HASH160 20 0xdd320fc943b5d115313ff62627f77eecdfb61830 OP_EQUALVERIFY OP_CHECKSIG",
                            "output": {
                                "satoshis": 1871,
                                "script": "76a914dd320fc943b5d115313ff62627f77eecdfb6183088ac"
                            },
                            "path": "1/31",
                            "address": "1MAaJjvGZAJAP4DcBTiCXcRMwj2Q7gZ2oU"
                        }
                    ],
                    "outputs": [
                        {
                            "satoshis": 12500,
                            "script": "76a914cc85dcbf69eeb000f4074179df666d639289f67688ac"
                        },
                        {
                            "satoshis": 913,
                            "script": "76a9148014a040e7fc4d1a86404197b1ea9389eb2bf8ed88ac"
                        }
                    ],
                    "nLockTime": 0
                },
                "fee": 520
            }
        );
    });

});

describe('#generatePaymentTxFromAddrs POST /payments/addrs/addrs/generate and signing', () => {
    it('should generating a payment txs from xpub', async () => {
        var pKey  = bsv.PrivateKey.fromWIF('5KYnLxkPz3Kscbadf6yxTiH9Bib4ZAtfqJq4KybeqFsQU95eU8A');
        console.log('pKey', pKey, pKey.toAddress());
        var result = await index.instance(options).payments.generatePaymentTxFromAddrs(
            {
            "utxoInputSourceAddrs": "1Gcx1uofjg1sXDfgmwWicXYf1WJgfTU6rq",
            "changeAddr": "1Gcx1uofjg1sXDfgmwWicXYf1WJgfTU6rq",
            "targets": [
                {
                "address": "1Gcx1uofjg1sXDfgmwWicXYf1WJgfTU6rq",
                "value": 546
                }
            ]
            }
        );
        const loadedTx = new bsv.Transaction(result.tx);
        console.log('loadedTx', loadedTx);
        loadedTx.sign('5KYnLxkPz3Kscbadf6yxTiH9Bib4ZAtfqJq4KybeqFsQU95eU8A');
        console.log('signed loadedTx', loadedTx);
    });
});
*/
/*
describe('#generatePaymentTxFromAddrs POST /payments/addrs/generate and signing testnet', () => {
    it('should generating a payment txs from xpub', async () => {
        var pKey  = bsv.PrivateKey.fromWIF('');
        console.log('pKey', pKey, pKey.toAddress());
        var result = await index.instance(options).payments.generatePaymentTxFromAddrs(
            {
            "utxoInputSourceAddrs": "mnR5WTn8ZFd6JXddY3YwmZ6emSmKRfC4ot",
            "changeAddr": "mnR5WTn8ZFd6JXddY3YwmZ6emSmKRfC4ot",
            "targets": [
                {
                "address": "mnR5WTn8ZFd6JXddY3YwmZ6emSmKRfC4ot",
                "value": 546
                }
            ]
            }
        );
        const loadedTx = new bsv.Transaction(result.tx);
        console.log('loadedTx test', loadedTx, loadedTx.toJSON());
        loadedTx.sign('');
        console.log('signed loadedTx test', loadedTx);
    });
});

describe('#generatePaymentTxFromXpub POST /payments/xpub/generate test', () => {
    it('should generating a payment txs from xpub', async () => {
        var result = await index.instance(options).payments.generatePaymentTxFromXpub(
            {
                "utxoInputSourceXpub": "tpubD6NzVbkrYhZ4YMSnooK1zWxuAdfs2eVrAGjkmYyUJrQW45ztegDjMrinLmGaPumBDEN9XNen8BTbjrCNcZVhn578eWVQTfYpmTim3iU5p9g",
                "changeAddr": "mnR5WTn8ZFd6JXddY3YwmZ6emSmKRfC4ot",
                "targets": [
                {
                "address": "mnR5WTn8ZFd6JXddY3YwmZ6emSmKRfC4ot",
                "value": 546
                }
                ]
            }
        );
        console.log('result xpub', JSON.stringify(result));
        const loadedTx = new bsv.Transaction(result.tx);
        console.log('loadedTx test xpub', loadedTx, loadedTx.toJSON());
        loadedTx.sign('');
        console.log('signed loadedTx test xpub', loadedTx);
    });

});
*/