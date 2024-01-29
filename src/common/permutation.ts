/**
 * A function that calculates permutation based on given n and r values.
 *
 * This function calculates permutation based on the given n and r values and returns the result.
 * Permutation represents how many different ways you can select r ordered elements from a set of n elements.
 * The time complexity depends on the size of the permutation to be calculated.
 *
 * @param {number} n - Total number of elements.
 * @param {number} r - Number of elements to be selected.
 * @return {number} Permutation calculated based on n and r.
 * @example
 * const perm = permutation(5, 3);
 * console.log(perm); // 60
 */

function permutation(n: number, r: number): number {
  if (n < 0 || r < 0 || n < r) {
    throw new Error("Invalid values.");
  }

  let p = 1;
  for (let j = n; j > n - r; j--) {
    p *= j;
  }
  return p;
}

export default permutation;
