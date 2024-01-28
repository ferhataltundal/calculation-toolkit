/**
 * A function that calculates the surface area of a given cone.
 *
 * This function calculates the surface area of the given cone based on its base radius (r) and height (h) and returns the result.
 * The surface area of the cone is calculated using the formula π (Pi) constant, the radius, and the square root of the sum of the radius squared and the height squared.
 * The surface area of a cone cannot be calculated if the radius or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} r - The base radius of the cone.
 * @param {number} h - The height of the cone.
 * @return {number} The surface area of the cone.
 * @example
 * const surfaceArea = coneSurfaceArea(3, 4);
 * console.log(surfaceArea); // 75.4
 */
function coneSurfaceArea(r: number, h: number): number {
  if (r <= 0 || h <= 0) {
    throw new Error(
      "The surface area of a cone with a negative or zero radius or height cannot be calculated."
    );
  }
  return Math.PI * r * (r + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)));
}

export default coneSurfaceArea
