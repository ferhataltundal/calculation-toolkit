/**
 * A function that calculates the volume of a given cylinder.
 *
 * This function calculates the volume of the given cylinder based on its base radius (r) and height (h) and returns the result.
 * The volume of the cylinder is calculated using the formula π * r^2 * h (where π (Pi) is the constant, r is the radius squared, and h is the height).
 * The volume of a cylinder cannot be calculated if the radius or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} r - The base radius of the cylinder.
 * @param {number} h - The height of the cylinder.
 * @return {number} The volume of the cylinder.
 * @example
 * const volume = cylinderVolume(3, 5);
 * console.log(volume); // 141.4
 */
function cylinderVolume(r: number, h: number): number {
  if (r <= 0 || h <= 0) {
    throw new Error(
      "The volume of a cylinder with a negative or zero radius or height cannot be calculated."
    );
  }
  return Math.PI * (r * r) * h;
}

export default cylinderVolume;
