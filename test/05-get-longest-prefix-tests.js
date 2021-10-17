const assert = require('assert');
const getLongestPrefix = require('../src/05-get-longest-prefix');
it.optional = require('../extensions/it-optional');

describe('05-get-longest-prefix', () => {
  it.optional('should return the longest prefix of the given string list', () => {
    assert.strictEqual(getLongestPrefix(['flower', 'flow', 'flight']), 'fl');
    assert.strictEqual(getLongestPrefix(['dog', 'boring', 'task']), '');
    assert.strictEqual(getLongestPrefix(['dog']), 'dog');
  });

  it.optional('should return empty string for negative cases', () => {
    assert.strictEqual(getLongestPrefix([]), '');
    assert.strictEqual(getLongestPrefix(null), '');
    assert.strictEqual(getLongestPrefix(), '');
  });
});
