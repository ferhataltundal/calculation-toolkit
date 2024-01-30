/**
 * A function that calculates the factorial of a given number.
 *
 * This function calculates the factorial of the given number and returns the result.
 * The factorial of a number is the product of all positive integers less than or equal to that number.
 * Factorial is defined only for non-negative integers. For non-integer values or negative numbers, the factorial is not defined.
 * The time complexity of this function is O(n), where n is the value of the input number.
 *
 * @param {number} n - The number for which the factorial will be calculated.
 * @return {number} The factorial of the given number.
 * @example
 * const result = factorial(5);
 * console.log(result); // 120
 */

function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Please enter a positive value.");
  }

  if (Math.floor(n) !== n) {
    throw new Error("Please enter an integer value.");
  }

  let acc = 1;
  for (let j = 2; j <= n; j++) {
    acc = acc * j;
  }
  return acc;
}

export default factorial;
