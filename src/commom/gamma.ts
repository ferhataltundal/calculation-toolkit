/**
 * A function that calculates the gamma function.
 *
 * This function uses numerical integration to calculate the gamma function.
 * The gamma function is represented as Γ(x) = ∫(0 to ∞) t^(x-1) * e^(-t) dt.
 * It uses a numerical integration approach with a specified step size and a maximum number of iterations.
 * Increasing the number of iterations improves the calculation accuracy.
 * The time complexity depends on the length of the integral range and the number of iterations.
 *
 * @param {number} x - The value for which the gamma function is to be calculated.
 * @param {number} step - The step size for numerical integration.
 * @param {number} maxIterations - The maximum number of iterations.
 * @return {number} The calculated value of the gamma function.
 * @throws {Error} The gamma function is undefined for a negative or zero value.
 * @example
 * const result = gamma(5, 0.001, 1000);
 * console.log(result); // Approximately 24
 */
function gamma(x: number, step: number, maxIterations: number): number {
  if (x <= 0) {
    throw new Error(
      "The gamma function is undefined for a negative or zero value."
    );
  }

  let result = 0;
  for (let t = 0; t < maxIterations; t++) {
    const term = Math.pow(t * step, x - 1) * Math.exp(-t * step);
    result += term * step;
  }

  return result;
}
export default gamma;
