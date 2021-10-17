const assert = require('assert');
const findSmallestNumbers = require('../src/11-find-smallest-numbers');
it.optional = require('../extensions/it-optional');

describe('11-find-smallest-numbers', () => {
  it.optional('should return N smallest numbers', () => {
    assert.equal(findSmallestNumbers([1, 2, 3, 4, 5], 3), [1, 2, 3]);
    assert.equal(findSmallestNumbers([5, 4, 3, 2, 1], 3), [3, 2, 1]);
    assert.equal(findSmallestNumbers([1, 2, 3, 1, 2], 3), [1, 2, 1]);
    assert.equal(findSmallestNumbers([1, 2, 3, -4, 0], 3), [1, -4, 0]);
    assert.equal(findSmallestNumbers([1, 2, 3, 4, 5], 5), [1, 2, 3, 4, 5]);
    assert.equal(findSmallestNumbers([1, 2, 3, 4, 2], 4), [1, 2, 3, 2]);
    assert.equal(findSmallestNumbers([2, 1, 2, 3, 4, 2], 2), [2, 1]);
    assert.equal(findSmallestNumbers([2, 1, 2, 3, 4, 2], 3), [2, 1, 2]);
    assert.equal(findSmallestNumbers([2, 1, 2, 3, 4, 2], 4), [2, 1, 2, 2]);
  });

  it.optional('should return empty array, if 0 numbers are requested', () => {
    assert.equal(findSmallestNumbers([1, 2, 3, 4, 5], 0), []);
  });
});
