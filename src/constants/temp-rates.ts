import { ComplexRateType, TempTypes } from "../types/type";

export const angleConversionRates: ComplexRateType<TempTypes> = {
  tpw: {
    tpw: 1,
    fahrenheit: 32.018,
    kelvin: 273.16,
    celsius: 0.01,
    rankine: 491.688,
    reaumur: 0.008,
  },
  kelvin: {
    kelvin: 1,
    celsius: -272.15,
    fahrenheit: -457.87,
    rankine: 1.8,
    reaumur: -217.72,
    tpw: 0.0036608581,
  },
  celsius: {
    celsius: 1,
    fahrenheit: 33.8,
    kelvin: 274.15,
    rankine: 493.47,
    reaumur: 0.8,
    tpw: 1.0036242495,
  },
  fahrenheit: {
    fahrenheit: 1,
    celsius: -17.222222222,
    kelvin: 255.92777778,
    rankine: 460.67,
    reaumur: -13.777777778,
    tpw: 0.9369152796,
  },
  rankine: {
    rankine: 1,
    fahrenheit: -458.67,
    kelvin: 0.5555555556,
    celsius: -272.59444444,
    reaumur: -218.07555556,
    tpw: 0.0020338101,
  },
  reaumur: {
    reaumur: 1,
    fahrenheit: 34.25,
    kelvin: 274.4,
    celsius: 1.25,
    rankine: 493.92,
    tpw: 1.0045394641,
  },
};
