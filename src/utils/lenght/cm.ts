import { centimeterRates } from "../../constants/length-rates";

export function cm(value: number, to: string) {
  const key = `cm_to_${to}`;
  const rate = centimeterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
