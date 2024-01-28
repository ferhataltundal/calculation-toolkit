import { fahrenheitRates } from "../../constants/temp-rates";

export function fahrenheit(value: number, to: string) {
  const key = `fahrenheit_to_${to}`;
  const rate = fahrenheitRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
