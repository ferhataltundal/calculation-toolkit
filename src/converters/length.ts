import { m } from "../utils/lenght/m";
import { cm } from "../utils/lenght/cm";
import { mm } from "../utils/lenght/mm";
import { nm } from "../utils/lenght/nm";
import { µm } from "../utils/lenght/µm";
import { dm } from "../utils/lenght/dm";
import { dam } from "../utils/lenght/dam";
import { hm } from "../utils/lenght/hm";
import { inch } from "../utils/lenght/in";
import { km } from "../utils/lenght/km";
import { mile } from "../utils/lenght/mile";
import { mil } from "../utils/lenght/mil";
import { yard } from "../utils/lenght/yard";
import { feet } from "../utils/lenght/feet";
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
    switch (from) {
      case "µm":
        return µm(value, to)[type];
      case "nm":
        return nm(value, to)[type];
      case "mm":
        return mm(value, to)[type];
      case "cm":
        return cm(value, to)[type];
      case "m":
        return m(value, to)[type];
      case "dm":
        return dm(value, to)[type];
      case "dam":
        return dam(value, to)[type];
      case "hm":
        return hm(value, to)[type];
      case "in":
        return inch(value, to)[type];
      case "km":
        return km(value, to)[type];
      case "mile":
        return mile(value, to)[type];
      case "mil":
        return mil(value, to)[type];
      case "yard":
        return yard(value, to)[type];
      case "feet":
        return feet(value, to)[type];
      case "fm":
        return fm(value, to)[type];
      case "am":
        return am(value, to)[type];
      case "ly":
        return ly(value, to)[type];
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
