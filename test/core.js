'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    // insight_api: 'http://localhost:3000',
    insight_api: 'https://api.bitindex.network'
};

describe('core GET /api/v2/addrs/utxos', () => {
    it('should fail no address', async () => {
        var result = await index.instance().getAddressUtxos();
        expect(result).to.eql({
            success: false,
            message: "address required"
        });
    });
    it('should fail invalid address', async () => {
        var result = await index.instance().getAddressUtxos('inv');
        expect(result).to.eql({
            success: false,
            message: "Request failed with status code 500"
        });
    });
    it('should succeed with single address', async () => {
        var result = await index.instance().getAddressUtxos('16uCKridPhrizTgkLNpFajouJtVrk8awhc');
        delete result.data[0].confirmations;
        expect(result).to.eql({
            data: [
                {
                    "address": "16uCKridPhrizTgkLNpFajouJtVrk8awhc",
                    "amount": 0.0001,
                    // "confirmations": 198998,
                    "height": 379449,
                    "satoshis": 10000,
                    "scriptPubKey": "76a91440b7b671822bca2ca4aad535d4a83b2ef03de40c88ac",
                    "txid": "4bead54c35b4274ec9c55f1953cf0949319e77176df3922d6f693a9021493241",
                    "value": 10000,
                    "vout": 21,
                }
            ]
        });
    });
    it('should succeed with multiple addresses', async () => {
        var result = await index.instance().getAddressUtxos(['1JoiKZz2QRd47ARtcYgvgxC9jhnre9aphv', '16uCKridPhrizTgkLNpFajouJtVrk8awhc']);
        delete result.data[0].confirmations;
        expect(result).to.eql({
            "data": [
                {
                    "address": "16uCKridPhrizTgkLNpFajouJtVrk8awhc",
                    "amount": 0.0001,
                    // "confirmations": 198998,
                    "height": 379449,
                    "satoshis": 10000,
                    "scriptPubKey": "76a91440b7b671822bca2ca4aad535d4a83b2ef03de40c88ac",
                    "txid": "4bead54c35b4274ec9c55f1953cf0949319e77176df3922d6f693a9021493241",
                    "value": 10000,
                    "vout": 21,
                }
            ]
        });
    });
})

describe('insight POST /api/v2/tx/send test', () => {
    it('should fail with invalid address', async () => {
        var result = await index.instance(options).sendTx('0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000');
        expect(result).to.eql({
            "message": {
                "code": 1,
                "message": "the transaction was rejected by network rules.\n\ntransaction already in block chain\n[0100000001c8a78a47a63cc8378ee1abb29b00fee57f54700008907b2cc212fd1077f46229010000006a47304402207ca8de8bbc656f7df9f99790b61799e7745d12d354a1f346a20fbc32cc76e045022005e5536c5c8997670566d693f725072cec9db8d24aa048caad1108e0400bfcd2412103b1fa158185120c1266ff328964446cdb5816a37b2668411e847b4d2395a6a265ffffffff02273c0000000000001976a91410bdcba3041b5e5517a58f2e405293c14a7c70c188ac43c40e00000000001976a914256b0efdfc907d12125c4fbb1754b38e7c8b1a1788ac00000000]"
            },
            "errors": []
        });
    });
});
