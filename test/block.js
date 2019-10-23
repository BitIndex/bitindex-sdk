'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    // api_url: 'http://localhost:3000',
    api_url: 'http://ec2-54-214-118-47.us-west-2.compute.amazonaws.com',
};


describe('#block.getByBlockHash GET /api/block/:blockhash test', () => {
    it('should fail no blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHash('inv');
        expect(result).to.eql({
            code: 500,
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

describe('#block.getBlockHeaders GET /api/blockheaders test', () => {

    it('should fail with out of bounds fromHeight, order, and limit', async () => {
        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: -2,
            });
        expect(result).to.eql({
            "code": 422,
            "message": "Request failed with status code 422"
        })

        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: 'd',
            });
            expect(result).to.eql({
                "code": 422,
                "message": "Request failed with status code 422"
            })

        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: 1,
                order: 'ascen'
            });
            expect(result).to.eql({
                "code": 422,
                "message": "Request failed with status code 422"
            })

        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: 1,
                limit: -1
            });
            expect(result).to.eql({
                "code": 422,
                "message": "Request failed with status code 422"
            })

        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: 1,
                limit: 500
            });
            expect(result).to.eql({
                "code": 422,
                "message": "Request failed with status code 422"
            })
    });

    it('block header check test not found 00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb604fail', async () => {
        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: -1,
                fromBlockHash: '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb604fail',
                order: 'asc',
                limit: 20,
            });
            expect(result).to.eql({
                "code": 404,
                "message": "Request failed with status code 404"
            })
    });

    it('block header check test 00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048', async () => {
        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: -1,
                fromBlockHash: '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048',
                order: 'asc',
                limit: 2,
            });
            expect(result).to.eql([
                {
                   "_id":"5dae839b639c323317177e3d",
                   "hash":"00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048",
                   "confirmations":605400,
                   "strippedsize":0,
                   "size":215,
                   "weight":0,
                   "height":1,
                   "version":1,
                   "versionHex":"00000001",
                   "merkleroot":"0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098",
                   "tx":[
                      "0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098"
                   ],
                   "time":1231469665,
                   "nonce":2573394689,
                   "bits":"1d00ffff",
                   "difficulty":1,
                   "previousblockhash":"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
                   "nextblockhash":"000000006a625f06636b8bb6ac7b960a8d03705d1ace08b1a19da3fdcc99ddbd",
                   "txcnt":1,
                   "coinbaseinfo":"BP//AB0BBA==",
                   "coinbasetxid":"0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098"
                },
                {
                   "_id":"5dae839b639c323317177e43",
                   "hash":"000000006a625f06636b8bb6ac7b960a8d03705d1ace08b1a19da3fdcc99ddbd",
                   "confirmations":605399,
                   "strippedsize":0,
                   "size":215,
                   "weight":0,
                   "height":2,
                   "version":1,
                   "versionHex":"00000001",
                   "merkleroot":"9b0fc92260312ce44e74ef369f5c66bbb85848f2eddd5a7a1cde251e54ccfdd5",
                   "tx":[
                      "9b0fc92260312ce44e74ef369f5c66bbb85848f2eddd5a7a1cde251e54ccfdd5"
                   ],
                   "time":1231469744,
                   "nonce":1639830024,
                   "bits":"1d00ffff",
                   "difficulty":1,
                   "previousblockhash":"00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048",
                   "nextblockhash":"0000000082b5015589a3fdf2d4baff403e6f0be035a5d9742c1cae6295464449",
                   "txcnt":1,
                   "coinbaseinfo":"BP//AB0BCw==",
                   "coinbasetxid":"9b0fc92260312ce44e74ef369f5c66bbb85848f2eddd5a7a1cde251e54ccfdd5"
                }
             ]
            );
    });

    it('block header check test 00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048 desc', async () => {
        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: -1,
                fromBlockHash: '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048',
                order: 'desc',
                limit: 2,
            });
            expect(result).to.eql([ { _id: '5dae839b639c323317177e3d',
            hash: '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048',
            confirmations: 605400,
            strippedsize: 0,
            size: 215,
            weight: 0,
            height: 1,
            version: 1,
            versionHex: '00000001',
            merkleroot: '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098',
            tx: [ '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098' ],
            time: 1231469665,
            nonce: 2573394689,
            bits: '1d00ffff',
            difficulty: 1,
            previousblockhash: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
            nextblockhash: '000000006a625f06636b8bb6ac7b960a8d03705d1ace08b1a19da3fdcc99ddbd',
            txcnt: 1,
            coinbaseinfo: 'BP//AB0BBA==',
            coinbasetxid: '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098' },
          { _id: '5dae839b639c323317177e37',
            hash: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f',
            confirmations: 605401,
            strippedsize: 0,
            size: 285,
            weight: 0,
            height: 0,
            version: 1,
            versionHex: '00000001',
            merkleroot: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
            tx: [ '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b' ],
            time: 1231006505,
            nonce: 2083236893,
            bits: '1d00ffff',
            difficulty: 1,
            previousblockhash: '',
            nextblockhash: '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048',
            txcnt: 1,
            coinbaseinfo: 'BP//AB0BBEVUaGUgVGltZXMgMDMvSmFuLzIwMDkgQ2hhbmNlbGxvciBvbiBicmluayBvZiBzZWNvbmQgYmFpbG91dCBmb3IgYmFua3M=',
            coinbasetxid: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b' } ]
            );
    });

    it('should succeed with latest from chain tip only having the latest blockheader', async () => {
        var result = await index.instance(options).block.getBlockHeaders(
            {
                fromHeight: -1,
                order: 'asc',
                limit: 3,
            });
        expect(result).to.eql([ { _id: '5db0c4db639c32331740f0c1',
        hash: '000000000000000000145abbf6b6cf7d51b731d30388db34d87151086f39a92b',
        confirmations: 1,
        strippedsize: 0,
        size: 1696403,
        weight: 0,
        height: 605651,
        version: 536870912,
        versionHex: '20000000',
        merkleroot: '9ca5b40889c763cc92f6b7d61dead0ff88949adeef76ba6e5958285c64f9aa9b',
        tx:
         [ 'f2174fa5bb028f5424588201a76dc22bfdd5fddcc608804b09253d903fdb7a98',
           'b9dc81ea46e1d098ce7ccdbb7f843f19d52aafd890f3cb77586fa3ecc6cc03f3',
           '6b9104ff32d962283b892a40e89817b4fd1063e8dd454cdd874aa9f7b0b18e64',
           'ac08cdb687567ac80aa90258aefcc48bc96536f5effb3692e47cdf80d214a9ce',
           '77588496b5915e9f501f89bda2b74cf4e03cd562381df9da32bc094bf088ea37',
           'd2b7bd874f39500e6a37d78345472311884d0c560018690254e641461d7acfea',
           '1a44feea6d3717ab9021d800cb5ff5ccd9bc293531b1f5228ab98fc0393e5a50',
           '68c40613bd82d93c9402cf8242d4b9d17b093aa65a1ccc988197b45f4f2add77',
           'c3a3d73a8c6b817372aa6025c59e0de0efa86b5dbc6177b2c41a871c80f9b040',
           'f66d28ce83cd3fc021756698c8f6aa312b194e06ef836865ee0f88258e5ad615',
           '091345dc67c7d2e8bf7411b51f2eab191e04d901175021182e50bd42ba8f2e19',
           '42fbefa074cbfa00e9cbde5af87227c10a7fdefcc577c2084f6f59076018ec2d',
           'aafc64e6aaf528f68ac15986c8657c36fdef3b6080092e65424d72ac799ee146',
           '27850d0827cd434a7bddafbab79a9035b5862c9cac5907a2a83c8b36b34808a5',
           'e531cdce200cb542b16299104e250e3f603d8d1e043d39cc0e9b7d931b8c17b7',
           '255a0fc26ef4472489bc90c92e7fd5887b919eddabfa36442db464e70d5ba90c',
           '7bfd0d6f359079492b9dd8f816a76d3201423ab83b2bba9fb27e6f2bd8843c11',
           '785a70f7147ae2654bd85315545ecd4ba28c7d30aa4e660b9ed714feb3db0918',
           'e18c07cd13ce3d793a4aff2dc013492312a47b381239b105e437880f7c55b12d',
           'e135d4dbf30338df5a15ac2382d73ffabb492b1b94b5a2cc644ed62bd2206a49' ],
        time: 1571865758,
        nonce: 1272911516,
        bits: '18066f2a',
        difficulty: 170881995395.2583,
        previousblockhash: '000000000000000001a7438edc2109d37964190c3bfd579caf78d966de589146',
        txcnt: 2392,
        coinbaseinfo: 'A9M9CS9odHRwczovL2NvaW5nZWVrLmNvbS9taW5lci1vdXRyZWFjaC8vMUd0QnR0LUsiyok4dqWaLAIA',
        coinbasetxid: 'f2174fa5bb028f5424588201a76dc22bfdd5fddcc608804b09253d903fdb7a98' },
      { _id: '5db0c6bb639c32331740f4ff',
        hash: '0000000000000000037fb4891ea4dcb06987eb6586b7b02ce81ea69f2be33bd1',
        confirmations: 1,
        strippedsize: 0,
        size: 942656,
        weight: 0,
        height: 605652,
        version: 545259520,
        versionHex: '20800000',
        merkleroot: '5735bb315b0129f8b7a5c4847317c1bd6795c92b8db7ddf57fa3e8d2b05fd455',
        tx:
         [ 'd63a7471c2e82ec4bc0ec6e04784377c0bb73a65e3458f73f56086b86c0a2890',
           '7f5978bcdca635829fb1401ee2a11979d52d3975c29c91e964dab2572a9e9563',
           '67db9d5df82574fdcc4c0c3a38c85432eace93d217ad964e099ffa5d21e0b1ab',
           '35c145722515b49b4616c8cb080478402970ae5d5341ed5829f87a3701d543a7',
           '258d17579b5352a04c5c3cb5601f65efe9d4c44c6d40ee9969f45259786d25fe',
           '0bb0bb4426085ab64b776ca49b3ceda476813809ee21d0bc97c503a43ab9d7dc',
           'cca772b914c6961c1ee8b6941413521fa60a4f9b838cfe085deeb5ee34075d91',
           'e24567843ae94abd1d387d53292b6f0b5a62952c4a83d16e57b2546d83244b41',
           '3b10a5908c3dc6b3bb7a9b15314f2bd86387131a43ff183c69741a04394814b8',
           'fb572d3484151d475cd28e470e67e8962c78708bf3e950731844ada1d60450d8',
           '254f74b8f8c1e1b568be7c3fde1c96940f496ece25f78506962208bb858f2dea',
           '132dcac07f5a037dbff1f78f9530f54ee6ab8d90861fcf212b50babd5b517fe3',
           '71eb1e6a2429e0f9404ce6d3cfb1acd61f784f1b664f1e2beaefdc4165db7b44',
           'e530961a9e2e6a30acc2ce0d048b96300489299b38af6c3a0def3f8dc9ebb21d',
           'c068dd1e37cc77c75bc2b01db9386ccf27e036f1dcf3c6a961e73463ee289e0e',
           'f1dc1b0871c256f00a47c144ecfc5356962542ae95822d6bfd77cc9ee9d7d995',
           '19c47257182beb7cc8813433492c442c71993e63041ca9df2e773788b9ea8d0d',
           '047cb0e8d43cd27f05c5c25cb242d7ae3c649030e5069919701485b1b9c53f1c',
           '6ce65923cbf8944931742b56d4177adab889107a908be347656b1e9c32d4c621',
           '4d7aea65fe652d92061bde84ee36e8e5870f13990e3922a95fb0ba5eb97e8a28' ],
        time: 1571866238,
        nonce: 623867033,
        bits: '18068428',
        difficulty: 168731605173.8918,
        previousblockhash: '000000000000000000145abbf6b6cf7d51b731d30388db34d87151086f39a92b',
        txcnt: 1515,
        coinbaseinfo: 'A9Q9CS9jb2luZ2Vlay5jb20vd1kxGBeshdHRNUibMgIA',
        coinbasetxid: 'd63a7471c2e82ec4bc0ec6e04784377c0bb73a65e3458f73f56086b86c0a2890' },
      { _id: '5db0c85e639c32331740f8b5',
        hash: '000000000000000004c01a1a739e1e0a66994ac8b41ad1cc7f75686cfaebaa32',
        confirmations: 1,
        strippedsize: 0,
        size: 1056864,
        weight: 0,
        height: 605653,
        version: 541065216,
        versionHex: '20400000',
        merkleroot: '2195ad79022499e4ced61a8f8a406e90a839aae69946e4a85db785dedfa0868d',
        tx:
         [ 'a6d5c4569f6cbc580de8da8059818184d233c0f6ba28dd9b5ebc28c8c3d101dc',
           '96b05507a964f7234388c43402fea682e2f2ff6d1b965847063dfc5d40f6589b',
           'ab08a55a8f9c08a595a006e1fcf447e072ebe2eba5d30037fd92768eba510a74',
           'b3de201cffab04ef954cba4621fa6faaf0a39b08bf4f9e75e777f7bee3a180e5',
           '012a9254c9d66ecaac599fb75a5c9a23c7aff2e256dbb3b19c1cb13c7e154b32',
           'df5cae63c12a77a75fdb6370eab815dcecb3eb9e38d0543aad3a531ca58782b0',
           '3e51c91f42d3f87766f8a54cc27ee19c7e03f638e1f3211a702f25f202f8ba1d',
           'b5a4ebcbbaaa33d8473d0500b796119f67727bef645fbea498cf742da6ca7d6e',
           'fc33f856dd8c77584650b20bdd771fb9da01ff5ce5833f348fcdeb15976f3ff0',
           '846b202c6cd724080b3f6b6100da22e7417c61217f7becf0942d3525b26b6805',
           '489378c5f2da5cd30b210656303774544d89a5f3e22f30b48dffaf1d8ef7c41b',
           '1b5716e8e496580e3c4742f10e296486e4daf0bd015dca8965b73c2619158938',
           '302ca22ade8d4beca24e9dff0cd5fef8c37fafd73be20f63692659b43976c146',
           '3a206eb5a2a11d54b9735d296c831a8b35c5ae781b89a0624854c8318f8f174a',
           '8b068332440e15e6afd81723899ce826ae719f8613ba6ecfd176149e142ea45c',
           'd8dc04f8a467d2380118169d72267912c5ba205adb216eed930301b5f7fa826b',
           'cf37a716ed0f2e1ffb2572409247f0ac8e300fdc18df18a356f25e1394a6cc96',
           '7f9660988a29ebe5199e4e86a5e3a9b7e655f8a68b034639d2ef2e5a687eb898',
           '2f554eecbd3e0437b3368d67f6086956488a9275329ba3f0b34e4225bc3f48a0',
           'ef52560ba742a1d1fd9d9d9884603ac4470189afc060a204ca7b5a4ccccb4ea0' ],
        time: 1571866658,
        nonce: 2587727469,
        bits: '18068f70',
        difficulty: 167598187930.9948,
        previousblockhash: '0000000000000000037fb4891ea4dcb06987eb6586b7b02ce81ea69f2be33bd1',
        txcnt: 1413,
        coinbaseinfo: 'A9U9CS9jb2luZ2Vlay5jb20vd1kxAvQUA5wesIO6sAAA',
        coinbasetxid: 'a6d5c4569f6cbc580de8da8059818184d233c0f6ba28dd9b5ebc28c8c3d101dc' } ]
        );
    });

});


describe('#block.getBlockHeaderByBlockHash GET /api/blockheader/:blockhash test', () => {
    it('should fail no blockhash', async () => {
        var result = await index.instance(options).block.getByBlockHash('inv');
        expect(result).to.eql({
            code: 500,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with blockhash', async () => {
        var result = await index.instance(options).block.getBlockHeaderByBlockHash('000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52');
        delete result.confirmations;
        expect(result).to.eql({
                hash:
                '000000000000000006c4ca331e7f74df7a371f45857bb0a49be05390e15cbc52',
               // onfirmations: 10,
               height: 575870,
               version: 549453824,
               versionHex: '20c00000',
               merkleroot:
                '5eff2b149295b0010548910fc158664ee36f26781fbaceb42e71d924fac725c4',
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
        var result = await index.instance(options).block.getByBlockHashRaw('inv');
        expect(result).to.eql({
            code: 500,
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
    it('should fail invalid height', async () => {
        var result = await index.instance(options).block.getBlockHashByIndex('inv');
        expect(result).to.eql({
            code: 500,
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
