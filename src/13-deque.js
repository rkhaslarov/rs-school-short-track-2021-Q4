/**
 * Implement the deque with a given interface via array.
 *
 * @example
 * const deque = new Deque();
 *
 * deque.addFront(1); // adds the element to the deque
 * deque.peekFront(); // returns the peek, but doesn't delete it, returns 1
 * deque.removeFront(); // returns the top element from deque and deletes it, returns 1
 * deque.removeFront(); // undefined
 *
 */
class Deque {
  addFront(/* element */) {
    throw new Error('Not implemented');
  }

  removeFront() {
    throw new Error('Not implemented');
  }

  peekFront() {
    throw new Error('Not implemented');
  }

  addBack(/* element */) {
    throw new Error('Not implemented');
  }

  removeBack() {
    throw new Error('Not implemented');
  }

  peekBack() {
    throw new Error('Not implemented');
  }
}

module.exports = Deque;
