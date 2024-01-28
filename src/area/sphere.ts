/**
 * A function that calculates the surface area of a given sphere.
 *
 * This function calculates the surface area of the given sphere based on its radius (r) and returns the result.
 * The surface area of the sphere is calculated using the formula 4 * π * r^2 (four times the product of π (Pi) constant and the square of the radius).
 * The surface area of a sphere cannot be calculated if the radius is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} r - The radius of the sphere.
 * @return {number} The surface area of the sphere.
 * @example
 * const surfaceArea = sphereSurfaceArea(3);
 * console.log(surfaceArea); // 113.1
 */
function sphereSurfaceArea(r: number): number {
  if (r <= 0) {
    throw new Error(
      "The surface area of a sphere with a negative or zero radius cannot be calculated."
    );
  }
  return 4 * Math.PI * r * r;
}

export default sphereSurfaceArea;
