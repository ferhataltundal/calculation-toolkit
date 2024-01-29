import { currency, parity } from "../src/index";

//currency, parity
test("currency calculation", () => {
  expect(currency(100, { USD: 1.18, EUR: 1.0, GBP: 0.85 })).toEqual({
    USD: 118.0,
    EUR: 100.0,
    GBP: 85.0,
  });
});

test("parity calculation", () => {
  expect(parity(7, 3)).toBeCloseTo(2.33);
});
