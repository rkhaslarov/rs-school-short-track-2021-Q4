const assert = require('assert');
const restoreIpAddresses = require('../src/06-restore-ip-addresses');
it.optional = require('../extensions/it-optional');

describe('06-restore-ip-addresses', () => {
  it.optional('should check if a given string corresponds to MAC-48 address or not', () => {
    assert.deepEqual(restoreIpAddresses('25525511135'), ['255.255.11.135', '255.255.111.35']);
    assert.deepEqual(restoreIpAddresses('0000'), ['0.0.0.0']);
    assert.deepEqual(restoreIpAddresses('1111'), ['1.1.1.1']);
    assert.deepEqual(restoreIpAddresses('010010'), ['0.10.0.10', '0.100.1.0']);
  });
});
