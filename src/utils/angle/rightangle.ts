import { rightAngleRates } from "../../constants/angle-rates";

export function rightangle(value: number, to: string) {
  const key = `rightangle_to_${to}`;
  const rate = rightAngleRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
