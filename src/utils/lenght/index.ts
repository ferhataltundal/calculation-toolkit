import type{ LengthTypes,OutputType } from "../../types/type";
import { lengthConversionRates } from "../../constants/length-rates";
import { unitQuery } from "./unit-query";

export function _length(unit: LengthTypes, value: number, to: LengthTypes): OutputType {
  const rate = lengthConversionRates[unit][to];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${unitQuery(to)}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}