import {
  circlePerimeter,
  equilateralTrianglePerimeter,
  isoscelesTrianglePerimeter,
  nonIsoscelesTrianglePerimeter,
  rectanglePerimeter,
  squarePerimeter,
} from "../src/index";

//circle, equilateral triangle, isosceles triangle, non-isosceles triangle, rectangle, rectangle, square

test("perimeter calculation", () => {
  expect(squarePerimeter(5)).toBeCloseTo(20);
});
