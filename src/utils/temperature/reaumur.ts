import { reaumurRates } from "../../constants/temp-rates";

export function reaumur(value: number, to: string) {
  const key = `reaumur_to_${to}`;
  const rate = reaumurRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
