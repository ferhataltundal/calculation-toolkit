import {
  factorial,
  mode,
  zScore,
  range,
  randomGenerator,
  gamma,
  median,
  sum,
  max,
  min,
  combineMean,
  harmonicMean,
  geometricMean,
  arithmeticMean,
  combination,
  permutation,
} from "../src/index";

//factorial, mode, z-score, range, random generator, gamma, median, sum, max, min, combine mean,  harmonic mean, geometric mean, arithmetic mean, combination, permutation
test("common calculation", () => {
  expect(arithmeticMean([3, 4, 5])).toBeCloseTo(4);
});
