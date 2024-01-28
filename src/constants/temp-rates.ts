import { RateType } from "../types/type";

export const kelvinRates: RateType = {
  kelvin_to_kelvin: 1,
  kelvin_to_celsius: -272.15,
  kelvin_to_fahrenheit: -457.87,
  kelvin_to_rankine: 1.8,
  kelvin_to_reaumur: -217.72,
  kelvin_to_tpw: 0.0036608581,
};

export const fahrenheitRates: RateType = {
  fahrenheit_to_fahrenheit: 1,
  fahrenheit_to_celsius: -17.222222222,
  fahrenheit_to_kelvin: 255.92777778,
  fahrenheit_to_rankine: 460.67,
  fahrenheit_to_reaumur: -13.777777778,
  fahrenheit_to_tpw: 0.9369152796,
};

export const celsiusRates: RateType = {
  celsius_to_celsius: 1,
  celsius_to_fahrenheit: 33.8,
  celsius_to_kelvin: 274.15,
  celsius_to_rankine: 493.47,
  celsius_to_reaumur: 0.8,
  celsius_to_tpw: 1.0036242495,
};

export const rankineRates: RateType = {
  rankine_to_rankine: 1,
  rankine_to_fahrenheit: -458.67,
  rankine_to_kelvin: 0.5555555556,
  rankine_to_celsius: -272.59444444,
  rankine_to_reaumur: -218.07555556,
  rankine_to_tpw: 0.0020338101,
};

export const reaumurRates: RateType = {
  reaumur_to_reaumur: 1,
  reaumur_to_fahrenheit: 34.25,
  reaumur_to_kelvin: 274.4,
  reaumur_to_celsius: 1.25,
  reaumur_to_rankine: 493.92,
  reaumur_to_tpw: 1.0045394641,
};

export const triplePointOfWaterRates: RateType = {
  tpw_to_tpw: 1,
  tpw_to_fahrenheit: 32.018,
  tpw_to_kelvin: 273.16,
  tpw_to_celsius: 0.01,
  tpw_to_rankine: 491.688,
  tpw_to_reaumur: 0.008,
};
