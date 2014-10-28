var assert = require('assert');
var bn = require('bn.js');
var utils = require('../');

describe('Utils', function() {
  it('should encode/decode base58', function() {
    var arr = [0, 0, 0, 0xde, 0xad, 0xbe, 0xef];
    var b = utils.toBase58(arr);
    assert.equal(b, '1116h8cQN');
    assert.deepEqual(utils.fromBase58(b), arr);
  });

  it('should translate bits to target', function() {
    var bits = 0x1900896c;
    var hash = utils.toArray('672b3f1bb11a994267ea4171069ba0aa4448a840f38e8f340000000000000000', 'hex');
    var target = utils.bitsToTarget(bits);
    assert(utils.testTarget(target, hash));
  });

  it('should convert satoshi to btc', function() {
    var btc = utils.toBTC(new bn(5460));
    assert.equal(btc, '0.0000546');
    var btc = utils.toBTC(new bn(54678).mul(new bn(1000000)));
    assert.equal(btc, '546.78');
    var btc = utils.toBTC(new bn(5460).mul(new bn(10000000)));
    assert.equal(btc, '546');
  });
});
