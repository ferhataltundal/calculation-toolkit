/**
 * Combine means of two datasets weighted by their sizes.
 *
 * This function takes the means and sizes of two datasets and combines them to compute the weighted average mean.
 * It is useful when you want to calculate the overall mean of two datasets while taking their sample sizes into account.
 *
 * @param {number} m1 - The mean of the first dataset.
 * @param {number} s1 - The size (number of samples) of the first dataset.
 * @param {number} m2 - The mean of the second dataset.
 * @param {number} s2 - The size (number of samples) of the second dataset.
 * @returns {number} The combined mean of the two datasets.
 *
 *  Example usage:
    const mean1 = 45;
    const size1 = 30;
    const mean2 = 60;
    const size2 = 20;
    const combinedMean = combineMean(mean1, size1, mean2, size2);
    console.log(`Combined Mean: ${combinedMean}`);
 *
 */
function combineMean(m1: number, s1: number, m2: number, s2: number): number {
  return (m1 * s1 + m2 * s2) / (s1 + s2);
}
export default combineMean;
