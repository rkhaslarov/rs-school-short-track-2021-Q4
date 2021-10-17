const assert = require('assert');
const findTwoNumbers = require('../src/04-find-two-numbers');
it.optional = require('../extensions/it-optional');

describe('04-find-two-numbers', () => {
  it.optional('should return indexes of numbers with target sum', () => {
    assert.deepEqual(findTwoNumbers([2, 5, 9, 10], 7), [0, 1]);
    assert.deepEqual(findTwoNumbers([3, 2, 4], 6), [1, 2]);
    assert.deepEqual(findTwoNumbers([3, 3], 6), [0, 1]);
  });

  it.optional('should return empty array in case if there is not target sum', () => {
    assert.deepEqual(findTwoNumbers([2, 5, 9, 10], 21), []);
    assert.deepEqual(findTwoNumbers([], 1), []);
  });
});
