'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    api_url: 'http://localhost:3000',
    //api_url: 'https://api.bitindex.network',
    api_key: 'key1' // Get your api key at www.bitindex.network
};

const options2 = {
    api_url: 'http://localhost:3000',
    //api_url: 'https://api.bitindex.network',
    api_key: 'key2' // Get your api key at www.bitindex.network
};

describe('#webhook.updateConfig PUT /webhook/endpoints', () => {

    it('should succeed update', async () => {
        var result = await index.instance(options).webhook.updateConfig(
            'http://noneexistenturl1230000.com/callback',
            false,
            'mysecret'
        );
        delete result.id;
        expect(result).to.eql({
            url: 'http://noneexistenturl1230000.com/callback',
            enabled: false,
            secret: 'mysecret'
        })
    });

});

describe('#webhook.getConfig GET /webhook/endpoints', () => {
    it('should succeed', async () => {
        var result = await index.instance(options).webhook.getConfig();
        delete result.id;
        expect(result).to.eql({
            url: 'http://noneexistenturl1230000.com/callback',
            enabled: false,
            secret: 'mysecret'
        })
    });
});


describe('#webhook.updateMonitoredAddresses PUT /webhook/monitored_addrs', () => {
    it('should succeed update', async () => {
        var result = await index.instance(options).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                },
                {
                    addr: '1GjiTsV66HXngNX6Fq8xMnYZVj13munG3m'
                }
            ]
        );
        expect(result).to.eql(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                },
                {
                    addr: '1GjiTsV66HXngNX6Fq8xMnYZVj13munG3m'
                }
            ]
        )
    });
});

describe('#webhook.updateMonitoredAddresses PUT /webhook/monitored_addrs test for additive existing xpub', () => {
    it('should succeed update', async () => {

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                    delete: true
                },
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                    delete: true
                }
            ]
        );

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                }
            ]
        );
        expect(result).to.eql(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                }
            ]
        );

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                }
            ]
        );
        expect(result).to.eql(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                }
            ]
        );

        var result = await index.instance(options2).webhook.getMonitoredAddresses();
        expect(result).to.eql(
            [

                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                },
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                },
            ]
        );

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                }
            ]
        );

        var result = await index.instance(options2).webhook.getMonitoredAddresses();
        expect(result).to.eql(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                },
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                }
            ]
        );

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                    delete: true
                }
            ]
        );

        expect(result).to.eql(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                    delete: true,
                }
            ]
        );

        var result = await index.instance(options2).webhook.getMonitoredAddresses();
        expect(result).to.eql(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                }
            ]
        );

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                    delete: true
                }
            ]
        );

        var result = await index.instance(options2).webhook.getMonitoredAddresses();
        expect(result).to.eql(
            [
            ]
        );

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                },
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                }
            ]
        );

        var result = await index.instance(options2).webhook.updateMonitoredAddresses(
            [
                {
                    addr: 'xpub661MyMwAqRbcGGFiZ1S2WhPPuFwC2D5GvEGxTBFs49pbasXxkJ5148guWnv9wPyLzCcyA7t1Htk15HoEe2q4g2H8ujr1mtF4goQaquU23ir',
                    delete: true
                },
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                    delete: true
                }
            ]
        );

        var result = await index.instance(options2).webhook.getMonitoredAddresses();
        expect(result).to.eql(
            [
            ]
        );

    });
});

describe('#webhook.getMonitoredAddresses GET /webhook/monitored_addrs', () => {
    it('should succeed update', async () => {
        var result = await index.instance(options).webhook.getMonitoredAddresses();
        expect(result).to.eql(
            [
                {
                    addr: 'xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ',
                },
                {
                    addr: '1GjiTsV66HXngNX6Fq8xMnYZVj13munG3m'
                }
            ]
        );
    });
});
