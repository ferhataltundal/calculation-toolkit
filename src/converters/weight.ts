import type { OptionsType, WeightAndMassTypes } from "../types/type";

export default function weightAndMassConverter({
  from,
  to,
  input,
  output = "raw",
}: OptionsType<WeightAndMassTypes>) {
  if (!input) {
    return new Error("Invalid value!");
  }

  try {
    switch (from) {
      case "kg":
        return;
      case "g":
        return;
      case "mg":
        return;
      case "t-metric":
        return;
      case "lbs":
        return;
      case "oz":
        return;
      case "ct":
        return;
      case "t-us":
        return;
      case "t-uk":
        return;
      case "Eg":
        return;
      case "Pg":
        return;
      case "Tg":
        return;
      case "Gg":
        return;
      case "Mg":
        return;
      case "hg":
        return;
      case "dag":
        return;
      case "dg":
        return;
      case "cg":
        return;
      case "µm":
        return;
      case "ng":
        return;
      case "pg":
        return;
      case "fg":
        return;
      case "ag":
        return;
      case "dalton":
        return;
      case "kg-force-square-second/meter":
        return;
      case "kip":
        return;
      case "slug":
        return;
      case "p-force-square-second/foot":
        return;
      case "p-troy":
        return;
      case "p-apothecary":
        return;
      case "pdl":
        return;
      case "t-assay-us":
        return;
      case "t-assay-uk":
        return;
      case "kt-metric":
        return;
      case "cwt-metric":
        return;
      case "hundredweight-us":
        return;
      case "hundredweight-uk":
        return;
      case "qr-us":
        return;
      case "qr-uk":
        return;
      case "stone-us":
        return;
      case "stone-uk":
        return;
      case "t":
        return;
      case "pwt":
        return;
      case "s-apothecary":
        return;
      case "gr":
        return;
      case "gamma":
        return;
      case "talent-hebrew":
        return;
      case "mina-hebrew":
        return;
      case "shekel-hebrew":
        return;
      case "bekan-hebrew":
        return;
      case "gerah-hebrew":
        return;
      case "talent-greek":
        return;
      case "mina-greek":
        return;
      case "tetradrachma-greek":
        return;
      case "didrachma-greek":
        return;
      case "drachma-greek":
        return;
      case "denarius-roman":
        return;
      case "assarion-roman":
        return;
      case "quadrans-roman":
        return;
      case "lepton-roman":
        return;
      case "planck-mass":
        return;
      case "electron-mass":
        return;
      case "muon-mass":
        return;
      case "proton-mass":
        return;
      case "neutron-mass":
        return;
      case "deuteron-mass":
        return;
      case "earth-mass":
        return;
      case "sun-mass":
        return;
      default:
        return SyntaxError("Unit not found!");
    }
  } catch (e) {
    return new Error("Invalid value!");
  }
}
