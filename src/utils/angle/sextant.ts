import { sextantRates } from "../../constants/angle-rates";

export function sextant(value: number, to: string) {
  const key = `sextant_to_${to}`;
  const rate = sextantRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
