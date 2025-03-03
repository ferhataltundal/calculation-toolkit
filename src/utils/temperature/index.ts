import type { TempTypes, OutputType } from "../../types/type";
import { temperatureConversionRates } from "../../constants/temp-rates";

export function _temperature(
  unit: TempTypes,
  value: number,
  to: TempTypes
): OutputType {
  const rate = temperatureConversionRates[unit][to];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
