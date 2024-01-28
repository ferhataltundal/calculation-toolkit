import { inchRates } from "../../constants/length-rates";

export function inch(value: number, to: string) {
  const key = `in_to_${to}`;
  const rate = inchRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
