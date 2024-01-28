import { attometerRates } from "../../constants/length-rates";

export function am(value: number, to: string) {
  const key = `am_to_${to}`;
  const rate = attometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
