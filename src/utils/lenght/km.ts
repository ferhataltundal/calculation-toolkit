import { kilometerRates } from "../../constants/length-rates";

export function km(value: number, to: string) {
  const key = `km_to_${to}`;
  const rate = kilometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
