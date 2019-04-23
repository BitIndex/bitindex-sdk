'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    // api_url: 'http://localhost:3000',
    api_url: 'https://api.bitindex.network'
};

describe('#block.getByBlockHash GET /api/block/:blockhash test', () => {
    it('should fail no blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHash();
        expect(result).to.eql({
            success: false,
            message: "blockhash required"
        });
    });
    it('should fail no blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHash('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHash('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');
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

describe('#block.getByBlockHashRaw GET /rawblock/:blockhash test', () => {
    it('should fail no blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHashRaw();
        expect(result).to.eql({
            success: false,
            message: "blockhash required"
        });
    });
    it('should fail no blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHashRaw('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHashRaw('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');
        expect(result).to.eql( {
            rawblock: "0000c02025f77db6c13808427cacc2771ad1e37dc245102d405edb080000000000000000c425c7fa24d9712eb4ceba1f78266fe34e6658c10f91480501b09592142bff5e94ee9e5cc2ea0b1820a4dc520701000000010000000000000000000000000000000000000000000000000000000000000000ffffffff53037ec908040fef9e5cfabe6d6df41491ca64d04613901a883289cefe0bb98ff57c057e9b05669464ee97d0eb1480000000000000000808061ca3f50a0100142f70726f68617368696e672e636f6d442702002f00000000011281814a000000001976a9147f346e50f5d8eaf4519794668089d9d473a20dbb88ac0000000002000000013dd3087289ab1dd9c2644fec7c73985906f06d44ebf196c06ab51165e9641323000000006b483045022100c8b098c97c6613f9abd391737e8dcc1af7ee59d00f6d49ba4f01c866b7d4eb2702204b946965292283c8c998c965f85bf24b67308870bf99bac047f9b464fd24e1ca412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01487db11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7bc9080002000000010080c5255123d9ae2fda4e9b10d8d20442917cf04e2acd129f6ffa5779d036a8000000006a47304402201f37c5068e2eda3ec4c491f51dbd447c22003a4614b9284a51cfe5f1df7d7c3d02201aa79d17d2b306538d5693538b8b1fd2ff354286b6606916241a483558e96b9c412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01857cb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001666db3be09b9f8bf5520c5bae680c02fcb54173f1b14a338014911a29fd04de9000000006a4730440220603a05534df953ce410250e150935d6eb9349f100bd07d013082bbe3ac79bc0802205219d2eec4b5ba5f270c0d870e0e741b3a14cb6046d5d7fdc0246e10c2d98e31412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01c27bb11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800020000000159c53220930d6f2043239835f5cc00a1708c9b5df43e02479a0f6fd15e885dc4000000006a47304402202852448f44746ad9e6fac1bc2abb66bfa6faaa2d828f056f74f298cfdec3fba202201e4b1d4196c60e137c12bd7d6f5e519f9475634986d716e3bb5b8546b8dab91a412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff01ff7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc908000200000001dd90f16cfc854531fbcc48af53989cbeca49f1381649ff54d468e579987ce6d9000000006b483045022100b63ed1e8cbeee5a9f21abca10ac3582ab79f6fb5cde73f562b332a7cfd9268300220047c967acecb77326e069cf388a2898affec665043046c59a5e008ec2092274d412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff013c7ab11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac2dc908000200000001edc0854566874456f0d4ac1ac13aa9f6439caddb55fdea045d0d7011eb36e599000000006a47304402201f1ed57604b6e4c50a1997cd9d78a78a1ca80cbeffc93dfd36a944b289eed611022028648db1adc259cd149091a9e9f7ca5e15142e162d60ed7c86c07d97e85819c6412103088dd3ad6826cff6b138ace4ebea9aedb0461f2d585859ee03e8cdebc387e315feffffff017979b11a000000001976a9142e6adaa4d680907fc698afe150cd581da61d4b8f88ac7cc90800"
        });
    });
})

describe('#block.getBlockHashByIndex GET /block-index/:height test', () => {
    it('should fail no height', async () => {
        var result = await index.instance(options).block.getBlockHashByIndex();
        expect(result).to.eql({
            success: false,
            message: "height required"
        });
    });
    it('should fail no height', async () => {
        var result = await index.instance(options).block.getBlockHashByIndex('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with height', async () => {
        var result = await index.instance(options).block.getBlockHashByIndex('575870');
        expect(result).to.eql({
            blockHash: "000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52"
        });

        var result = await index.instance(options).block.getBlockHashByIndex(575870);
        expect(result).to.eql({
            blockHash: "000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52"
        });
    });
})
