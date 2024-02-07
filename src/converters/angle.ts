import { radian } from "../utils/angle/radian";
import { degree } from "../utils/angle/degree";
import { grad } from "../utils/angle/grad";

export default function angleCalc(
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
      case "degree":
        return degree(value, to)[type];
      case "radian":
        return radian(value, to)[type];
      case "grad":
        return grad(value, to)[type];
      case "minute":
        return "";
      case "second":
        return "";
      case "gon":
        return "";
      case "sign":
        return "";
      case "mil":
        return "";
      case "revolution":
        return "";
      case "circle":
        return "";
      case "turn":
        return "";
      case "quadrant":
        return "";
      case "rightangle":
        return "";
      case "sextant":
        return "";
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
