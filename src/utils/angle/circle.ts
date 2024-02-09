import { circleRates } from "../../constants/angle-rates";

export function circle(value: number, to: string) {
  const key = `circle_to_${to}`;
  const rate = circleRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
