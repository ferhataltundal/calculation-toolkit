import { micrometerRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function µm(value: number, to: string) {
  const key = `µm_to_${unitQuery(to)}`;
  const rate = micrometerRates[key];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
