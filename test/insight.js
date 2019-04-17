'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    // insight_api: 'http://localhost:3000',
    insight_api: 'https://api.bitindex.network'
};

describe('insight GET /api/tx/:txid normal transaction test', () => {
    it('should fail no txid', async () => {
        var result = await index.instance().insight.tx();
        expect(result).to.eql({
            success: false,
            message: "txid required"
        });
    });
    it('should fail invalid txid', async () => {
        var result = await index.instance().insight.tx('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with txid', async () => {
        var result = await index.instance().insight.tx('369d78ee889e8ffd538c89a514539bff2211a254a89ed9643ed07e0fd3909026');
        delete result.confirmations;
        const expected = {
            hex: '01000000018bae5e868e5b794a05dfd42aa5a2c6b31e2a8c5ec2c8bfee8e403a1b8dd79c62010000008a4730440220739027f85e42d75b4f117b654bae6ad41d7f2634cfa86308066f5e7247fb626c02207536c9b8f274ff37bb6849bb7ad7ba48514ca72f1b51afa5cf651a30209d0fc34141043cf0a503fd150ad112de4503f7dd17dcdba99e41cd7f8b52315fa1a4f9e499b9493fddcc15a594022f9734b8cf12a068d51328664192f351c3b618e52ae1f85fffffffff020000000000000000416a2231394878696756345179427633744870515663554551797131707a5a56646f41757401620d746578742f6d61726b646f776e055554462d3801610474616731739a0a00000000001976a9149467df677dc153a88243465d09ca5fe8f7ba8cf988ac00000000',
            txid: '369d78ee889e8ffd538c89a514539bff2211a254a89ed9643ed07e0fd3909026',
            hash: '369d78ee889e8ffd538c89a514539bff2211a254a89ed9643ed07e0fd3909026',
            size: 297,
            version: 1,
            locktime: 0,
            vin:
            [
                {
                    txid: '629cd78d1b3a408eeebfc8c25e8c2a1eb3c6a2a52ad4df054a795b8e865eae8b',
                    vout: 1,
                    scriptSig:  {
                        "asm": "30440220739027f85e42d75b4f117b654bae6ad41d7f2634cfa86308066f5e7247fb626c02207536c9b8f274ff37bb6849bb7ad7ba48514ca72f1b51afa5cf651a30209d0fc3[ALL|FORKID] 043cf0a503fd150ad112de4503f7dd17dcdba99e41cd7f8b52315fa1a4f9e499b9493fddcc15a594022f9734b8cf12a068d51328664192f351c3b618e52ae1f85f",
                        "hex": "4730440220739027f85e42d75b4f117b654bae6ad41d7f2634cfa86308066f5e7247fb626c02207536c9b8f274ff37bb6849bb7ad7ba48514ca72f1b51afa5cf651a30209d0fc34141043cf0a503fd150ad112de4503f7dd17dcdba99e41cd7f8b52315fa1a4f9e499b9493fddcc15a594022f9734b8cf12a068d51328664192f351c3b618e52ae1f85f"
                    },
                    sequence: 4294967295
                }
            ],
            vout:
            [
                {
                    value: 0,
                    n: 0,
                    scriptPubKey: {
                        "asm": "OP_RETURN 31394878696756345179427633744870515663554551797131707a5a56646f417574 98 746578742f6d61726b646f776e 5554462d38 97 828858740",
                        "hex": "6a2231394878696756345179427633744870515663554551797131707a5a56646f41757401620d746578742f6d61726b646f776e055554462d3801610474616731",
                        "type": "nulldata"
                    }
                },
                {
                    value: 0.00694899,
                    n: 1,
                    scriptPubKey: {
                        "addresses": [
                            "1EXhSbGFiEAZCE5eeBvUxT6cBVHhrpPWXz"
                        ],
                        "asm": "OP_DUP OP_HASH160 9467df677dc153a88243465d09ca5fe8f7ba8cf9 OP_EQUALVERIFY OP_CHECKSIG",
                        "hex": "76a9149467df677dc153a88243465d09ca5fe8f7ba8cf988ac",
                        "reqSigs": 1,
                        "type": "pubkeyhash"
                    }
                }
            ],
           blockhash:'000000000000000007feb0754831cefced1dcc875ac00bbdb5719acc6cdf848c',
           time: 1551826279,
           blocktime: 1551826279
        };
        expect(result).to.eql(expected);
    });
})

describe('insight GET /api/tx/:txid coinbase transaction test', () => {
    it('should succeed with txid', async () => {
        var result = await index.instance().insight.tx('83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76');
        delete result.confirmations;
        const expected ={
            "hex":"01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff1c0325c308753978435a5f31325138344aedeebd79504fec53c6610000ffffffff01387e814a000000001976a9140f57956c54545eced0a8aa739a5adc6e34ab2db288ac00000000",
            "txid":"83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76",
            "hash":"83b1345f02f9fb331ec21e0060f7aebda3b700ec2a3b128be31bbc2deaad4d76",
            "size":113,
            "version":1,
            "locktime":0,
            "vin":[
                {
                    "coinbase":"0325c308753978435a5f31325138344aedeebd79504fec53c6610000",
                    "sequence":4294967295
                }
            ],
            "vout":[
                {
                    "value":12.5000044,
                    "n":0,
                    "scriptPubKey":{
                    "asm":"OP_DUP OP_HASH160 0f57956c54545eced0a8aa739a5adc6e34ab2db2 OP_EQUALVERIFY OP_CHECKSIG",
                    "hex":"76a9140f57956c54545eced0a8aa739a5adc6e34ab2db288ac",
                    "reqSigs":1,
                    "type":"pubkeyhash",
                    "addresses":[
                        "12Q84JKE1TvM2p8pw57G8joNZD1r3u9xCZ"
                    ]
                    }
                }
            ],
            "blockhash":"00000000000000000a076c169ae01a9854fdc418867299f39e536e92014652e2",
            // "confirmations":1913,
            "time":1552937505,
            "blocktime":1552937505
        }
        expect(result).to.eql(expected);
    });
})


describe('insight GET /api/rawtx/:txid test', () => {
    it('should fail no txid', async () => {
        var result = await index.instance().insight.rawtx();
        expect(result).to.eql({
            success: false,
            message: "txid required"
        });
    });
    it('should fail no txid', async () => {
        var result = await index.instance().insight.rawtx('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with txid', async () => {
        var result = await index.instance().insight.rawtx('369d78ee889e8ffd538c89a514539bff2211a254a89ed9643ed07e0fd3909026');
        expect(result).to.eql({
            "rawtx": "01000000018bae5e868e5b794a05dfd42aa5a2c6b31e2a8c5ec2c8bfee8e403a1b8dd79c62010000008a4730440220739027f85e42d75b4f117b654bae6ad41d7f2634cfa86308066f5e7247fb626c02207536c9b8f274ff37bb6849bb7ad7ba48514ca72f1b51afa5cf651a30209d0fc34141043cf0a503fd150ad112de4503f7dd17dcdba99e41cd7f8b52315fa1a4f9e499b9493fddcc15a594022f9734b8cf12a068d51328664192f351c3b618e52ae1f85fffffffff020000000000000000416a2231394878696756345179427633744870515663554551797131707a5a56646f41757401620d746578742f6d61726b646f776e055554462d3801610474616731739a0a00000000001976a9149467df677dc153a88243465d09ca5fe8f7ba8cf988ac00000000"
        });
    });
})

describe('insight GET /api/block/:blockhash test', () => {
    it('should fail no blockhash', async () => {
        var result = await index.instance().insight.block();
        expect(result).to.eql({
            success: false,
            message: "blockhash required"
        });
    });
    it('should fail no blockhash', async () => {
        var result = await index.instance().insight.block('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with blockhash', async () => {
        var result = await index.instance(options).insight.block('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');
        delete result.confirmations;
        expect(result).to.eql({
                hash:
                '000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52',
               // onfirmations: 10,
               size: 1397,
               height: 575870,
               version: 549453824,
               versionHex: '20c00000',
               merkleroot:
                '5eff2b149295b0010548910fc158664ee36f26781fbaceb42e71d924fac725c4',
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
               chainwork:
                '000000000000000000000000000000000000000000de4ca83d16db8a005b4264',
               previousblockhash:
                '000000000000000008db5e402d1045c27de3d11a77c2ac7c420838c1b67df725',
               nextblockhash:
                '0000000000000000046c026c285ed7bc7ba7998f90938eb160c0f69b21dbdf2b'
            }
        );
    });

});

describe('insight GET /api/rawblock/:blockhash test', () => {
    it('should fail no blockhash', async () => {
        var result = await index.instance().insight.rawblock();
        expect(result).to.eql({
            success: false,
            message: "blockhash required"
        });
    });
    it('should fail no blockhash', async () => {
        var result = await index.instance().insight.rawblock('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with blockhash', async () => {
        var result = await index.instance(options).insight.rawblock('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');
        expect(result).to.eql( {
            rawblock: "0000c02025f77db6c13808427cacc2771ad1e37dc245102d405edb080000000000000000c425c7fa24d9712eb4ceba1f78266fe34e6658c10f91480501b09592142bff5e94ee9e5cc2ea0b1820a4dc520701000000010000000000000000000000000000000000000000000000000000000000000000ffffffff53037ec908040fef9e5cfabe6d6df41491ca64d04613901a883289cefe0bb98ff57c057e9b05669464ee97d0eb1480000000000000000808061ca3f50a0100142f70726f68617368696e672e636f6d442702002f00000000011281814a000000001976a9147f346e50f5d8eaf4519794668089d9d473a20dbb88ac0000000002000000013dd3087289ab1dd9c2644fec7c73985906f06d44ebf196c06ab51165e9641323000000006b483045022100c8b098c97c6613f9abd391737e8dcc1af7ee59d00f6d49ba4f01c866b7d4eb2702204b946965292283c8c998c965f85bf24b67308870bf99bac047f9b464fd24e1ca412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01487db11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7bc9080002000000010080c5255123d9ae2fda4e9b10d8d20442917cf04e2acd129f6ffa5779d036a8000000006a47304402201f37c5068e2eda3ec4c491f51dbd447c22003a4614b9284a51cfe5f1df7d7c3d02201aa79d17d2b306538d5693538b8b1fd2ff354286b6606916241a483558e96b9c412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01857cb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001666db3be09b9f8bf5520c5bae680c02fcb54173f1b14a338014911a29fd04de9000000006a4730440220603a05534df953ce410250e150935d6eb9349f100bd07d013082bbe3ac79bc0802205219d2eec4b5ba5f270c0d870e0e741b3a14cb6046d5d7fdc0246e10c2d98e31412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01c27bb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800020000000159c53220930d6f2043239835f5cc00a1708c9b5df43e02479a0f6fd15e885dc4000000006a47304402202852448f44746ad9e6fac1bc2abb66bfa6faaa2d828f056f74f298cfdec3fba202201e4b1d4196c60e137c12bd7d6f5e519f9475634986d716e3bb5b8546b8dab91a412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01ff7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001dd90f16cfc854531fbcc48af53989cbeca49f1381649ff54d468e579987ce6d9000000006b483045022100b63ed1e8cbeee5a9f21abca10ac3582ab79f6fb5cde73f562b332a7cfd9268300220047c967acecb77326e069cf388a2898affec665043046c59a5e008ec2092274d412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff013c7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac2dc908000200000001edc0854566874456f0d4ac1ac13aa9f6439caddb55fdea045d0d7011eb36e599000000006a47304402201f1ed57604b6e4c50a1997cd9d78a78a1ca80cbeffc93dfd36a944b289eed611022028648db1adc259cd149091a9e9f7ca5e15142e162d60ed7c86c07d97e85819c6412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff017979b11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800"
        });
    });
})

describe('insight GET /api/block-index/:height test', () => {
    it('should fail no height', async () => {
        var result = await index.instance().insight.blockindex();
        expect(result).to.eql({
            success: false,
            message: "height required"
        });
    });
    it('should fail no height', async () => {
        var result = await index.instance().insight.blockindex('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with height', async () => {
        var result = await index.instance(options).insight.blockindex('575870');
        expect(result).to.eql({
            blockHash: "000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52"
        });

        var result = await index.instance(options).insight.blockindex(575870);
        expect(result).to.eql({
            blockHash: "000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52"
        });
    });
})

describe('insight GET /api/status?q=getBestBlockHash test', () => {
    it('should succeed with getBestBlockHash', async () => {
        var result = await index.instance(options).insight.status_getBestBlockHash();
        expect(/^[a-fA-F0-9]+$/.test(result.bestblockhash)).to.eql(true);
    });
});

describe('insight GET /api/status?q=getLastBlockHash test', () => {
    it('should succeed with getLastBlockHash', async () => {
        var result = await index.instance(options).insight.status_getLastBlockHash();
        expect(/^[a-fA-F0-9]+$/.test(result.lastblockhash)).to.eql(true);
        expect(/^[a-fA-F0-9]+$/.test(result.syncTipHash)).to.eql(true);
    });
});

describe('insight GET /api/status?q=getDifficulty test', () => {
    it('should succeed with getDifficulty', async () => {
        var result = await index.instance(options).insight.status_getDifficulty();
        expect(/^\d+\.\d*$/.test(result.difficulty + '')).to.eql(true);
    });
});

describe('insight GET /api/status test', () => {
    it('should succeed with default status', async () => {
        var result = await index.instance(options).insight.status();
        delete result.info.blocks;
        delete result.info.difficulty;
        delete result.info.connections;
        expect(result).to.eql({
            info:
                {
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
        );
    });
});

/*
// Uncommented below to broadcast a tx
describe('insight /api/tx/send test', () => {
    it('should succeed with tx send', async () => {
        const tx = '..enter hex here...';
        var result = await index.instance(options).insight.send(tx);
        expect(result.success).to.eql(true);
        expect(/^[a-fA-F0-9]+$/.test(result.data.txid)).to.eql(true);
    });
});
*/

describe('insight POST /api/addrs/txs test', () => {
    it('should succeed with default status', async () => {
        var result = await index.instance(options).insight.getAddressesTxs(
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
                      "size":225,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"2962f47710fd12c22c7b90080070547fe5fe009bb2abe18e37c83ca6478aa7c8",
                            "vout":1,
                            "scriptSig":{
                               "hex":"47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00983375,
                            "addr":"1DxBoWtkqZE9X2FtiwTv7YTDvX4hrYXLCZ",
                            "valueSat":983375
                         }
                      ],
                      "vout":[
                         {
                            "value":0.00015399,
                            "n":0,
                            "scriptPubKey":{
                               "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                               "reqSigs":1,
                               "type":"pubkeyhash",
                               "addresses":[
                                  "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                               ]
                            },
                            "valueSat":15399
                         },
                         {
                            "value":0.00967747,
                            "n":1,
                            "scriptPubKey":{
                               "hex":"76a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac",
                               "reqSigs":1,
                               "type":"pubkeyhash",
                               "addresses":[
                                  "14QrFf7TR7uiDpwBwrYhHaUEd83jNj23pL"
                               ]
                            },
                            "valueSat":967747
                         }
                      ],
                      "rawtx":"0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000",
                      "blockhash": "000000000000000007fe2a3df2202a884a204b21ee00b5c18088c9cb65cdecf0",
                      "blockheight":576168,
                      "blocktime": 1554085571,
                      "valueOut":0.00983146,
                      "valueIn":0.00983375,
                      "fees":0.00000229,
                      "time": 1554085571
                   },
                   {
                      "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                      "size":225,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"e8ef92e542cceaedef6ce338498240d7db80925ff009d77fac34e3ddc134c1a4",
                            "vout":1,
                            "scriptSig":{
                               "hex":"47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00924603,
                            "addr":"17d9np3mtaz13kYdePwc2Cufd6dMoNjWib",
                            "valueSat":924603
                         }
                      ],
                      "vout":[
                         {
                            "value":0.00015463,
                            "n":0,
                            "scriptPubKey":{
                               "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                               "reqSigs":1,
                               "type":"pubkeyhash",
                               "addresses":[
                                  "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                               ]
                            },
                            "valueSat":15463
                         },
                         {
                            "value":0.00908911,
                            "n":1,
                            "scriptPubKey":{
                               "hex":"76a9146656783b099d284e4a7871b5fc17848db11d4aef88ac",
                               "reqSigs":1,
                               "type":"pubkeyhash",
                               "addresses":[
                                  "1AL7WaqTfGqU1LrKzcdsjzNJC4YrtVFrgb"
                               ]
                            },
                            "valueSat":908911
                         }
                      ],
                      "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                      // "confirmations":143,
                      "time":1554007897,
                      "blocktime":1554007897,
                      "rawtx":"0100000001a4c134c1dde334ac7fd709f05f9280dbd740824938e36cefedeacc42e592efe8010000006a47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7ffffffff02673c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac6fde0d00000000001976a9146656783b099d284e4a7871b5fc17848db11d4aef88ac00000000",
                      "blockheight":576025,
                      "valueOut":0.00924374,
                      "valueIn":0.00924603,
                      "fees":0.00000229
                   },
                   {
                      "txid":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                      "size":304,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                            "vout":0,
                            "scriptSig":{
                               "hex":"483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00015463,
                            "addr":"12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
                            "valueSat":15463
                         }
                      ],
                      "vout":[
                         {
                            "value":0,
                            "n":0,
                            "scriptPubKey":{
                               "hex":"6a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64",
                               "type":"nulldata"
                            },
                            "valueSat":0
                         },
                         {
                            "value":0.00015058,
                            "n":1,
                            "scriptPubKey":{
                               "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                               "reqSigs":1,
                               "type":"pubkeyhash",
                               "addresses":[
                                  "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                               ]
                            },
                            "valueSat":15058
                         }
                      ],
                      "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                      // "confirmations":143,
                      "time":1554007897,
                      "blocktime":1554007897,
                      "rawtx":"0100000001454cd6dd0adc79351cd7f840f57dd4d0a774b4b8413eaf9047aafa7697f4f6bd000000008b483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000476a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64d23a0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                      "blockheight":576025,
                      "valueOut":0.00015058,
                      "valueIn":0.00015463,
                      "fees":0.00000405
                   },
                   {
                      "txid":"96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
                      "size":301,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                            "vout":1,
                            "scriptSig":{
                               "hex":"4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00015058,
                            "addr":"12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
                            "valueSat":15058
                         }
                      ],
                      "vout":[
                         {
                            "value":0,
                            "n":0,
                            "scriptPubKey":{
                               "hex":"6a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f74686572",
                               "type":"nulldata"
                            },
                            "valueSat":0
                         },
                         {
                            "value":0.00014656,
                            "n":1,
                            "scriptPubKey":{
                               "hex":"76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac",
                               "reqSigs":1,
                               "type":"pubkeyhash",
                               "addresses":[
                                  "12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX"
                               ]
                            },
                            "valueSat":14656
                         }
                      ],
                      "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                      // "confirmations":143,
                      "time":1554007897,
                      "blocktime":1554007897,
                      "rawtx":"0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                      "blockheight":576025,
                      "valueOut":0.00014656,
                      "valueIn":0.00015058,
                      "fees":0.00000402
                   }
                ]
             }
        );

        var result = await index.instance(options).insight.getAddressesTxs(
            '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
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
                      "size":225,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"2962f47710fd12c22c7b90080070547fe5fe009bb2abe18e37c83ca6478aa7c8",
                            "vout":1,
                            "scriptSig":{
                               "asm":"304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2[ALL|FORKID] 03b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265",
                               "hex":"47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00983375,
                            "addr":"1DxBoWtkqZE9X2FtiwTv7YTDvX4hrYXLCZ",
                            "valueSat":983375
                         }
                      ],
                      "vout":[
                         {
                            "value":0.00015399,
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
                            "valueSat":15399
                         },
                         {
                            "value":0.00967747,
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
                            "valueSat":967747
                         }
                      ],
                      "rawtx":"0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000",
                      "blockhash": "000000000000000007fe2a3df2202a884a204b21ee00b5c18088c9cb65cdecf0",
                      "blockheight":576168,
                      "blocktime": 1554085571,
                      "valueOut":0.00983146,
                      "valueIn":0.00983375,
                      "fees":0.00000229,
                      "time": 1554085571
                   },
                   {
                      "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                      "size":225,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"e8ef92e542cceaedef6ce338498240d7db80925ff009d77fac34e3ddc134c1a4",
                            "vout":1,
                            "scriptSig":{
                               "asm":"304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce[ALL|FORKID] 03052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7",
                               "hex":"47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00924603,
                            "addr":"17d9np3mtaz13kYdePwc2Cufd6dMoNjWib",
                            "valueSat":924603
                         }
                      ],
                      "vout":[
                         {
                            "value":0.00015463,
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
                            "valueSat":15463
                         },
                         {
                            "value":0.00908911,
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
                            "valueSat":908911
                         }
                      ],
                      "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                      "time":1554007897,
                      "blocktime":1554007897,
                      "rawtx":"0100000001a4c134c1dde334ac7fd709f05f9280dbd740824938e36cefedeacc42e592efe8010000006a47304402201cfbc9765e83d78fff878fae68390bb00b71c8cbf8e4ad49c393f8338a190f6102200d862a894e337491cbe7dae016d5270e159d77b88b0135fd7beb6667ad136fce412103052695f3f3d151be339b0c0dd9b690e2b40bc7e9585f3848fd248280bcdfe3d7ffffffff02673c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac6fde0d00000000001976a9146656783b099d284e4a7871b5fc17848db11d4aef88ac00000000",
                      "blockheight":576025,
                      "valueOut":0.00924374,
                      "valueIn":0.00924603,
                      "fees":0.00000229
                   },
                   {
                      "txid":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                      "size":304,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"bdf6f49776faaa4790af3e41b8b474a7d0d47df540f8d71c3579dc0addd64c45",
                            "vout":0,
                            "scriptSig":{
                               "asm":"3045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee6868[ALL|FORKID] 044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a",
                               "hex":"483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00015463,
                            "addr":"12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
                            "valueSat":15463
                         }
                      ],
                      "vout":[
                         {
                            "value":0,
                            "n":0,
                            "scriptPubKey":{
                               "asm":"OP_RETURN 31394878696756345179427633744870515663554551797131707a5a56646f417574 26984 746578742f6d61726b646f776e 5554462d38 48656c6c6f20776f726c64",
                               "hex":"6a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64",
                               "type":"nulldata"
                            },
                            "valueSat":0
                         },
                         {
                            "value":0.00015058,
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
                            "valueSat":15058
                         }
                      ],
                      "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                      "time":1554007897,
                      "blocktime":1554007897,
                      "rawtx":"0100000001454cd6dd0adc79351cd7f840f57dd4d0a774b4b8413eaf9047aafa7697f4f6bd000000008b483045022100a02ad4d9c45a4b32e90b6ac95d9f3c8e6ef91ec1d783cf8bcd414a525164710d022027dda778f6a97e7aa6b5f04a3d77e6805d50d5624d1fb1af61d5794b0aee68684141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000476a2231394878696756345179427633744870515663554551797131707a5a56646f4175740268690d746578742f6d61726b646f776e055554462d380b48656c6c6f20776f726c64d23a0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                      "blockheight":576025,
                      "valueOut":0.00015058,
                      "valueIn":0.00015463,
                      "fees":0.00000405
                   },
                   {
                      "txid":"96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6",
                      "size":301,
                      "version":1,
                      "locktime":0,
                      "vin":[
                         {
                            "txid":"d834682a5d29646427e5627d38c10224036535fa7e3066ae2f7a163a96550e27",
                            "vout":1,
                            "scriptSig":{
                               "asm":"30440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb7[ALL|FORKID] 044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a",
                               "hex":"4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598a"
                            },
                            "sequence":4294967295,
                            "n":0,
                            "value":0.00015058,
                            "addr":"12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX",
                            "valueSat":15058
                         }
                      ],
                      "vout":[
                         {
                            "value":0,
                            "n":0,
                            "scriptPubKey":{
                               "asm":"OP_RETURN 31394878696756345179427633744870515663554551797131707a5a56646f417574 1717859169 746578742f6d61726b646f776e 5554462d38 616e6f74686572",
                               "hex":"6a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f74686572",
                               "type":"nulldata"
                            },
                            "valueSat":0
                         },
                         {
                            "value":0.00014656,
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
                            "valueSat":14656
                         }
                      ],
                      "blockhash":"0000000000000000078f34d9cd3f48e4948aef4c79548ec777050e1c8953a85c",
                      "time":1554007897,
                      "blocktime":1554007897,
                      "rawtx":"0100000001270e55963a167a2fae66307efa3565032402c1387d62e5276464295d2a6834d8010000008a4730440220132f6d484de9d34d314aec945865af5da95f35cf4c7cc271d40bc99f8d7f12e3022051fcb2ce4461d1c6e8a778f5e4dcb27c8461d18e0652f68a7a09a98e95df5cb74141044e2c1e2c055e7aefc291679882382c35894a6aa6dd95644f598e506c239f9d83b1d9671c1d9673e3c2b74f07e8032343f3adc21367bd4cffae92fe31efcd598affffffff020000000000000000456a2231394878696756345179427633744870515663554551797131707a5a56646f41757404617364660d746578742f6d61726b646f776e055554462d3807616e6f7468657240390000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac00000000",
                      "blockheight":576025,
                      "valueOut":0.00014656,
                      "valueIn":0.00015058,
                      "fees":0.00000402
                   }
                ]
             }
        );
    });
});

describe('insight GET /api/addr/:address/utxo test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).insight.getAddressUtxos('address');
        expect(result).to.eql({
            success: false,
            message: 'Request failed with status code 500'
        });
    });

    it('should succeed with getting utxos', async () => {
        var result = await index.instance(options).insight.getAddressUtxos('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');
        delete result[0].confirmations;
        delete result[1].confirmations;
        expect(result).to.eql(
            [
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                    vout: 0,
                    amount: 0.00015399,
                    satoshis: 15399,
                    value: 15399,
                    height: 576168,
                    // confirmations: 1,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid:
                    '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
                    vout: 1,
                    amount: 0.00014656,
                    satoshis: 14656,
                    value: 14656,
                    height: 576025,
                    // confirmations: 144,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                }
            ]
        );
        var result = await index.instance(options).insight.getAddressUtxos(['12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);
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
                    "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                    "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
                    "value": 15411,
                    "vout": 0,
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                    vout: 0,
                    amount: 0.00015399,
                    satoshis: 15399,
                    value: 15399,
                    height: 576168,
                    // confirmations: 1,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid:
                    '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
                    vout: 1,
                    amount: 0.00014656,
                    satoshis: 14656,
                    value: 14656,
                    height: 576025,
                    // confirmations: 144,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                }
            ]
        );
    });
});

