import {
  coneVolume,
  cubeVolume,
  cuboidVolume,
  cylinderVolume,
  rectangularPrismVolume,
  regularTetrahedronVolume,
  sphereVolume,
  squarePrismVolume,
  squarePyramidVolume,
} from "../src/index";

//cuboid, cone, cube, cylinder, rectangular prism, sphere, square prism, square pyramid
test("volume calculation", () => {
  expect(sphereVolume(5)).toBeCloseTo(523.598);
});
