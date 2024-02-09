import { hectometerRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function hm(value: number, to: string) {
  const key = `hm_to_${unitQuery(to)}`;
  const rate = hectometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
