'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    // api_url: 'http://localhost:3000',
    api_url: 'https://api.bitindex.network',
    api_key: '...' // Get your api key at www.bitindex.network
};

describe('#getUtxos GET /xpub/:xpub/utxo test', () => {
   it('should fail with invalid xpub', async () => {
      var result = await index.instance(options).xpub.getUtxos('xpub');
      expect(result).to.eql({
         code: 422,
         message: 'Request failed with status code 422'
      });
   });

   it('should succeed with getting utxos', async () => {
      var result = await index.instance(options).xpub.getUtxos('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');
      delete result[0].confirmations;
      expect(result[0]).to.eql(
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
         // "confirmations": 1862
         },
      );
   });
});

describe('#getAddresses GET /xpub/:xpub/addrs test', () => {

   it('should fail with invalid xpub', async () => {
      var result = await index.instance(options).xpub.getAddresses('xpub');
      expect(result).to.eql({
         code: 422,
         message: 'Request failed with status code 422'
      });
   });

   it('should succeed with getting addrs', async () => {
      var result = await index.instance(options).xpub.getAddresses('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');
      expect(result[1]).to.eql(
         {
            "address": "1M6N389jhRi5DQgoQcNir2e2REpYeAYavD",
            "num": 0,
            "chain": 1,
            "path": '1/0'
         },
      );
      expect(result[0]).to.eql(
         {
            "address": "18Fw8CPkXT8FNDDDLXHnqkRkf8yHa8zKSj",
            "num": 0,
            "chain": 0,
            "path": '0/0'
         },
      );
   });
});


describe('#getStatus GET /xpub/:xpub/status test', () => {

   it('should fail with invalid xpub', async () => {
      var result = await index.instance(options).xpub.getStatus('xpub');
      expect(result).to.eql({
         code: 422,
         message: 'Request failed with status code 422'
      });
   });

   it('should succeed with getting addrs', async () => {
      var result = await index.instance(options).xpub.getStatus('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');
      expect(result).to.eql(
         {
            "confirmed": 41446,
            "unconfirmed": 0
         },
      );
   });
});


describe('#getTransactions GET /xpub/:xpub/txs test', () => {

   it('should fail with invalid xpub', async () => {
      var result = await index.instance(options).xpub.getTransactions('xpub');
      expect(result).to.eql({
         code: 422,
         message: 'Request failed with status code 422'
      });
   });

   it('should succeed with getting addrs', async () => {
      var result = await index.instance(options).xpub.getTransactions('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');
      expect(result[0]).to.eql(
         {
            "address": "1MAaJjvGZAJAP4DcBTiCXcRMwj2Q7gZ2oU",
            "chain": 1,
            "height": 579543,
            "num": 31,
            "path": "1/31",
            "txid": "9c6c9a91f45edc8b9126736648087bdb7cf9ac1c85234787a55178b8dc4344a9",
         }
      );
   });
});

describe('#getAddressNext GET /xpub/:xpub/addrs/next test', () => {

   it('should fail with invalid xpub', async () => {
      var result = await index.instance(options).xpub.getAddressNext('xpub');
      expect(result).to.eql({
         code: 422,
         message: 'Request failed with status code 422'
      });
   });

   it('should succeed getting next address', async () => {
      var result = await index.instance(options).xpub.getAddressNext('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');
      expect(result).to.eql(
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
      );
      result = await index.instance(options).xpub.getAddressNext('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ');
      expect(result).to.eql(
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
      );
   });
   it('should succeed getting next address and reserving', async () => {
      var result = await index.instance(options).xpub.getAddressNext('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ', 10);
      expect(result).to.eql(
         [ { address: '17TxnZQZpoYCztvs4R9zQi1vbHA4kyXin5',
            path: '0/3',
            chain: 0,
            num: 3 },
         { address: '18hhgJmT75GbCvCsdSwbY9ASk3j3nWn6WM',
            path: '1/2',
            chain: 1,
            num: 2 } ]
      );
      result = await index.instance(options).xpub.getAddressNext('xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ', 10);
      expect(result).to.eql(
         [
            {
               "address": "19gM1iVHmA5Bx4rvTS9LtrZVNc2qeciXAR",
               "chain": 0,
               "num": 5,
               "path": "0/5",
            },
            {
               "address": "17UNSPbm8aNCBKhhCFHy75myv1LrZYGtHk",
               "chain": 1,
               "num": 4,
               "path": "1/4",
            }
         ]
      );
   });
});

