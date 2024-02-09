import { inchRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function _in(value: number, to: string) {
  const key = `in_to_${unitQuery(to)}`;
  const rate = inchRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
