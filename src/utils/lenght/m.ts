import { meterRates } from "../../constants/length-rates";

export function m(value: number, to: string) {
  const key = `m_to_${to}`;
  const rate = meterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
