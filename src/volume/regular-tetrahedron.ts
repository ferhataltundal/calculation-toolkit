/**
 * A function that calculates the volume of a given regular tetrahedron.
 *
 * This function calculates the volume of the given regular tetrahedron based on the length of one of its edges (a) and returns the result.
 * The volume of the regular tetrahedron is calculated using the formula (1/12) * √2 * a^3 (the cube of the edge length multiplied by the square root of 2 divided by twelve).
 * The volume of a regular tetrahedron cannot be calculated if the edge length is negative or zero.
 * The time complexity is constant, O(1).
 *
 * @param {number} a - The length of one edge of the regular tetrahedron.
 * @return {number} The volume of the regular tetrahedron.
 * @example
 * const volume = regularTetrahedronVolume(4);
 * console.log(volume); // 4.472
 */
function regularTetrahedronVolume(a: number): number {
  if (a <= 0) {
    throw new Error(
      "The volume of a regular tetrahedron with a negative or zero edge length cannot be calculated."
    );
  }
  return (1 / 12) * Math.sqrt(2) * (a * a * a);
}
export default regularTetrahedronVolume;
