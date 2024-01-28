/**
 * A function that calculates the volume of a given rectangular prism (rectangular parallelepiped).
 *
 * This function calculates the volume of the given rectangular prism based on its long side length (a), short side length (b), and height (h) and returns the result.
 * The volume of the rectangular prism is calculated using the formula a * b * h (the product of the long side length, short side length, and height).
 * The volume of a rectangular prism cannot be calculated if the long side length, short side length, or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The long side length of the rectangular prism.
 * @param {number} b - The short side length of the rectangular prism.
 * @param {number} h - The height of the rectangular prism.
 * @return {number} The volume of the rectangular prism.
 * @example
 * const volume = rectangularPrismVolume(5, 4, 3);
 * console.log(volume); // 60
 */
function rectangularPrismVolume(a: number, b: number, h: number): number {
  if (a <= 0 || b <= 0 || h <= 0) {
    throw new Error(
      "The volume of a rectangular prism with a negative or zero long side length, short side length, or height cannot be calculated."
    );
  }
  return a * b * h;
}
export default rectangularPrismVolume;
