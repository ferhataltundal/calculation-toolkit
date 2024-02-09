import { gonRates } from "../../constants/angle-rates";

export function gon(value: number, to: string) {
  const key = `gon_to_${to}`;
  const rate = gonRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
