import { _weight } from "src/utils/weight";
import type { OptionsType, WeightAndMassTypes } from "../types/type";

/**
 * A function to convert weight and mass units between various systems.
 * Converts a given input weight or mass from one unit to another.
 *
 * @param {Object} options - The options object containing the conversion parameters.
 * @param {string} options.from - The unit of the input weight or mass (e.g., "kilogram", "pound", "gram").
 * @param {string} options.to - The unit to convert the weight or mass to (e.g., "ounce", "ton", "stone").
 * @param {number} options.input - The input weight or mass value to be converted.
 * @param {string} [options.output="raw"] - The output format (e.g., "raw" or "result" for raw value, other formats can be defined).
 * @returns {number|Error|string} The converted weight or mass value, an error if invalid input is provided, or a string if a specific output format is requested.
 * @throws {SyntaxError} Throws an error if the unit is not found.
 * @throws {Error} Throws an error if an invalid input is provided.
 *
 * @example
 * const convertedWeight = weightAndMassConverter({ from: "kilogram", to: "pound", input: 10 });
 * console.log(convertedWeight); // 22.0462 (approximate conversion)
 */

export default function weightAndMassConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<WeightAndMassTypes>): number | Error | string {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    if (from) {
      return _weight(from, input, to)[output];
    } else {
      return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
