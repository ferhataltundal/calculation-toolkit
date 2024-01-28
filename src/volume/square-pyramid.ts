/**
 * A function that calculates the volume of a given square pyramid.
 *
 * This function calculates the volume of the given square pyramid based on the length of one of its edges (a) and its height (h) and returns the result.
 * The volume of the square pyramid is calculated using the formula (1/3) * a^2 * h (the square of the edge length multiplied by one-third of the height).
 * The volume of a square pyramid cannot be calculated if the edge length or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of one edge of the square pyramid.
 * @param {number} h - The height of the square pyramid.
 * @return {number} The volume of the square pyramid.
 * @example
 * const volume = squarePyramidVolume(4, 6);
 * console.log(volume); // 32
 */
function squarePyramidVolume(a: number, h: number): number {
  if (a <= 0 || h <= 0) {
    throw new Error(
      "The volume of a square pyramid with a negative or zero edge length or height cannot be calculated."
    );
  }
  return (1 / 3) * (a * a) * h;
}
export default squarePyramidVolume
