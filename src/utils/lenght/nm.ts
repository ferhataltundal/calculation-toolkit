import { nanometerRates } from "../../constants/length-rates.js";

export function nm(value: number, to: string) {
  const key = `nm_to_${to}`;
  const rate = nanometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
