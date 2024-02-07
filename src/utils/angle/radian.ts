import { radianRates } from "../../constants/angle-rates";

export function radian(value: number, to: string) {
  const key = `radian_to_${to}`;
  const rate = radianRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
