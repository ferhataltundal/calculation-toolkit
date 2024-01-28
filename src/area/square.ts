/**
 * A function that calculates the area of a given square.
 *
 * This function calculates the area of the given square based on its side length (a) and returns the result.
 * Squares have all four sides equal, and therefore, the area of a square is calculated using the formula a^2 (the square of the side length).
 * The area of a square cannot be calculated if the side length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The side length of the square.
 * @return {number} The area of the square.
 * @example
 * const area = squareArea(5);
 * console.log(area); // 25
 */
function squareArea(a: number): number {
  if (a <= 0) {
    throw new Error(
      "The area of a square with a negative or zero side length cannot be calculated."
    );
  }
  return a * a;
}
export default squareArea;
