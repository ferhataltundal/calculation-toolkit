import { feetRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function ft(value: number, to: string) {
  const key = `ft_to_${unitQuery(to)}`;
  const rate = feetRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
