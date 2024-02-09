import { meterRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function m(value: number, to: string) {
  const key = `m_to_${unitQuery(to)}`;
  const rate = meterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
