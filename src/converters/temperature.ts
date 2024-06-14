import type { OptionsType, TempTypes } from "../types/type";
import { triplePointOfWater } from "../utils/temperature/tpw";
import { celsius } from "../utils/temperature/celsius";
import { kelvin } from "../utils/temperature/kelvin";
import { fahrenheit } from "../utils/temperature/fahrenheit";
import { rankine } from "../utils/temperature/rankine";
import { reaumur } from "../utils/temperature/reaumur";

export default function temperatureConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<TempTypes>) {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    switch (from) {
      case "kelvin":
        return kelvin(input, to)[output];
      case "tpw":
        return triplePointOfWater(input, to)[output];
      case "celsius":
        return celsius(input, to)[output];
      case "fahrenheit":
        return fahrenheit(input, to)[output];
      case "rankine":
        return rankine(input, to)[output];
      case "reaumur":
        return reaumur(input, to)[output];
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
