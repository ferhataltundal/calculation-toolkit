import { hectometerRates } from "../../constants/length-rates";

export function hm(value: number, to: string) {
  const key = `hm_to_${to}`;
  const rate = hectometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
