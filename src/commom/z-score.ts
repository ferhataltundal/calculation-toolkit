/**
 * Calculate the Z-score of a data point.
 *
 * @param {number} x - The data point value.
 * @param {number} m - The mean (average) of the dataset.
 * @param {number} s - The standard deviation of the dataset.
 * @returns {number} The Z-score of the data point.
 * Example usage:
    const dataPoint = 75;
    const dataMean = 60;
    const dataStdDev = 10;
    const zScoreValue = zScore(dataPoint, dataMean, dataStdDev);
    console.log(`Z-score: ${zScoreValue}`);
 *
 */

function zScore(x: number, m: number, s: number): number {
  return (x - m) / s;
}

export default zScore;
