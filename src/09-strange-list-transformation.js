/**
 * A list A is on input. Generate a new list B from A by following process:
 * Remove the first and last element from the list A and add them to the list B.
 * Then reverse the list A.
 * Repeat the process until the list A becomes empty.
 * Your task is to generate the list B without changing the input List A.
 *
 * Note:
 * - Size of A goes up to 10^6
 * - Keep the efficiency of your code in mind.
 * - Do not mutate the input A list.
 *
 * @param {Number[]} inputList
 * @return {Number[]} resultList
 *
 * @example
 * A = [1,2,3,4,5,6]
 * B = []
 *
 * A = [2,3,4,5] => [5,4,3,2]
 * B = [1,6]
 *
 * A = [4,3] => [3,4]
 * B = [1,6, 5,2]
 *
 * A = []
 * B = [1,6, 5,2, 3,4]
 * return B
 *
 */
function getTransformedList(/* inputList */) {
  throw new Error('Not implemented');
}

module.exports = getTransformedList;
