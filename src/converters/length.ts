import type { OptionsType, LengthTypes } from "../types/type";
import { m } from "../utils/lenght/m";
import { cm } from "../utils/lenght/cm";
import { mm } from "../utils/lenght/mm";
import { nm } from "../utils/lenght/nm";
import { µm } from "../utils/lenght/µm";
import { dm } from "../utils/lenght/dm";
import { dam } from "../utils/lenght/dam";
import { hm } from "../utils/lenght/hm";
import { _in } from "../utils/lenght/in";
import { km } from "../utils/lenght/km";
import { mi } from "../utils/lenght/mi";
import { mil } from "../utils/lenght/mil";
import { yd } from "../utils/lenght/yd";
import { ft } from "../utils/lenght/ft";
import { fm } from "../utils/lenght/fm";
import { am } from "../utils/lenght/am";
import { ly } from "../utils/lenght/ly";

export default function lengthConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<LengthTypes>) {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    switch (from) {
      case "µm":
        return µm(input, to)[output];
      case "nm":
        return nm(input, to)[output];
      case "mm":
        return mm(input, to)[output];
      case "cm":
        return cm(input, to)[output];
      case "m":
        return m(input, to)[output];
      case "dm":
        return dm(input, to)[output];
      case "dam":
        return dam(input, to)[output];
      case "hm":
        return hm(input, to)[output];
      case "in":
        return _in(input, to)[output];
      case "km":
        return km(input, to)[output];
      case "mi":
        return mi(input, to)[output];
      case "mil":
        return mil(input, to)[output];
      case "yd":
        return yd(input, to)[output];
      case "ft":
        return ft(input, to)[output];
      case "fm":
        return fm(input, to)[output];
      case "am":
        return am(input, to)[output];
      case "ly":
        return ly(input, to)[output];
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
