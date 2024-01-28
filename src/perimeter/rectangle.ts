/**
 * A function that calculates the perimeter of a given rectangle.
 *
 * This function calculates the perimeter of the given rectangle based on the lengths of its two sides (a and b) and returns the result.
 * The perimeter of the rectangle is calculated using the formula 2 * (a + b) (twice the sum of the two sides).
 * The perimeter of a rectangle cannot be calculated if either side length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of the first side of the rectangle.
 * @param {number} b - The length of the second side of the rectangle.
 * @return {number} The perimeter of the rectangle.
 * @example
 * const perimeter = rectanglePerimeter(4, 6);
 * console.log(perimeter); // 20
 */
function rectanglePerimeter(a: number, b: number): number {
  if (a <= 0 || b <= 0) {
    throw new Error(
      "The perimeter of a rectangle with a negative or zero side length cannot be calculated."
    );
  }
  return 2 * (a + b);
}

export default rectanglePerimeter;
