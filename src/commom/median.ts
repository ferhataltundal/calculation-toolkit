/**
 * A function that calculates the median of an array.
 *
 * This function calculates and returns the median of the given array of numerical data.
 * The median is the middle value of the data when sorted, or the arithmetic average of the two middle values.
 * The function assumes that the data in the array is numerical.
 * If the array is empty or contains non-numeric values, an error is thrown.
 *
 * @param {number[]} n - The array of numerical data to calculate the median for.
 * @return {number} The median of the array data.
 * @throws {Error} An error is thrown if the array is empty or contains non-numeric values.
 * @example
 * const data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
 * const median = median(data);
 * console.log(median); // 4
 */
function median(n: Array<number>): number {
  if (n.length === 0 || !n.every((value) => typeof value === "number")) {
    throw new Error("The array is empty or contains non-numeric values.");
  }

  const sortedData = n.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);

  if (sortedData.length % 2 === 0) {
    return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
  } else {
    return sortedData[middleIndex];
  }
}

export default median;
