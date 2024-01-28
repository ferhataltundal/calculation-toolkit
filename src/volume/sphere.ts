/**
 * A function that calculates the volume of a given sphere.
 *
 * This function calculates the volume of the given sphere based on its radius (r) and returns the result.
 * The volume of the sphere is calculated using the formula (4/3) * π * r^3 (the cube of the radius multiplied by four-thirds of π (Pi) constant).
 * The volume of a sphere cannot be calculated if the radius is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} r - The radius of the sphere.
 * @return {number} The volume of the sphere.
 * @example
 * const volume = sphereVolume(3);
 * console.log(volume); // 113.097
 */
function sphereVolume(r: number): number {
  if (r <= 0) {
    throw new Error(
      "The volume of a sphere with a negative or zero radius cannot be calculated."
    );
  }
  return (4 / 3) * Math.PI * (r * r * r);
}
export default sphereVolume;
