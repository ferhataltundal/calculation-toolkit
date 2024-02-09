import { gradRates } from "../../constants/angle-rates";

export function grad(value: number, to: string) {
  const key = `grad_to_${to}`;
  const rate = gradRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
