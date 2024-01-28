/**
 * A function that shuffles an array of numbers randomly.
 *
 * This function takes an array of numbers and shuffles it randomly, returning the shuffled array.
 *
 * @param {number[]} n - The array to be shuffled.
 * @return {number[]} The shuffled array.
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * const shuffledNumbers = shuffle(numbers);
 * console.log(shuffledNumbers); // An example shuffled array
 */
function shuffle(n: Array<number>): number[] {
  const shuffled = n.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
export default shuffle;
