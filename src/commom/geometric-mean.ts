/**
 * A function that calculates the geometric mean of a given array of numbers.
 *
 * This function calculates the geometric mean of the given array of numbers and returns the result.
 * Geometric mean is the nth root of the product of all numbers in the array, where n is the number of elements.
 * Geometric mean cannot be calculated for arrays containing negative or zero values.
 * The time complexity is linear with respect to the length of the array, O(n).
 *
 * @param {Array<number>} n - The array of numbers for which the geometric mean will be calculated.
 * @return {number} The geometric mean of the array of numbers.
 * @example
 * const geometricMean = geometricMean([2, 4, 8]);
 * console.log(geometricMean); // 4
 */
function geometricMean(n: Array<number>): number {
  if (n.length === 0) {
    throw new Error("Geometric mean cannot be calculated for an empty array.");
  }
  let v = 1;
  for (let j = 0; j < n.length; j++) {
    if (n[j] <= 0) {
      throw new Error(
        "Geometric mean cannot be calculated for arrays containing negative or zero values."
      );
    }
    v *= n[j];
  }
  return Math.pow(v, 1 / n.length);
}

export default geometricMean;
