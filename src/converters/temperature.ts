import { triplePointOfWater } from "../utils/temperature/tpw";
import { celsius } from "../utils/temperature/celsius";
import { kelvin } from "../utils/temperature/kelvin";
import { fahrenheit } from "../utils/temperature/fahrenheit";
import { rankine } from "../utils/temperature/rankie";
import { reaumur } from "../utils/temperature/reaumur";

export default function tempCalc(
  input: string,
  type: "result" | "raw" = "raw"
) {
  const parts = input.split(" ");
  const value = parseFloat(parts[0]);
  const from = parts[1];
  const to = parts[3];

  if (!value && value !== 0) {
    return new Error("Invalid value!");
  }
  try {
    switch (from) {
      case "kelvin":
        return kelvin(value, to)[type];
      case "tpw":
        return triplePointOfWater(value, to)[type];
      case "celsius":
        return celsius(value, to)[type];
      case "fahrenheit":
        return fahrenheit(value, to)[type];
      case "rankine":
        return rankine(value, to)[type];
      case "reaumur":
        return reaumur(value, to)[type];
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
