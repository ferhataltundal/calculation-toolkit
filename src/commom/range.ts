/**
 * A generator function that creates an iterable range of numbers.
 *
 * This function generates an iterable range of numbers, similar to Python's `range` function.
 * It takes a starting number, an ending number, and an optional step value.
 * The generated range includes the starting number but excludes the ending number.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range (exclusive).
 * @param {number} step - The optional step value to increment the range (default is 1).
 * @return {Iterable<number>} An iterable range of numbers.
 * @example
 * const myRange = range(1, 5, 2);
 * for (const value of myRange) {
 *   console.log(value); // Outputs: 1, 3
 * }
 */
function range(start: number, end: number, step: number = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start + step;
        return { value: start, done: false };
      }
      return { value: end, done: true };
    },
  };
}
export default range;
