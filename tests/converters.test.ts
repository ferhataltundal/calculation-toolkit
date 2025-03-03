import { lengthCalc, tempCalc } from "../src";

//µm, nm, mm, cm, m, dm, dam, hm, in, km, mile, mil, yard, feet, fm, am, ly
test("convert micrometer to inch", () => {
  expect(
    lengthCalc({
      from: "mcm",
      to: "in",
      input: 1,
    })
  ).toBeCloseTo(0.0000393701);
});

//kelvin, celsius, rankine, fahrenheit, reaumur, tpw
test("convert kelvin to rankine", () => {
  expect(
    tempCalc({
      from: "kelvin",
      to: "rankine",
      input: 1,
    })
  ).toBeCloseTo(1.8);
});
