import { celsiusRates } from "../../constants/temp-rates";

export function celsius(value: number, to: string) {
  const key = `celsius_to_${to}`;
  const rate = celsiusRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
