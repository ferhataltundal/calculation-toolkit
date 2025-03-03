import type { OptionsType, LengthTypes } from "../types/type";
import { _length } from "../utils/lenght";

/**
 * A function to convert length units between various systems.
 * Converts a given input length from one unit to another.
 *
 * @param {Object} options - The options object containing the conversion parameters.
 * @param {string} options.from - The unit of the input length (e.g., "m", "km", "mil").
 * @param {string} options.to - The unit to convert the length to (e.g., "cm", "in", "ft").
 * @param {number} options.input - The input length value to be converted.
 * @param {string} [options.output="raw"] - The output format (e.g., "raw" or "result" for raw value, other formats can be defined).
 * @returns {number|Error|string} The converted length value, an error if invalid input is provided, or a string if a specific output format is requested.
 * @throws {SyntaxError} Throws an error if the unit is not found.
 * @throws {Error} Throws an error if an invalid input is provided.
 *
 * @example
 * const convertedLength = lengthConverter({ from: "m", to: "km", input: 1000 });
 * console.log(convertedLength); // 1
 */

export default function lengthConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<LengthTypes>): number | Error | string {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    if (from) {
      return _length(from, input, to)[output];
    } else {
      return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
