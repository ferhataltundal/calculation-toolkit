import { radian } from "../utils/angle/radian";
import { degree } from "../utils/angle/degree";
import { grad } from "../utils/angle/grad";
import { circle } from "../utils/angle/circle";
import { gon } from "../utils/angle/gon";
import { minute } from "../utils/angle/minute";
import { quadrant } from "../utils/angle/quadrant";
import { revolution } from "../utils/angle/revolution";
import { rightangle } from "../utils/angle/rightangle";
import { second } from "../utils/angle/second";
import { sextant } from "../utils/angle/sextant";
import { turn } from "../utils/angle/turn";
import { mil } from "../utils/angle/mil";
import { sign } from "../utils/angle/sign";

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
        return minute(value, to)[type];
      case "second":
        return second(value, to)[type];
      case "gon":
        return gon(value, to)[type];
      case "sign":
        return sign(value, to)[type];
      case "mil":
        return mil(value, to)[type];
      case "revolution":
        return revolution(value, to)[type];
      case "circle":
        return circle(value, to)[type];
      case "turn":
        return turn(value, to)[type];
      case "quadrant":
        return quadrant(value, to)[type];
      case "rightangle":
        return rightangle(value, to)[type];
      case "sextant":
        return sextant(value, to)[type];
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
