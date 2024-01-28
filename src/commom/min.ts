/**
 * A function that finds the minimum value in a given array.
 *
 * This function finds the minimum value in the given array and returns it.
 * The time complexity is linear with respect to the length of the array, O(n).
 *
 * @param {Array<number>} n - The array in which the minimum value will be found.
 * @return {number} The minimum value in the array.
 * @example
 * const smallest = min([5, 2, 9, 1, 8]);
 * console.log(smallest); // 1
 */
function min(n: Array<number>): number {
  if (n.length === 0) {
    throw new Error("Please enter at least one value.");
  }

  let v = n[0];
  for (let j = 1; j < n.length; j++) {
    if (n[j] < v) {
      v = n[j];
    }
  }

  return v;
}

export default min;
