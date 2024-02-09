import { milimeterRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function mm(value: number, to: string) {
  const key = `mm_to_${unitQuery(to)}`;
  const rate = milimeterRates[key];
  if (rate !== undefined) {
    const result = value / rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
