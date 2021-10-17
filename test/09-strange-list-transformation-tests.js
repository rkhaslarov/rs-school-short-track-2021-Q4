const assert = require('assert');
const getTransformedList = require('../src/09-strange-list-transformation');
it.optional = require('../extensions/it-optional');

const getStackLimit = () => {
  let i = 0;
  function inc() {
    i++;
    inc();
  }

  try {
    inc();
  } catch (e) {
    i++;
  }
  return i;
};

describe('09-strange-list-transformation', () => {
  it.optional('should return the expected transformed list', () => {
    assert.equal(getTransformedList([1, 2, 3, 4, 5, 6]), [1, 6, 5, 2, 3, 4]);
    assert.equal(
      getTransformedList([3, 5, 7, 0, 1, 9, 10, 5, 8, 4, 2]),
      [3, 2, 4, 5, 7, 8, 5, 0, 1, 10, 9],
    );
  });

  it.optional('should not mutate the input', () => {
    const input = [1, 2, 3, 4, 5, 6];
    getTransformedList(input);
    assert.equal(input, [1, 2, 3, 4, 5, 6]);
  });

  it.optional('should not exceed stack limit', () => {
    const limit = getStackLimit();
    const input = (new Array(limit)).fill(0).map(() => Math.round(Math.random() * limit));
    assert.doesNotThrow(getTransformedList(input));
  });
});
