/**
 * A function that calculates the surface area of a given cylinder.
 *
 * This function calculates the surface area of the given cylinder based on its base radius (r) and height (h) and returns the result.
 * The surface area of the cylinder consists of two base surfaces and the lateral surfaces.
 * The area of two base surfaces is the sum of two circle areas: 2 * π * r^2 (the area of the two bases).
 * The area of the lateral surface is equal to the area of a rectangle wrapped around the cylinder: 2 * π * r * h (the area of the rectangle).
 * The total surface area is the sum of these two areas.
 * The surface area of a cylinder cannot be calculated if the radius or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} r - The base radius of the cylinder.
 * @param {number} h - The height of the cylinder.
 * @return {number} The surface area of the cylinder.
 * @example
 * const surfaceArea = cylinderSurfaceArea(3, 4);
 * console.log(surfaceArea); // 131.95
 */
function cylinderSurfaceArea(r: number, h: number): number {
  if (r <= 0 || h <= 0) {
    throw new Error(
      "The surface area of a cylinder with a negative or zero radius or height cannot be calculated."
    );
  }
  const PI = Math.PI;
  return 2 * PI * r * r + 2 * PI * r * h;
}
export default cylinderSurfaceArea;
