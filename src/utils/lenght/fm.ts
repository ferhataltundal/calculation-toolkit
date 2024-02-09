import { femtometerRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function fm(value: number, to: string) {
  const key = `fm_to_${unitQuery(to)}`;
  const rate = femtometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
