// TODO: Uncomment the line below
// const ListNode = require('../extensions/list-node');
/**
 * Create a Loop List.
 * A Loop list is of finite size,
 * and can infinitely be requested for its previous and next elements,
 * as it acts like it is joined at the ends and loops around.
 *
 * For example, imagine a LoopList of [1, 2, 3, 4].
 * Five calls of next() in a row should return 1, 2, 3, 4 and then 1 again.
 * At this point, five calls of prev() in a row should return 4, 3, 2, 1 and then 4 again.
 * Your LoopList is created by passing a parameter in a constructor, e.g. `new LoopList(1, 2, 3).`
 * Your list constructor/init code should throw an Exception if nothing is passed in.
 *
 * IMPORTANT! Use ListNode from extensions folder.
 *
 * @param {Array} numbers
 * @return {LoopList}
 *
 * @example
 * For new LoopList(3, 1, 2, 3) and 6 calls of next()
 * the output should be 3, 1, 2, 3, 3, 1.
 *
 * For 6 calls of prev():
 *
 * const list = new LoopList(3, 1, 2, 3)
 * for(let i = 0; i < 6; i++) {
 *    list.prev();
 * }
 *
 * Results in: 3, 2, 1, 3, 3, 2
 */

class LoopList {
  constructor(/* numbers */) {
    throw new Error('Not implemented');
  }

  prev() {
    throw new Error('Not implemented');
  }

  next() {
    throw new Error('Not implemented');
  }
}

module.exports = LoopList;
