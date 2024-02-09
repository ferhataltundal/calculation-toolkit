import { milRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function mil(value: number, to: string) {
  const key = `mil_to_${unitQuery(to)}`;
  const rate = milRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
