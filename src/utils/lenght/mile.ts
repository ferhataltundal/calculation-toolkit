import { mileRates } from "../../constants/length-rates";

export function mile(value: number, to: string) {
  const key = `mile_to_${to}`;
  const rate = mileRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
