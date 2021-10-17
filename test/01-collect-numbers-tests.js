const assert = require('assert');
const collectNumbers = require('../src/01-collect-numbers');
it.optional = require('../extensions/it-optional');

describe('01-collect-numbers', () => {
  it.optional('should return the collected sorted array of numbers', () => {
    assert.deepEqual(collectNumbers([1, 2, 3])([4, 5])(), [1, 2, 3, 4, 5]);
    assert.deepEqual(collectNumbers([1, 2, 3])([4, 5])([5, 6])(), [1, 2, 3, 4, 5, 5, 6]);
    assert.deepEqual(
      collectNumbers([1, 2, 3])([4, 5])([5, 6])([1, 2])(),
      [1, 1, 2, 2, 3, 4, 5, 5, 6],
    );
    assert.deepEqual(collectNumbers([1, 2, 3])(), [1, 2, 3]);
  });

  it.optional('should return empty array in negative cases', () => {
    assert.deepEqual(collectNumbers(), []);
    assert.deepEqual(collectNumbers(null), []);
  });

  it.optional('should return a function', () => {
    assert.strictEqual(collectNumbers([1, 2, 3]) instanceof Function, true);
  });
});
