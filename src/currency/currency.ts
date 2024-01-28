/**
 * Convert an amount to multiple currency units with a specified fixed decimal precision.
 *
 * This function takes an `amount` and a dictionary of `units` representing different currency units and their conversion rates.
 * It calculates the equivalent amount in each currency unit and rounds the results to a specified number of decimal places (default is 2).
 * The result is returned as an object where each key is a currency unit and its value is the converted amount.
 *
 * @param {number} amount - The amount to be converted.
 * @param {Object} units - A dictionary of currency units and their conversion rates.
 * @param {number} fixed - The number of decimal places to round the converted amounts (default is 2).
 * @returns {Object} An object containing the converted amounts for each currency unit.
 * @example
 * const amountToConvert = 100;
 * const currencyUnits = { USD: 1.18, EUR: 1.00, GBP: 0.85 };
 * const convertedAmounts = currency(amountToConvert, currencyUnits, 2);
 * console.log(convertedAmounts);
 * // { USD: 118.00, EUR: 100.00, GBP: 85.00 }
 */

function currency(
  amount: number,
  units: { [key: string]: number },
  fixed: number = 2
): { [key: string]: number } {
  return Object.keys(units).reduce((result, key) => {
    if (units[key]) {
      result[key] = Number((amount * units[key]!).toFixed(fixed));
    }
    return result;
  }, {} as { [key: string]: number });
}
export default currency;
