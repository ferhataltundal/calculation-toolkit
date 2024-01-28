/**
 * A function that calculates the surface area of a given cube.
 *
 * This function calculates the surface area of the given cube based on its edge length (a) and returns the result.
 * The surface area of the cube is calculated using the formula 6 * a^2 (the product of six and the square of the edge length).
 * The surface area of a cube cannot be calculated if the edge length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The edge length of the cube.
 * @return {number} The surface area of the cube.
 * @example
 * const surfaceArea = cubeSurfaceArea(4);
 * console.log(surfaceArea); // 96
 */
function cubeSurfaceArea(a: number): number {
  if (a <= 0) {
    throw new Error(
      "The surface area of a cube with a negative or zero edge length cannot be calculated."
    );
  }
  return 6 * a * a;
}
export default cubeSurfaceArea;
