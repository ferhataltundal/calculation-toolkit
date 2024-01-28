import { micrometerRates } from "../../constants/length-rates.js";

export function µm(value: number, to: string) {
  const key = `µm_to_${to}`;
  const rate = micrometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
