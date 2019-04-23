'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    // api_url: 'http://localhost:3000',
    api_url: 'https://api.bitindex.network',
    api_key: '...' // Get your api key at www.bitindex.network
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
