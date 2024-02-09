import { minuteRates } from "../../constants/angle-rates";

export function minute(value: number, to: string) {
  const key = `minute_to_${to}`;
  const rate = minuteRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
