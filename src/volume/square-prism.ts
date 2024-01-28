/**
 * A function that calculates the volume of a given square prism (rectangular prism).
 *
 * This function calculates the volume of the given square prism based on the length of one of its edges (a) and its height (h) and returns the result.
 * The volume of the square prism is calculated using the formula a^2 * h (the square of the edge length multiplied by the height).
 * The volume of a square prism cannot be calculated if the edge length or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of one edge of the square prism.
 * @param {number} h - The height of the square prism.
 * @return {number} The volume of the square prism.
 * @example
 * const volume = squarePrismVolume(4, 5);
 * console.log(volume); // 80
 */
function squarePrismVolume(a: number, h: number): number {
  if (a <= 0 || h <= 0) {
    throw new Error(
      "The volume of a square prism with a negative or zero edge length or height cannot be calculated."
    );
  }
  return a * a * h;
}

export default squarePrismVolume;
