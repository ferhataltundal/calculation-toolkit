import { lightYearRates } from "../../constants/length-rates";

export function ly(value: number, to: string) {
  const key = `ly_to_${to}`;
  const rate = lightYearRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
