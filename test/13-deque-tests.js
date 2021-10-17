const assert = require('assert');
const sinon = require('sinon');
const Deque = require('../src/13-deque');
it.optional = require('../extensions/it-optional');

describe('13-deque', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it.optional('should create a Deque with the methods', () => {
    const deque = new Deque();
    assert.doesNotThrow(() => deque.addFront(5));
    assert.doesNotThrow(() => deque.addFront(6));
    assert.doesNotThrow(() => deque.addFront(7));
    assert.strictEqual(deque.peekFront(), 7);
    assert.strictEqual(deque.peekBack(), 5);
    assert.doesNotThrow(() => deque.addBack(6));
    assert.strictEqual(deque.peekBack(), 6);
    assert.strictEqual(deque.removeBack(), 6);
    assert.strictEqual(deque.removeFront(), 7);
    assert.strictEqual(deque.peekBack(), 5);
    assert.strictEqual(deque.peekFront(), 6);
  });

  it.optional('should not call built-in methods push/pop', () => {
    const pushStub = sandbox.stub(Array.prototype, 'push');
    const popStub = sandbox.stub(Array.prototype, 'pop');

    const deque = new Deque();
    assert.doesNotThrow(() => deque.addBack(6));
    assert.strictEqual(deque.peekBack(), 6);
    assert.strictEqual(deque.removeBack(), 6);

    assert.strictEqual(pushStub.called, false);
    assert.strictEqual(popStub.called, false);
  });

  it.optional('should not call built-in methods unshift/shift', () => {
    const unshiftStub = sandbox.stub(Array.prototype, 'unshift');
    const shiftStub = sandbox.stub(Array.prototype, 'shift');

    const deque = new Deque();
    assert.doesNotThrow(() => deque.addFront(5));
    assert.doesNotThrow(() => deque.addFront(6));
    assert.doesNotThrow(() => deque.addFront(7));
    assert.strictEqual(deque.peekFront(), 7);
    assert.strictEqual(deque.removeFront(), 7);

    assert.strictEqual(unshiftStub.called, false);
    assert.strictEqual(shiftStub.called, false);
  });
});
