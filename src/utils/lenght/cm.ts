import { centimeterRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function cm(value: number, to: string) {
  const key = `cm_to_${unitQuery(to)}`;
  const rate = centimeterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