describe('insight POST /api/tx/send test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).insight.sendTx('0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000');
        expect(result).to.eql({
            "message": {
                "code": 1,
                "message": "the transaction was rejected by network rules.\n\ntransaction already in block chain\n[0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000]"
            },
            "errors": []
        });
    });
});

describe('insight POST /api/addrs/utxo test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).insight.getAddressesUtxos('address');
        expect(result.success).to.eql(false);
        expect(result).to.eql({
            success: false,
            message: 'Request failed with status code 500'
        });
    });

    it('should succeed with getting utxos', async () => {
        var result = await index.instance(options).insight.getAddressesUtxos(['12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX', '1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD']);
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
                    "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                    "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
                    "value": 15411,
                    "vout": 0,
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                    vout: 0,
                    amount: 0.00015399,
                    satoshis: 15399,
                    value: 15399,
                    height: 576168,
                    // confirmations: 1,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                },
                {
                    address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                    txid:
                    '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
                    vout: 1,
                    amount: 0.00014656,
                    satoshis: 14656,
                    value: 14656,
                    height: 576025,
                    // confirmations: 144,
                    scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                }
            ]
        );
    });

    /**

    describe('insight GET /api/addr/txs?address=:address test', () => {
        it('should fail with invalid address', async () => {
            var result = await index.instance(options).insight.addrTxs('address');
            expect(result.success).to.eql(false);
            expect(result).to.eql({
                success: false,
                message: 'Request failed with status code 500'
            });
        });

        it('should succeed with getting utxos', async () => {
            var result = await index.instance(options).insight.addrTxs('12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX');
            expect(result.success).to.eql(true);
            delete result.data[0].confirmations;
            delete result.data[1].confirmations;
            expect(result).to.eql({
                success: true,
                data: [
                    {
                        "address": "1XeMYaLJX6rhXcRe2XtGh6hgstgXwZ5SD",
                        "amount": 0.00015411,
                        "height": 576171,
                        "satoshis": 15411,
                        "scriptPubKey": "76a91405cba91bd4ec7645df9a5c162877815f758c9b3888ac",
                        "txid": "fcd2e37b0c9472fd81bc475e98193caa61581f3ded6c50e843d9c2e1ee5fdef6",
                        "value": 15411,
                        "vout": 0,
                    },
                    {
                        address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                        txid: '5e3014372338f079f005eedc85359e4d96b8440e7dbeb8c35c4182e0c19a1a12',
                        vout: 0,
                        amount: 0.00015399,
                        satoshis: 15399,
                        value: 15399,
                        height: 576168,
                        // confirmations: 1,
                        scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                    },
                    {
                        address: '12XXBHkRNrBEb7GCvAP4G8oUs5SoDREkVX',
                        txid:
                        '96b3dc5941ce97046d4af6e7a69f4b38c48f05ef071c2a33f88807b89ab51da6',
                        vout: 1,
                        amount: 0.00014656,
                        satoshis: 14656,
                        value: 14656,
                        height: 576025,
                        // confirmations: 144,
                        scriptPubKey: '76a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac'
                    }
                ]
            });
        });
    });*/
});
