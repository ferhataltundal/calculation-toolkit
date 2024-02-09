import { yardRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function yd(value: number, to: string) {
  const key = `yd_to_${unitQuery(to)}`;
  const rate = yardRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
