/**
 * A function that calculates the area of a given triangle.
 *
 * This function calculates the area of the given triangle based on its base length (b) and height (h) and returns the result.
 * The area of the triangle is calculated using the formula (1/2) * b * h (half of the product of the base length and height).
 * The area of a triangle cannot be calculated if the base length or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} b - The base length of the triangle.
 * @param {number} h - The height of the triangle.
 * @return {number} The area of the triangle.
 * @example
 * const area = triangleArea(5, 4);
 * console.log(area); // 10
 */
function triangleArea(b: number, h: number): number {
  if (b <= 0 || h <= 0) {
    throw new Error(
      "The area of a triangle with a negative or zero base length or height cannot be calculated."
    );
  }
  return (1 / 2) * b * h;
}
export default triangleArea;
