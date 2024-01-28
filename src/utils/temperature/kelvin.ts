import { kelvinRates } from "../../constants/temp-rates";

export function kelvin(value: number, to: string) {
  const key = `kelvin_to_${to}`;
  const rate = kelvinRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
