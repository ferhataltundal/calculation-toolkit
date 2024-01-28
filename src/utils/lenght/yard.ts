import { yardRates } from "../../constants/length-rates";

export function yard(value: number, to: string) {
  const key = `yard_to_${to}`;
  const rate = yardRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
