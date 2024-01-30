/**
 * Calculates and returns the z-score of a value in a given data set.
 *
 * The z-score represents how many standard deviations a value (x) is from the mean (m) of its data set.
 * This function calculates the z-score by subtracting the mean (m) from the value (x) and then dividing 
 * the result by the standard deviation (s). It's a useful measure in statistics to understand how far 
 * and in what direction a value deviates from the mean.
 * 
 * @param {number} x - The value to calculate the z-score for.
 * @param {number} m - The mean of the data set.
 * @param {number} s - The standard deviation of the data set.
 * @return {number} The z-score of the value.
 * Example usage:
    const dataPoint = 75;
    const dataMean = 60;
    const dataStdDev = 10;
    const zScoreValue = zScore(dataPoint, dataMean, dataStdDev);
    console.log(`Z-score: ${zScoreValue}`);
 */

function zScore(x: number, m: number, s: number): number {
  return (x - m) / s;
}

export default zScore;
