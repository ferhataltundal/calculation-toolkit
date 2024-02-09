import { turnRates } from "../../constants/angle-rates";

export function turn(value: number, to: string) {
  const key = `turn_to_${to}`;
  const rate = turnRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
