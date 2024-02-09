import { lightYearRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function ly(value: number, to: string) {
  const key = `ly_to_${unitQuery(to)}`;
  const rate = lightYearRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
