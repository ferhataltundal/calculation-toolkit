import type { OutputType, WeightAndMassTypes } from "../../types/type";
import { weightMassConversionRates } from "../../constants/weight-rates";

export function _weight(
  unit: WeightAndMassTypes,
  value: number,
  to: WeightAndMassTypes
): OutputType {
  const rate = weightMassConversionRates[unit][to];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
