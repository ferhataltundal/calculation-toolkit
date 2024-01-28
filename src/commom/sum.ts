/**
 * A function that calculates the sum of numbers in a given array.
 *
 * This function adds up all the numbers in the given array and returns the result.
 * The time complexity is linear with respect to the length of the array, O(n).
 *
 * @param {Array<number>} n - The array containing numbers to be summed.
 * @return {number} The sum of all numbers in the array.
 * @example
 * const total = sum([1, 2, 3, 4, 5]);
 * console.log(total); // 15
 */
function sum(n: Array<number>): number {
  let v = 0;
  for (let j = 0; j < n.length; j++) {
    v += n[j];
  }
  return v;
}
export default sum;
