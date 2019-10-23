'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
   // api_url: 'http://localhost:3000',
   api_url: 'https://api.bitindex.network',
};

describe('#tx.get GET /tx/:txid test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).tx.get('tx');
        expect(result).to.eql({
            code: 500,
            message: 'Request failed with status code 500'
        });
    });

    it('should succeed', async () => {
         var result = await index.instance(options).tx.get('96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6');
         delete result.confirmations;
         expect(result).to.eql(
            {
                "txid":"96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
                "hash":"96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
                "size":301,
                "version":1,
                "locktime":0,
                "vin":[
                   {
                      "value":0.00015058,
                      "valueSat":15058,
                      "txid":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                      "vout":1,
                      "n":0,
                      "scriptSig":{
                         "asm":"30440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb7[ALL|FORKID] 044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a",
                         "hex":"4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
                      },
                      "addr":"12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
                      "address":"12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
                      "sequence":4294967295
                   }
                ],
                "vout":[
                   {
                      "value":0,
                      "valueSat":0,
                      "n":0,
                      "scriptPubKey":{
                         "asm":"OP_RETURN 31394878696756345179427633744870515663554551797131707a5a56646f417574 1717859169 746578742f6d61726b646f776e 5554462d38 616e6f74686572",
                         "hex":"6a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f74686572",
                         "type":"nulldata"
                      },
                      "spentTxId":null,
                      "spentIndex":null,
                      "spentHeight":null
                   },
                   {
                      "value":0.00014656,
                      "valueSat":14656,
                      "n":1,
                      "scriptPubKey":{
                         "asm":"OP_DUP OP_HASH160 10bdcba3041b5e5517a58f2e405293c14a7c70c1 OP_EQUALVERIFY OP_CHECKSIG",
                         "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                         "reqSigs":1,
                         "type":"pubkeyhash",
                         "addresses":[
                            "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                         ]
                      },
                      "spentTxId":null,
                      "spentIndex":null,
                      "spentHeight":null
                   }
                ],
                "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                "time":1554007897,
                "blocktime":1554007897,
                "valueIn":0.00015058,
                "fees":0.00000402,
                "valueOut":0.00014656,
                "rawtx":"0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000"
             }
        );
    });
});

describe('#tx.getRaw GET /rawtx/:txid test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).tx.getRaw('tx');
        expect(result).to.eql({
            code: 500,
            message: 'Request failed with status code 500'
        });
    });
    it('should succeed', async () => {
        var result = await index.instance(options).tx.getRaw('96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6');
        expect(result).to.eql(
         {
            rawtx: "0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000"
         }
        );
    });
});

describe('#tx.send POST /tx/send test', () => {
   it('should fail with invalid address', async () => {
       var result = await index.instance(options).tx.send('0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000');
       expect(result).to.eql({
           "message": "transaction already in block chain",
           "name": "Error",
           "errors": []
       });
   });
});