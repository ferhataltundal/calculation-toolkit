import { m } from "../utils/lenght/m.js";
import { cm } from "../utils/lenght/cm.js";
import { mm } from "../utils/lenght/mm.js";
import { nm } from "../utils/lenght/nm.js";
import { µm } from "../utils/lenght/µm.js";
import { dm } from "../utils/lenght/dm.js";
import { dam } from "../utils/lenght/dam.js";
import { hm } from "../utils/lenght/hm.js";
import { inch } from "../utils/lenght/in.js";
import { km } from "../utils/lenght/km.js";
import { mile } from "../utils/lenght/mile.js";
import { mil } from "../utils/lenght/mil.js";
import { yard } from "../utils/lenght/yard.js";
import { feet } from "../utils/lenght/feet.js";
import { fm } from "../utils/lenght/fm.js";
import { am } from "../utils/lenght/am.js";
import { ly } from "../utils/lenght/ly.js";

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
