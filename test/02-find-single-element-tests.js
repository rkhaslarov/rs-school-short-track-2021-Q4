const assert = require('assert');
const findSingleElement = require('../src/02-find-single-element');
it.optional = require('../extensions/it-optional');

describe('02-find-single-element', () => {
  it.optional('should return the single element from array', () => {
    assert.strictEqual(findSingleElement([1, 2, 2, 3, 3]), 1);
    assert.strictEqual(findSingleElement([1, 1, 2, 2, 3, 5, 3]), 5);
    assert.strictEqual(findSingleElement([3, 4, 2, 2, 3, 5, 4]), 5);
  });

  it.optional('should throw the error if the input is not an array or it is empty', () => {
    assert.throws(() => findSingleElement(), /^Error: Wrong input$/);
    assert.throws(() => findSingleElement([]), /^Error: Wrong input$/);
  });
});
