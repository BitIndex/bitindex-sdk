'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
   //api_url: 'http://localhost:3000',
   api_url: 'https://api.bitindex.network',
};

describe('#getAddressTransactions POST /addrs/txs test', () => {

    it('should succeed with default status', async () => {
        var result = await index.instance(options).address.getTransactions(
            '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX'
        );

        for (let i = 0; i< result.items.length; i++) {
            delete result.items[i].confirmations;
        }

        expect(result).to.eql(
         {
            "totalItems":4,
            "from":0,
            "to":50,
            "items":[
               {
                  "txid":"5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
                  "hash":"5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
                  "size":225,
                  "version":1,
                  "locktime":0,
                  "vin":[
                     {
                        "value":0.00983375,
                        "valueSat":983375,
                        "txid":"2962f47710fd12c22c7b90080070547fe5fe009bb2abe18e37c83ca6478aa7c8",
                        "vout":1,
                        "n":0,
                        "scriptSig":{
                           "hex":"47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265"
                        },
                        "addr":"1DxBoWtkqZE9X2FtiwTv7YTDvX4hrYXLCZ",
                        "address":"1DxBoWtkqZE9X2FtiwTv7YTDvX4hrYXLCZ",
                        "sequence":4294967295
                     }
                  ],
                  "vout":[
                     {
                        "value":0.00015399,
                        "valueSat":15399,
                        "n":0,
                        "scriptPubKey":{
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
                     },
                     {
                        "value":0.00967747,
                        "valueSat":967747,
                        "n":1,
                        "scriptPubKey":{
                           "hex":"76a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac",
                           "reqSigs":1,
                           "type":"pubkeyhash",
                           "addresses":[
                              "14QrFf7TR7uiDpwBwrYhHaUEd83jNj23pL"
                           ]
                        },
                        "spentTxId":"b61c53c20bce7234b722ead330536072ba70e72e96cd08e4eab7e0a4ea79a2ab",
                        "spentIndex":10,
                        "spentHeight":576593
                     }
                  ],
                  "blockhash":"000000000000000007fe2a3df2202a884a204b21ee00b5c18088c9cb65cdecf0",
                  "time":1554085571,
                  "blocktime":1554085571,
                  "valueIn":0.00983375,
                  "fees":0.00000229,
                  "valueOut":0.00983146,
                  "rawtx":"0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000",
                  "blockheight":576168
               },
               {
                  "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                  "hash":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                  "size":225,
                  "version":1,
                  "locktime":0,
                  "vin":[
                     {
                        "value":0.00924603,
                        "valueSat":924603,
                        "txid":"e8ef92e542cceaedef6ce338498240d7db80925ff009d77fac34e3ddc134c1a4",
                        "vout":1,
                        "n":0,
                        "scriptSig":{
                           "hex":"47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7"
                        },
                        "addr":"17d9np3mtaz13kYdePwc2Cufd6dMoNjWib",
                        "address":"17d9np3mtaz13kYdePwc2Cufd6dMoNjWib",
                        "sequence":4294967295
                     }
                  ],
                  "vout":[
                     {
                        "value":0.00015463,
                        "valueSat":15463,
                        "n":0,
                        "scriptPubKey":{
                           "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                           "reqSigs":1,
                           "type":"pubkeyhash",
                           "addresses":[
                              "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                           ]
                        },
                        "spentTxId":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                        "spentIndex":0,
                        "spentHeight":576025
                     },
                     {
                        "value":0.00908911,
                        "valueSat":908911,
                        "n":1,
                        "scriptPubKey":{
                           "hex":"76a9146656783b099d284e4a7871b5fc17848db11d4aef88ac",
                           "reqSigs":1,
                           "type":"pubkeyhash",
                           "addresses":[
                              "1AL7WaqTfGqU1LrKzcdsjzNJC4YrtVFrgb"
                           ]
                        },
                        "spentTxId":"1f057198d047a500c1808d263841d348240de15cfd24665575aa30c3b8f43c2e",
                        "spentIndex":0,
                        "spentHeight":576588
                     }
                  ],
                  "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                  "time":1554007897,
                  "blocktime":1554007897,
                  "valueIn":0.00924603,
                  "fees":0.00000229,
                  "valueOut":0.00924374,
                  "rawtx":"0100000001a4c134c1dde334ac7fd709f05f9280dbd740824938e36cefedeacc42e592efe8010000006a47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7ffffffff02673c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac6fde0d00000000001976a9146656783b099d284e4a7871b5fc17848db11d4aef88ac00000000",
                  "blockheight":576025
               },
               {
                  "txid":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                  "hash":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                  "size":304,
                  "version":1,
                  "locktime":0,
                  "vin":[
                     {
                        "value":0.00015463,
                        "valueSat":15463,
                        "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                        "vout":0,
                        "n":0,
                        "scriptSig":{
                           "hex":"483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
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
                           "hex":"6a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64",
                           "type":"nulldata"
                        },
                        "spentTxId":null,
                        "spentIndex":null,
                        "spentHeight":null
                     },
                     {
                        "value":0.00015058,
                        "valueSat":15058,
                        "n":1,
                        "scriptPubKey":{
                           "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                           "reqSigs":1,
                           "type":"pubkeyhash",
                           "addresses":[
                              "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                           ]
                        },
                        "spentTxId":"96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
                        "spentIndex":0,
                        "spentHeight":576025
                     }
                  ],
                  "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                  "time":1554007897,
                  "blocktime":1554007897,
                  "valueIn":0.00015463,
                  "fees":0.00000405,
                  "valueOut":0.00015058,
                  "rawtx":"0100000001454cd6dd0adc79351cd7f840f57dd4d0a774b4b8413eaf9047aafa7697f4f6bd000000008b483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000476a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64d23a0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                  "blockheight":576025
               },
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
                  "rawtx":"0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                  "blockheight":576025
               }
            ]
         }
        );

        var result = await index.instance(options).address.getTransactions(
            '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
            undefined,
            1,
            2,
            false,
            true,
            true
        );
        for (let i = 0; i< result.items.length; i++) {
            delete result.items[i].confirmations;
        }
        expect(result).to.eql(
         {
            "totalItems":4,
            "from":0,
            "to":50,
            "items":[
               {
                  "txid":"5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
                  "hash":"5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
                  "size":225,
                  "version":1,
                  "locktime":0,
                  "vin":[
                     {
                        "value":0.00983375,
                        "valueSat":983375,
                        "txid":"2962f47710fd12c22c7b90080070547fe5fe009bb2abe18e37c83ca6478aa7c8",
                        "vout":1,
                        "n":0,
                        "scriptSig":{
                           "asm":"304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2[ALL|FORKID] 03b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265",
                           "hex":"47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265"
                        },
                        "addr":"1DxBoWtkqZE9X2FtiwTv7YTDvX4hrYXLCZ",
                        "address":"1DxBoWtkqZE9X2FtiwTv7YTDvX4hrYXLCZ",
                        "sequence":4294967295
                     }
                  ],
                  "vout":[
                     {
                        "value":0.00015399,
                        "valueSat":15399,
                        "n":0,
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
                     },
                     {
                        "value":0.00967747,
                        "valueSat":967747,
                        "n":1,
                        "scriptPubKey":{
                           "asm":"OP_DUP OP_HASH160 256b0efdfc907d12125c4fbb1754b38e7c8b1a17 OP_EQUALVERIFY OP_CHECKSIG",
                           "hex":"76a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac",
                           "reqSigs":1,
                           "type":"pubkeyhash",
                           "addresses":[
                              "14QrFf7TR7uiDpwBwrYhHaUEd83jNj23pL"
                           ]
                        },
                        "spentTxId":"b61c53c20bce7234b722ead330536072ba70e72e96cd08e4eab7e0a4ea79a2ab",
                        "spentIndex":10,
                        "spentHeight":576593
                     }
                  ],
                  "blockhash":"000000000000000007fe2a3df2202a884a204b21ee00b5c18088c9cb65cdecf0",
                  // "confirmations":24731,
                  "time":1554085571,
                  "blocktime":1554085571,
                  "valueIn":0.00983375,
                  "fees":0.00000229,
                  "valueOut":0.00983146,
                  "rawtx":"0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000",
                  "blockheight":576168
               },
               {
                  "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                  "hash":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                  "size":225,
                  "version":1,
                  "locktime":0,
                  "vin":[
                     {
                        "value":0.00924603,
                        "valueSat":924603,
                        "txid":"e8ef92e542cceaedef6ce338498240d7db80925ff009d77fac34e3ddc134c1a4",
                        "vout":1,
                        "n":0,
                        "scriptSig":{
                           "asm":"304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce[ALL|FORKID] 03052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7",
                           "hex":"47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7"
                        },
                        "addr":"17d9np3mtaz13kYdePwc2Cufd6dMoNjWib",
                        "address":"17d9np3mtaz13kYdePwc2Cufd6dMoNjWib",
                        "sequence":4294967295
                     }
                  ],
                  "vout":[
                     {
                        "value":0.00015463,
                        "valueSat":15463,
                        "n":0,
                        "scriptPubKey":{
                           "asm":"OP_DUP OP_HASH160 10bdcba3041b5e5517a58f2e405293c14a7c70c1 OP_EQUALVERIFY OP_CHECKSIG",
                           "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                           "reqSigs":1,
                           "type":"pubkeyhash",
                           "addresses":[
                              "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                           ]
                        },
                        "spentTxId":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                        "spentIndex":0,
                        "spentHeight":576025
                     },
                     {
                        "value":0.00908911,
                        "valueSat":908911,
                        "n":1,
                        "scriptPubKey":{
                           "asm":"OP_DUP OP_HASH160 6656783b099d284e4a7871b5fc17848db11d4aef OP_EQUALVERIFY OP_CHECKSIG",
                           "hex":"76a9146656783b099d284e4a7871b5fc17848db11d4aef88ac",
                           "reqSigs":1,
                           "type":"pubkeyhash",
                           "addresses":[
                              "1AL7WaqTfGqU1LrKzcdsjzNJC4YrtVFrgb"
                           ]
                        },
                        "spentTxId":"1f057198d047a500c1808d263841d348240de15cfd24665575aa30c3b8f43c2e",
                        "spentIndex":0,
                        "spentHeight":576588
                     }
                  ],
                  "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                  // "confirmations":24874,
                  "time":1554007897,
                  "blocktime":1554007897,
                  "valueIn":0.00924603,
                  "fees":0.00000229,
                  "valueOut":0.00924374,
                  "rawtx":"0100000001a4c134c1dde334ac7fd709f05f9280dbd740824938e36cefedeacc42e592efe8010000006a47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7ffffffff02673c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac6fde0d00000000001976a9146656783b099d284e4a7871b5fc17848db11d4aef88ac00000000",
                  "blockheight":576025
               },
               {
                  "txid":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                  "hash":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                  "size":304,
                  "version":1,
                  "locktime":0,
                  "vin":[
                     {
                        "value":0.00015463,
                        "valueSat":15463,
                        "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                        "vout":0,
                        "n":0,
                        "scriptSig":{
                           "asm":"3045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee6868[ALL|FORKID] 044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a",
                           "hex":"483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
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
                           "asm":"OP_RETURN 31394878696756345179427633744870515663554551797131707a5a56646f417574 26984 746578742f6d61726b646f776e 5554462d38 48656c6c6f20776f726c64",
                           "hex":"6a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64",
                           "type":"nulldata"
                        },
                        "spentTxId":null,
                        "spentIndex":null,
                        "spentHeight":null
                     },
                     {
                        "value":0.00015058,
                        "valueSat":15058,
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
                        "spentTxId":"96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
                        "spentIndex":0,
                        "spentHeight":576025
                     }
                  ],
                  "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                  // "confirmations":24874,
                  "time":1554007897,
                  "blocktime":1554007897,
                  "valueIn":0.00015463,
                  "fees":0.00000405,
                  "valueOut":0.00015058,
                  "rawtx":"0100000001454cd6dd0adc79351cd7f840f57dd4d0a774b4b8413eaf9047aafa7697f4f6bd000000008b483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000476a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64d23a0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                  "blockheight":576025
               },
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
                  // "confirmations":24874,
                  "time":1554007897,
                  "blocktime":1554007897,
                  "valueIn":0.00015058,
                  "fees":0.00000402,
                  "valueOut":0.00014656,
                  "rawtx":"0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                  "blockheight":576025
               }
            ]
         }
        );
    });
});

describe('#getStatus GET /addr/:address test', () => {

    it('should fail with invalid address', async () => {
        var result = await index.instance(options).address.getStatus('address');
        expect(result).to.eql({
            code: 500,
            message: 'Request failed with status code 500'
        });
    });

    it('should succeed with getting status', async () => {
        var result = await index.instance(options).address.getStatus('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');
        expect(result).to.eql(
            {
               "addrStr":"12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
               "balance":0.00030055,
               "balanceSat":30055,
               "totalReceived":0.00060576,
               "totalReceivedSat":60576,
               "totalSent":0.00030521,
               "totalSentSat":30521,
               "unconfirmedBalance":0,
               "unconfirmedBalanceSat":0,
               "unconfirmedTxApperances":0,
               "txApperances":4,
               "transactions":[
                  "5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12",
                  "96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
                  "d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                  "bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45"
               ]
            }
        );
    });
});


describe('#getUtxos (single address) GET /addr/:address/utxo test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).address.getUtxos('address');
        expect(result).to.eql({
            code: 500,
            message: 'Request failed with status code 500'
        });
    });

    it('should succeed with getting utxos with options', async () => {
      var result = await index.instance(options).address.getUtxosWithOptions({
         addrs: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', afterHeight: 576167, sort: 'value:desc'
      });
      expect(result.length).to.eql(1);
      delete result[0].confirmations;


      expect(result).to.eql(
          [
              {
                  address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                  txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                  vout: 0,
                  outputIndex: 0,
                  amount: 0.00015399,
                  satoshis: 15399,
                  value: 15399,
                  height: 576168,
                  // confirmations: 1,
                  "script": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                  scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
              }
          ]
      );
      var result = await index.instance(options).address.getUtxosWithOptions({
         addrs: ['12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD'], afterHeight: 576167, sort: 'value:desc'
      });
      delete result[0].confirmations;
      delete result[1].confirmations;
      expect(result).to.eql(
          [
              {
                  "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
                  "amount": 0.00015411,
                  "height": 576171,
                  "satoshis": 15411,
                  "script": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                  "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                  "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
                  "value": 15411,
                  "vout": 0,
                  outputIndex: 0,
              },
              {
                  address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                  txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                  vout: 0,
                  outputIndex: 0,
                  amount: 0.00015399,
                  satoshis: 15399,
                  value: 15399,
                  height: 576168,
                  // confirmations: 1,
                  scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac',
                  script: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
              }
          ]
      );
   });

    it('should succeed with getting utxos', async () => {
        var result = await index.instance(options).address.getUtxos('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');
        expect(result.length).to.eql(2);
        delete result[0].confirmations;
        delete result[1].confirmations;

        expect(result).to.eql(
            [
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                    vout: 0,
                    outputIndex: 0,
                    amount: 0.00015399,
                    satoshis: 15399,
                    value: 15399,
                    height: 576168,
                    // confirmations: 1,
                    "script": "76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid:
                    '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
                    vout: 1,
                    outputIndex: 1,
                    amount: 0.00014656,
                    satoshis: 14656,
                    value: 14656,
                    height: 576025,
                    // confirmations: 144,
                    script: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac',
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                }
            ]
        );
        var result = await index.instance(options).address.getUtxos(['12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);
        delete result[0].confirmations;
        delete result[1].confirmations;
        delete result[2].confirmations;
        expect(result).to.eql(
            [
                {
                    "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
                    "amount": 0.00015411,
                    "height": 576171,
                    "satoshis": 15411,
                    "script": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                    "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                    "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
                    "value": 15411,
                    "vout": 0,
                    outputIndex: 0,
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                    vout: 0,
                    outputIndex: 0,
                    amount: 0.00015399,
                    satoshis: 15399,
                    value: 15399,
                    height: 576168,
                    // confirmations: 1,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac',
                    script: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid:
                    '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
                    vout: 1,
                    outputIndex: 1,
                    amount: 0.00014656,
                    satoshis: 14656,
                    value: 14656,
                    height: 576025,
                    // confirmations: 144,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac',
                    script: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                }
            ]
        );
    });
});

describe('#getUtxos (multiple addresses) POST /addrs/utxo test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).address.getUtxos(['asdfsf', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);
        expect(result).to.eql({
            code: 500,
            message: 'Request failed with status code 500'
        });
    });

    it('should succeed with getting utxos', async () => {
        var result = await index.instance(options).address.getUtxos(['12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);
        expect(result.length).to.eql(3);
        delete result[0].confirmations;
        delete result[1].confirmations;
        delete result[2].confirmations;

        expect(result).to.eql(
            [
                {
                    "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
                    "amount": 0.00015411,
                    "height": 576171,
                    "satoshis": 15411,
                    "script": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                    "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                    "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
                    "value": 15411,
                    "vout": 0,
                    outputIndex: 0,
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                    vout: 0,
                    outputIndex: 0,
                    amount: 0.00015399,
                    satoshis: 15399,
                    value: 15399,
                    height: 576168,
                    // confirmations: 1,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac',
                    script: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid:
                    '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
                    vout: 1,
                    outputIndex: 1,
                    amount: 0.00014656,
                    satoshis: 14656,
                    value: 14656,
                    height: 576025,
                    // confirmations: 144,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac',
                    script: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                }
            ]
        );
    });
});
