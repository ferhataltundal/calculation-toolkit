/**
 * A function that samples values from an array with replacement.
 *
 * This function takes an array and the number of values to sample (with replacement),
 * and it returns an array of randomly selected values from the original array.
 *
 * @param {T[]} arr - The array to sample values from.
 * @param {number} size - The number of values to sample (with replacement).
 * @return {T[]} An array of randomly selected values.
 * @example
 * const values = [1, 2, 3, 4];
 * const sampledValues = sample(values, 2);
 * console.log(sampledValues); // An array of 2 random values, e.g., [2, 4]
 */
function sample<T>(arr: T[], size: number): T[] {
  const sampledValues: T[] = [];
  const len = arr.length;

  for (let i = 0; i < size; i++) {
    sampledValues.push(arr[Math.floor(Math.random() * len)]);
  }

  return sampledValues;
}

export default sample;
