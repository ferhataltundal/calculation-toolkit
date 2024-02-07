import { degreeRates } from "../../constants/angle-rates";

export function degree(value: number, to: string) {
  const key = `degree_to_${to}`;
  const rate = degreeRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
