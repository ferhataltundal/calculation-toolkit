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

export default function lengthCalc(
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
    if (from === "µm" || from === "micrometer" || from === "um") {
      return µm(value, to)[type];
    } else if (from === "nm" || from === "nanometer") {
      return nm(value, to)[type];
    } else if (from === "mm" || from === "milimeter") {
      return mm(value, to)[type];
    } else if (from === "cm" || from === "centimeter") {
      return cm(value, to)[type];
    } else if (from === "m" || from === "meter") {
      return m(value, to)[type];
    } else if (from === "dm" || from === "desimeter") {
      return dm(value, to)[type];
    } else if (from === "dam" || from === "decameter") {
      return dam(value, to)[type];
    } else if (from === "hm" || from === "hectometer") {
      return hm(value, to)[type];
    } else if (from === "in" || from === "inch") {
      return _in(value, to)[type];
    } else if (from === "km" || from === "kilometer") {
      return km(value, to)[type];
    } else if (from === "mi" || from === "mile") {
      return mi(value, to)[type];
    } else if (from === "mil") {
      return mil(value, to)[type];
    } else if (from === "yd" || from === "yard" || from === "yarda") {
      return yd(value, to)[type];
    } else if (from === "ft" || from === "feet" || from === "foot") {
      return yd(value, to)[type];
    } else if (from === "fm" || from === "femtometer") {
      return fm(value, to)[type];
    } else if (from === "am" || from === "attometer") {
      return am(value, to)[type];
    } else if (from === "ly" || from === "lightyear") {
      return ly(value, to)[type];
    } else {
      return SyntaxError("Unit not found!");
    }
    /*switch (from) {
      case "µm" ?? "micrometer" ?? "um":
        return µm(value, to)[type];
      case "nm" || "nanometer":
        return nm(value, to)[type];
      case "mm" || "milimeter":
        return mm(value, to)[type];
      case "cm" || "centimeter":
        return cm(value, to)[type];
      case "m" || "meter":
        return m(value, to)[type];
      case "dm" || "desimeter":
        return dm(value, to)[type];
      case "dam" || "decameter":
        return dam(value, to)[type];
      case "hm" || "hectometer":
        return hm(value, to)[type];
      case "in" || "inch":
        return _in(value, to)[type];
      case "km" || "kilometer":
        return km(value, to)[type];
      case "mi" || "mile":
        return mi(value, to)[type];
      case "mil":
        return mil(value, to)[type];
      case "yd" || "yard" || "yarda":
        return yd(value, to)[type];
      case "ft" || "feet" || "foot":
        return ft(value, to)[type];
      case "fm" || "femtometer":
        return fm(value, to)[type];
      case "am" || "attometer":
        return am(value, to)[type];
      case "ly" || "lightyear":
        return ly(value, to)[type];
      default:
        return SyntaxError("Unit not found!");
    }*/
  } catch (e) {
    return new Error("Invalid value!");
  }
}
