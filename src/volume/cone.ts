/**
 * A function that calculates the volume of a given cone.
 *
 * This function calculates the volume of the given cone based on its base radius (r) and height (h) and returns the result.
 * The volume of the cone is calculated using the formula (1/3) * π * r^2 * h (where π (Pi) is the constant, r is the radius squared, and h is the height).
 * The volume of a cone cannot be calculated if the radius or height is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} r - The base radius of the cone.
 * @param {number} h - The height of the cone.
 * @return {number} The volume of the cone.
 * @example
 * const volume = coneVolume(3, 4);
 * console.log(volume); // 37.7
 */
function coneVolume(r: number, h: number): number {
  if (r <= 0 || h <= 0) {
    throw new Error(
      "The volume of a cone with a negative or zero radius or height cannot be calculated."
    );
  }
  return (1 / 3) * Math.PI * (r * r) * h;
}

export default coneVolume
