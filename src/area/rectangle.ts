/**
 * A function that calculates the area of a given rectangle.
 *
 * This function calculates the area of the given rectangle based on its long side length (a) and short side length (b) and returns the result.
 * Rectangles have two opposite sides equal, and therefore, the area of a rectangle is calculated using the formula a * b (the product of the long side length and the short side length).
 * The area of a rectangle cannot be calculated if the long side length or short side length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The long side length of the rectangle.
 * @param {number} b - The short side length of the rectangle.
 * @return {number} The area of the rectangle.
 * @example
 * const area = rectangleArea(5, 4);
 * console.log(area); // 20
 */
function rectangleArea(a: number, b: number): number {
  if (a <= 0 || b <= 0) {
    throw new Error(
      "The area of a rectangle with a negative or zero long side length or short side length cannot be calculated."
    );
  }
  return a * b;
}
export default rectangleArea;
