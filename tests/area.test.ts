import {
  circleArea,
  coneArea,
  cubeArea,
  cylinderArea,
  sphereArea,
  squareArea,
  triangleArea,
  rectangleArea,
} from "../src/index";

//circle, cone, cube, cylinder, rectangle, sphere, square, triangle
test("area calculation", () => {
  expect(circleArea(5)).toBeCloseTo(78.5398);
});
