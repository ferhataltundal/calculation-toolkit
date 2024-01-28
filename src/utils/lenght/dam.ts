import { decameterRates } from "../../constants/length-rates";

export function dam(value: number, to: string) {
  const key = `dam_to_${to}`;
  const rate = decameterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
