import { nanometerRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function nm(value: number, to: string) {
  const key = `nm_to_${unitQuery(to)}`;
  const rate = nanometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
