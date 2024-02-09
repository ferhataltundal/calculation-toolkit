import { quadrantRates } from "../../constants/angle-rates";

export function quadrant(value: number, to: string) {
  const key = `quadrant_to_${to}`;
  const rate = quadrantRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
