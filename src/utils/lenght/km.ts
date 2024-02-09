import { kilometerRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function km(value: number, to: string) {
  const key = `km_to_${unitQuery(to)}`;
  const rate = kilometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
