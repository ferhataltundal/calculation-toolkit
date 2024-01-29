import { tempCalc, lengthCalc } from "../src/index";

//µm, nm, mm, cm, m, dm, dam, hm, in, km, mile, mil, yard, feet, fm, am, ly
test("convert micrometer to inch", () => {
  expect(lengthCalc("1 µm to in")).toBeCloseTo(0.0000393701);
});

//kelvin, celsius, rankine, fahrenheit, reaumur, tpw
test("convert kelvin to rankine", () => {
  expect(tempCalc("1 kelvin to rankine")).toBeCloseTo(1.8);
});
