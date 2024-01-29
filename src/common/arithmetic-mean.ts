/**
 * A function that calculates the arithmetic mean of a given array of numbers.
 *
 * This function calculates the arithmetic mean of the given array of numbers and returns the result.
 * The arithmetic mean is obtained by dividing the sum of all numbers in the array by the number of elements.
 * The time complexity is linear with respect to the length of the array, O(n).
 *
 * @param {Array<number>} n - The array of numbers for which the arithmetic mean will be calculated.
 * @return {number} The arithmetic mean of the array of numbers.
 * @example
 * const average = arithmeticMean([1, 2, 3, 4, 5]);
 * console.log(average); // 3
 */
import sum from "./sum";

function arithmeticMean(n: Array<number>): number {
  if (n.length === 0) {
    throw new Error("Arithmetic mean cannot be calculated for an empty array.");
  }
  return sum(n) / n.length;
}
export default arithmeticMean;
