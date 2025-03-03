import type { OptionsType, AngleTypes } from "../types/type";
import { _angle } from "../utils/angle";

/**
 * A function to convert angle units between various systems.
 * Converts a given input angle from one unit to another.
 *
 * @param {Object} options - The options object containing the conversion parameters.
 * @param {string} options.from - The unit of the input angle (e.g., "degree", "radian").
 * @param {string} options.to - The unit to convert the angle to (e.g., "grad", "minute").
 * @param {number} options.input - The input angle value to be converted.
 * @param {string} [options.output="raw"] - The output format (e.g., "raw" or "result" for raw value, other formats can be defined).
 * @returns {number|Error} The converted angle value, or an error if invalid input is provided.
 * @throws {SyntaxError} Throws an error if the angle unit is not found.
 * @throws {Error} Throws an error if an invalid input is provided.
 *
 * @example
 * const convertedAngle = angleConverter({ from: "degree", to: "radian", input: 180 });
 * console.log(convertedAngle); // 3.14159 (approximate value for Pi in radians)
 */

export default function angleConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<AngleTypes>): number | Error | string {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    if (from) {
      return _angle(from, input, to)[output];
    } else {
      return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
