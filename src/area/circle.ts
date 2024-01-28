/**
 * A function that calculates the area of a given circle.
 *
 * This function calculates the area of the given circle based on its radius and returns the result.
 * The area calculation formula is: π * r^2 (the product of π (Pi) constant and the square of the radius).
 * @param {number} r - The radius of the circle.
 * @return {number} The area of the circle.
 * @example
 * const area = circleArea(5);
 * console.log(area); // 78.54
 */
function circleArea(r: number): number {
  if (r <= 0) {
    throw new Error(
      "The area of a circle with a negative or zero radius cannot be calculated."
    );
  }
  return Math.PI * r * r;
}

export default circleArea;
