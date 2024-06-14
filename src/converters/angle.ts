import type { OptionsType, AngleTypes } from "../types/type";
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

export default function angleConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<AngleTypes>) {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    switch (from) {
      case "degree":
        return degree(input, to)[output];
      case "radian":
        return radian(input, to)[output];
      case "grad":
        return grad(input, to)[output];
      case "minute":
        return minute(input, to)[output];
      case "second":
        return second(input, to)[output];
      case "gon":
        return gon(input, to)[output];
      case "sign":
        return sign(input, to)[output];
      case "mil":
        return mil(input, to)[output];
      case "revolution":
        return revolution(input, to)[output];
      case "circle":
        return circle(input, to)[output];
      case "turn":
        return turn(input, to)[output];
      case "quadrant":
        return quadrant(input, to)[output];
      case "rightangle":
        return rightangle(input, to)[output];
      case "sextant":
        return sextant(input, to)[output];
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
