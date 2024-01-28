import { decimeterRates } from "../../constants/length-rates";

export function dm(value: number, to: string) {
  const key = `dm_to_${to}`;
  const rate = decimeterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
