const assert = require('assert');
const rotateList = require('../src/03-rotate-list');
it.optional = require('../extensions/it-optional');

describe('03-rotate-list', () => {
  let array;

  beforeEach(() => {
    array = [1, 2, 3, 4, 5];
  });

  it.optional('should return rotated array by 2 steps', () => {
    rotateList(array, 2);
    assert.deepEqual(
      array,
      [4, 5, 1, 2, 3],
    );
  });

  it.optional('should return rotated array by 5 steps', () => {
    rotateList(array, 5);
    assert.deepEqual(
      array,
      [1, 2, 3, 4, 5],
    );
  });

  it.optional('should return rotated array by 10 steps', () => {
    rotateList(array, 10);
    assert.deepEqual(
      array,
      [1, 2, 3, 4, 5],
    );
  });

  it.optional('should return rotated array by 0 steps', () => {
    rotateList(array, 0);
    assert.deepEqual(
      array,
      [1, 2, 3, 4, 5],
    );
  });
});
