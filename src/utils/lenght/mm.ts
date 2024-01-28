import { milimeterRates } from "../../constants/length-rates.js";

export function mm(value: number, to: string) {
  const key = `mm_to_${to}`;
  const rate = milimeterRates[key];
  if (rate !== undefined) {
    const result = value / rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
