const assert = require('assert');
const increment = require('../src/07-increment-number');
it.optional = require('../extensions/it-optional');

describe('07-increment-number', () => {
  it.optional('should increment', () => {
    assert.deepEqual(increment([1, 2, 3, 4, 5]), [1, 2, 3, 4, 6]);
    assert.deepEqual(increment([1, 2, 9, 9, 9]), [1, 3, 0, 0, 0]);
    assert.deepEqual(increment([9, 9, 9, 9, 9]), [1, 0, 0, 0, 0, 0]);
  });

  it.optional('should increment even a super big number', () => {
    const before = new Array(400).fill(9, 0, 400);
    const after = new Array(400).fill(0, 0, 400);
    after.unshift(1);
    assert.deepEqual(increment(before), after);
  });
});
