/**
 * A function that calculates the volume of a given cuboid (rectangular prism).
 *
 * This function calculates the volume of the given cuboid based on its long side length (a), short side length (b), and height (h) and returns the result.
 * The volume of the cuboid is calculated using the formula a * b * h (the product of the long side length, short side length, and height).
 * The volume of a cuboid cannot be calculated if the long side length, short side length, or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The long side length of the cuboid.
 * @param {number} b - The short side length of the cuboid.
 * @param {number} h - The height of the cuboid.
 * @return {number} The volume of the cuboid.
 * @example
 * const volume = cuboidVolume(5, 4, 3);
 * console.log(volume); // 60
 */
function cuboidVolume(a: number, b: number, h: number): number {
  if (a <= 0 || b <= 0 || h <= 0) {
    throw new Error(
      "The volume of a cuboid with a negative or zero long side length, short side length, or height cannot be calculated."
    );
  }
  return a * b * h;
}

export default cuboidVolume;
