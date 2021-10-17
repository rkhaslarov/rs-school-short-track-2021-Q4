const proxyquire = require('proxyquire');
const sinon = require('sinon');
const assert = require('assert');
const ListNode = require('../extensions/list-node');
it.optional = require('../extensions/it-optional');

function convertListToArray(loopList, iterationsNumber, isReverseOrder) {
  const resultArray = [];

  for (let i = 0; i < iterationsNumber; i++) {
    resultArray.push(isReverseOrder ? loopList.prev() : loopList.next());
  }
  return resultArray;
}

describe('08-loop-list', () => {
  const sandbox = sinon.createSandbox();
  const ListNodeSpy = sandbox.spy(ListNode);
  const LoopList = proxyquire('../src/08-loop-list', {
    '../extensions/list-node': ListNodeSpy,
  });

  afterEach(() => {
    sandbox.restore();
  });

  it.optional('should correctly iterates in direct order', () => {
    assert.deepEqual(
      convertListToArray(new LoopList(...[3, 1, 2, 4, 5]), 11),
      [3, 1, 2, 4, 5, 3, 1, 2, 4, 5, 3],
      false,
    );
    assert.deepEqual(
      convertListToArray(new LoopList(...[3, 1, 2, 4, 5]), 4),
      [3, 1, 2, 4],
      false,
    );
  });

  it.optional('should correctly iterates in reverse order', () => {
    assert.deepEqual(
      convertListToArray(new LoopList(...[5, 6, 3, 7, 9]), 3),
      [9, 7, 3],
      true,
    );
    assert.deepEqual(
      convertListToArray(new LoopList(...[5, 6, 3, 7, 9]), 13),
      [9, 7, 3, 6, 5, 9, 7, 3, 6, 5, 9, 7, 3],
      true,
    );
  });

  it.optional('should throw error if no args are provided', () => {
    assert.throws(new LoopList());
  });

  it.optional('should use a ListNode within the constructor', () => {
    const list = new LoopList(...[5, 6, 3, 7, 9]);
    assert.strictEqual(list.prev(), 9);
    assert.strictEqual(ListNodeSpy.called, true);
    assert.strictEqual(ListNodeSpy.callCount, 5);
  });
});
