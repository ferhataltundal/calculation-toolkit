import { decimeterRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function dm(value: number, to: string) {
  const key = `dm_to_${unitQuery(to)}`;
  const rate = decimeterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
