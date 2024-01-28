/**
 * Calculate the mode (most frequent value) of an array of numbers.
 *
 * This function takes an array of numbers and calculates the mode, which is the value that appears most frequently in the array.
 * If there are multiple modes (multiple values with the same highest frequency), all modes are returned.
 * If there is no mode (all values occur with the same frequency), an empty array is returned.
 *
 * @param {number[]} n - The array of numbers to find the mode from.
 * @returns {number[]} An array containing the mode(s) found in the input array.
 * @example
 * const numbers = [0, 0, 1, 2, 2, 3, 3];
 * const modes = mode(numbers);
 * console.log(modes); // [0, 2, 3] (0, 2, and 3 appear most frequently)
 */
function mode(n: Array<number>): number[] {
  const cMap = new Map<number, number>();
  let max = 0;
  let modes: number[] = [];
  for (const num of n) {
    const c = (cMap.get(num) || 0) + 1;
    cMap.set(num, c);
    if (c > max) {
      max = c;
      modes = [num];
    } else if (c === max) {
      modes.push(num);
    }
  }
  return modes;
}
export default mode;
