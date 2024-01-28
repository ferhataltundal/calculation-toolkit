/**
 * A function that calculates the perimeter of a given equilateral triangle.
 *
 * This function calculates the perimeter of the given equilateral triangle based on the length of one of its sides (a) and returns the result.
 * The perimeter of the equilateral triangle is calculated using the formula 3 * a (three times the length of one side).
 * The perimeter of an equilateral triangle cannot be calculated if the side length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of one side of the equilateral triangle.
 * @return {number} The perimeter of the equilateral triangle.
 * @example
 * const perimeter = equilateralTrianglePerimeter(5);
 * console.log(perimeter); // 15
 */
function equilateralTrianglePerimeter(a: number): number {
  if (a <= 0) {
    throw new Error(
      "The perimeter of an equilateral triangle with a negative or zero side length cannot be calculated."
    );
  }
  return 3 * a;
}
export default equilateralTrianglePerimeter;
