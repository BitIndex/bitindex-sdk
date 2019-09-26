'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

const options = {
    api_url: 'http://localhost:3000',
    //api_url: 'https://api.bitindex.network',
};

describe('#chaininfo.bestBlockHash GET /api/status?q=getBestBlockHash test', () => {
    it('should succeed with getBestBlockHash', async () => {
        var result = await index.instance(options).chaininfo.bestBlockHash();
        expect(/^[a-fA-F0-9]+$/.test(result.bestblockhash)).to.eql(true);
    });
});

describe('#chaininfo.lastBlockHash GET /api/status?q=getLastBlockHash test', () => {
    it('should succeed with getLastBlockHash', async () => {
        var result = await index.instance(options).chaininfo.lastBlockHash();
        expect(/^[a-fA-F0-9]+$/.test(result.lastblockhash)).to.eql(true);
        expect(/^[a-fA-F0-9]+$/.test(result.syncTipHash)).to.eql(true);
    });
});

describe('#chaininfo.difficulty /api/status?q=getDifficulty test', () => {
    it('should succeed with getDifficulty', async () => {
        var result = await index.instance(options).chaininfo.difficulty();
        expect(/^\d+\.\d*$/.test(result.difficulty + '')).to.eql(true);
    });
});

describe('#chaininfo.status GET /api/status test', () => {
    it('should succeed with default status', async () => {
        var result = await index.instance(options).chaininfo.status();
        delete result.info.blocks;
        delete result.info.difficulty;
        delete result.info.connections;
        expect(result).to.eql({
            info:
                {
                    version: 100020100,
                    protocolversion: 70015,
                    // blocks: 576014,
                    timeoffset: 0,
                    // connections: 8,
                    proxy: '',
                    // difficulty: 97359826681.75484,
                    testnet: false,
                    relayfee: 0.00001,
                    // errors: 'Warning: Unknown block versions being mined! It\'s possible unknown rules are in effect',
                    errors: 'This is a pre-release test build - use at your own risk - do not use for mining or merchant applications',
                    network: 'livenet'
                }
            }
        );
    });
});
