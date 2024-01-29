/**
 * A function that calculates combination based on given n and r values.
 *
 * This function calculates combination based on the given n and r values and returns the result.
 * Combination represents how many different ways you can select r unordered elements from a set of n elements.
 * The time complexity depends on the size of the combination to be calculated.
 *
 * @param {number} n - Total number of elements.
 * @param {number} r - Number of elements to be selected.
 * @return {number} Combination calculated based on n and r.
 * @example
 * const comb = combination(5, 3);
 * console.log(comb); // 10
 */
import factorial from "./factorial";
import permutation from "./permutation";

function combination(n: number, r: number): number {
  if (n < 0 || r < 0 || n < r) {
    throw new Error("Invalid values.");
  }
  return permutation(n, r) / factorial(r);
}

export default combination;
