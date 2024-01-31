import { rankineRates } from "../../constants/temp-rates";

export function rankine(value: number, to: string) {
  const key = `rankine_to_${to}`;
  const rate = rankineRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
