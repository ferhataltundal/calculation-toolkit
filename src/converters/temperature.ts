import type { OptionsType, TempTypes } from "../types/type";
import { _temperature } from "../utils/temperature";

/**
 * A function to convert temperature units between various systems.
 * Converts a given input temperature from one unit to another.
 * The time complexity is linear with respect to the length of the array, O(n).
 *
 * @param {Object} options - The options object containing the conversion parameters.
 * @param {string} options.from - The unit of the input temperature (e.g., "Celsius", "Fahrenheit").
 * @param {string} options.to - The unit to convert the temperature to (e.g., "Kelvin", "Fahrenheit").
 * @param {number} options.input - The input temperature value to be converted.
 * @param {string} [options.output="raw"] - The output format (e.g., "raw" or "result" for raw value, other formats can be defined).
 * @returns {number|Error} The converted temperature value, or an error if invalid input is provided.
 * @throws {SyntaxError} Throws an error if the unit is not found.
 * @throws {Error} Throws an error if an invalid input is provided.
 *
 * @example
 * const convertedTemp = temperatureConverter({ from: "Celsius", to: "Fahrenheit", input: 25 });
 * console.log(convertedTemp); // 77
 */

export default function temperatureConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<TempTypes>): number | Error | string  {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    if (from) {
      return _temperature(from, input, to)[output];
    } else {
      return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}