import type { AngleTypes ,OutputType} from "../../types/type";
import { angleConversionRates } from "../../constants/angle-rates";

export function _angle(unit: AngleTypes, value: number, to: AngleTypes): OutputType  {
  const rate = angleConversionRates[unit][to];
  if (rate !== undefined) {
    const result = value * rate;
    return { result: `${result} ${to}`, raw: result };
  } else {
    throw new Error("Conversion rate not found.");
  }
}
