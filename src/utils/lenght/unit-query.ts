export function unitQuery(unit: string) {
  let selected = unit;
  if (unit === "µm" || unit === "micrometer" || unit === "um") {
    selected = "µm";
  } else if (unit === "nm" || unit === "nanometer") {
    selected = "nm";
  } else if (unit === "mm" || unit === "milimeter") {
    selected = "mm";
  } else if (unit === "cm" || unit === "centimeter") {
    selected = "cm";
  } else if (unit === "m" || unit === "meter") {
    selected = "m";
  } else if (unit === "dm" || unit === "desimeter") {
    selected = "dm";
  } else if (unit === "dam" || unit === "decameter") {
    selected = "dam";
  } else if (unit === "hm" || unit === "hectometer") {
    selected = "hm";
  } else if (unit === "in" || unit === "inch") {
    selected = "in";
  } else if (unit === "km" || unit === "kilometer") {
    selected = "km";
  } else if (unit === "mi" || unit === "mile") {
    selected = "mi";
  } else if (unit === "mil") {
    selected = "mil";
  } else if (unit === "yd" || unit === "yard" || unit === "yarda") {
    selected = "yd";
  } else if (unit === "ft" || unit === "feet" || unit === "foot") {
    selected = "ft";
  } else if (unit === "fm" || unit === "femtometer") {
    selected = "fm";
  } else if (unit === "am" || unit === "attometer") {
    selected = "am";
  } else if (unit === "ly" || unit === "lightyear") {
    selected = "ly";
  }
  return selected;
}
