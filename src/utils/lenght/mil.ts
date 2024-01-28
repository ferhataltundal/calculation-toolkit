import { milRates } from "../../constants/length-rates";

export function mil(value: number, to: string) {
  const key = `mil_to_${to}`;
  const rate = milRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
