/**
 * A function that calculates the perimeter (circumference) of a given circle.
 *
 * This function calculates the perimeter of the given circle based on its radius (r) and returns the result.
 * The perimeter of the circle is calculated using the formula 2 * π (Pi) multiplied by r (twice the radius multiplied by π).
 * The perimeter of a circle cannot be calculated if the radius is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} r - The radius of the circle.
 * @return {number} The perimeter of the circle.
 * @example
 * const perimeter = circlePerimeter(3);
 * console.log(perimeter); // 18.850
 */
function circlePerimeter(r: number): number {
  if (r <= 0) {
    throw new Error(
      "The perimeter of a circle with a negative or zero radius cannot be calculated."
    );
  }
  return 2 * Math.PI * r;
}
export default circlePerimeter;
