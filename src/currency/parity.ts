/**
 * Calculate the parity (ratio) of two numbers with a specified fixed decimal precision.
 *
 * This function takes two numbers, `unit1` and `unit2`, and calculates their parity (ratio) with a specified fixed number of decimal places.
 * The result is rounded to the specified number of decimal places (default is 4).
 *
 * @param {number} unit1 - The numerator of the ratio.
 * @param {number} unit2 - The denominator of the ratio.
 * @param {number} fixed - The number of decimal places to round the result (default is 4).
 * @returns {number} The parity (ratio) of `unit1` and `unit2` rounded to the specified number of decimal places.
 * @example
 * const numerator = 7;
 * const denominator = 3;
 * const result = parity(numerator, denominator, 2);
 * console.log(result); // 2.33 (7 divided by 3 with 2 decimal places)
 */

function parity(unit1: number, unit2: number, fixed: number = 4): number {
  if (unit1 <= 0 || unit2 <= 0) {
    return 0;
  }
  return Number((unit1 / unit2).toFixed(fixed));
}
export default parity;
