import { signRates } from "../../constants/angle-rates";

export function sign(value: number, to: string) {
  const key = `sign_to_${to}`;
  const rate = signRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
