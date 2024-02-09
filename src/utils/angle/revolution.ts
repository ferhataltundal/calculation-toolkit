import { revolutionRates } from "../../constants/angle-rates";

export function revolution(value: number, to: string) {
  const key = `revolution_to_${to}`;
  const rate = revolutionRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
