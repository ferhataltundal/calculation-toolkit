/**
 * A function that calculates the volume of a given cube.
 *
 * This function calculates the volume of the given cube based on its edge length (a) and returns the result.
 * The volume of the cube is calculated using the formula a^3 (the cube of the edge length).
 * The volume of a cube cannot be calculated if the edge length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The edge length of the cube.
 * @return {number} The volume of the cube.
 * @example
 * const volume = cubeVolume(4);
 * console.log(volume); // 64
 */
function cubeVolume(a: number): number {
  if (a <= 0) {
    throw new Error(
      "The volume of a cube with a negative or zero edge length cannot be calculated."
    );
  }
  return a * a * a;
}

export default cubeVolume;
