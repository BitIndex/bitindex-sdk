'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
   // api_url: 'http://localhost:3000',
   api_url: 'https://api.bitindex.network',
   api_key: '3CXxsbZq1q2qsSrFdsdwvz7vn91iCWTiVwFGtn9G9zYQDR7cx7p9brWB8Wn8eVy9wm' // Get your api key at www.bitindex.network
};

describe('#generatePaymentTx POST /payments/addrs/tx/generate test', () => {

    it('should generating a payment txs from addrs', async () => {
        var result = await index.instance(options).address.generatePaymentTx(
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
        );
    });

    it('should generating a payment txs from xpub', async () => {
      var result = await index.instance(options).xpub.generatePaymentTx(
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
                "hash": "ee65cc2e6222a414e8ed188dfb614207a0e29c280cebafe6a3ff8fa0a6e88033",
                "version": 1,
                "inputs": [
                    {
                        "prevTxId": "7d66f5265c41858dbf64f1b6d8e297174340a0d64c2a35af33d31f42ba6e0272",
                        "outputIndex": 0,
                        "sequenceNumber": 4294967295,
                        "script": "",
                        "scriptString": "",
                        "output": {
                            "satoshis": 12062,
                            "script": "76a914f39a08c81d96f50942e35f921601aafcb6d05e7b88ac"
                        },
                        "path": "0/1",
                        "address": "1PD3j791JCCJTMwi8NtzsNUgfy39sftfqx"
                    },
                    {
                        "prevTxId": "9c6c9a91f45edc8b9126736648087bdb7cf9ac1c85234787a55178b8dc4344a9",
                        "outputIndex": 0,
                        "sequenceNumber": 4294967295,
                        "script": "",
                        "scriptString": "",
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
                        "satoshis": 1173,
                        "script": "76a9148014a040e7fc4d1a86404197b1ea9389eb2bf8ed88ac"
                    }
                ],
                "nLockTime": 0
            },
            "fee": 260
        }
      );
  });
});
