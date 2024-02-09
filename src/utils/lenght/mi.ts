import { mileRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function mi(value: number, to: string) {
  const key = `mi_to_${unitQuery(to)}`;
  const rate = mileRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
