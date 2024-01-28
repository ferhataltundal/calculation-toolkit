import { feetRates } from "../../constants/length-rates";

export function feet(value: number, to: string) {
  const key = `feet_to_${to}`;
  const rate = feetRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
