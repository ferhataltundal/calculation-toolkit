import { secondRates } from "../../constants/angle-rates";

export function second(value: number, to: string) {
  const key = `second_to_${to}`;
  const rate = secondRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
