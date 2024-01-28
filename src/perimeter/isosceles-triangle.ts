/**
 * A function that calculates the perimeter of a given isosceles triangle.
 *
 * This function calculates the perimeter of the given isosceles triangle based on the lengths of its two equal sides (a) and the length of the other side (b) and returns the result.
 * The perimeter of the isosceles triangle is calculated using the formula 2 * a + b (twice the length of the equal sides plus the length of the other side).
 * The perimeter of an isosceles triangle cannot be calculated if the side lengths are negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of the equal sides of the isosceles triangle.
 * @param {number} b - The length of the other side of the isosceles triangle.
 * @return {number} The perimeter of the isosceles triangle.
 * @example
 * const perimeter = isoscelesTrianglePerimeter(4, 5);
 * console.log(perimeter); // 13
 */
function isoscelesTrianglePerimeter(a: number, b: number): number {
  if (a <= 0 || b <= 0) {
    throw new Error(
      "The perimeter of an isosceles triangle with a negative or zero side length cannot be calculated."
    );
  }
  return 2 * a + b;
}
export default isoscelesTrianglePerimeter;
