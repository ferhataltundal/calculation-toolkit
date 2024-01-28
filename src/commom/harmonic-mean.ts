/**
 * A function that calculates the harmonic mean of a given array of numbers.
 *
 * This function calculates the harmonic mean of the given array of numbers and returns the result.
 * Harmonic mean is the average of the reciprocals of the numbers.
 * Harmonic mean cannot be calculated for arrays containing negative or zero values.
 * The time complexity is linear with respect to the length of the array, O(n).
 *
 * @param {Array<number>} n - The array of numbers for which the harmonic mean will be calculated.
 * @return {number} The harmonic mean of the array of numbers.
 * @example
 * const harmonicMean = harmonicMean([2, 4, 8]);
 * console.log(harmonicMean); // 4
 */
function harmonicMean(n: Array<number>): number {
  if (n.length === 0) {
    throw new Error("Harmonic mean cannot be calculated for an empty array.");
  }
  let reciprocalSum = 0;
  for (let j = 0; j < n.length; j++) {
    if (n[j] <= 0) {
      throw new Error(
        "Harmonic mean cannot be calculated for arrays containing negative or zero values."
      );
    }
    reciprocalSum += 1 / n[j];
  }
  return n.length / reciprocalSum;
}
export default harmonicMean;
