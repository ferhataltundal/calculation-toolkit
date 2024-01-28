/**
 * A function that calculates the perimeter of a given non-isosceles triangle.
 *
 * This function calculates the perimeter of the given non-isosceles triangle based on the lengths of its three sides (a, b, and c) and returns the result.
 * The perimeter of the triangle is calculated using the formula a + b + c (the sum of the lengths of the three sides).
 * The perimeter of a triangle cannot be calculated if any side length is negative or zero, or if the sum of the lengths of any two sides is less than or equal to the length of the third side.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of the first side of the triangle.
 * @param {number} b - The length of the second side of the triangle.
 * @param {number} c - The length of the third side of the triangle.
 * @return {number} The perimeter of the triangle.
 * @example
 * const perimeter = nonIsoscelesTrianglePerimeter(4, 5, 6);
 * console.log(perimeter); // 15
 */
function nonIsoscelesTrianglePerimeter(
  a: number,
  b: number,
  c: number
): number {
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    throw new Error(
      "Invalid triangle side lengths or the sum of side lengths."
    );
  }
  return a + b + c;
}
export default nonIsoscelesTrianglePerimeter;
