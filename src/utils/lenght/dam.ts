import { decameterRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function dam(value: number, to: string) {
  const key = `dam_to_${unitQuery(to)}`;
  const rate = decameterRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
