/**
 * A function that calculates the perimeter of a given square.
 *
 * This function calculates the perimeter of the given square based on the length of one of its sides (a) and returns the result.
 * The perimeter of the square is calculated using the formula 4 * a (four times the length of one side).
 * The perimeter of a square cannot be calculated if the side length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of one side of the square.
 * @return {number} The perimeter of the square.
 * @example
 * const perimeter = squarePerimeter(4);
 * console.log(perimeter); // 16
 */
function squarePerimeter(a: number): number {
  if (a <= 0) {
    throw new Error(
      "The perimeter of a square with a negative or zero side length cannot be calculated."
    );
  }
  return 4 * a;
}
export default squarePerimeter;
