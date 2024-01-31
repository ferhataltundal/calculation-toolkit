import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import Installation from "./pages/ingredients/getting-started/Installation";
import Introduction from "./pages/ingredients/getting-started/Introduction";
import Temperature from "./pages/ingredients/converter/Temperature";
import Length from "./pages/ingredients/converter/Length";
import AritmeticMean from "./pages/ingredients/common/AritmeticMean";
import HarmonicMean from "./pages/ingredients/common/HarmonicMean";
import GeometricMean from "./pages/ingredients/common/GeometricMean";
import CombineMean from "./pages/ingredients/common/CombineMean";
import Combination from "./pages/ingredients/common/Combination";
import Permutation from "./pages/ingredients/common/Permutation";
import Factorial from "./pages/ingredients/common/Factorial";
import Min from "./pages/ingredients/common/Min";
import Max from "./pages/ingredients/common/Max";
import Sum from "./pages/ingredients/common/Sum";
import Gamma from "./pages/ingredients/common/Gamma";
import Median from "./pages/ingredients/common/Median";
import RandomGenerator from "./pages/ingredients/common/RandomGenerator";
import ZScore from "./pages/ingredients/common/ZScore";
import Range from "./pages/ingredients/common/Range";
import Mode from "./pages/ingredients/common/Mode";
import Currency from "./pages/ingredients/currency/Currency";
import Parity from "./pages/ingredients/currency/Parity";
import TriangleArea from "./pages/ingredients/area/TriangleArea";
import SquareArea from "./pages/ingredients/area/SquareArea";
import SphereArea from "./pages/ingredients/area/SphereArea";
import RectangleArea from "./pages/ingredients/area/RectangleArea";
import CylinderArea from "./pages/ingredients/area/CylinderArea";
import CubeArea from "./pages/ingredients/area/CubeArea";
import ConeArea from "./pages/ingredients/area/ConeArea";
import CircleArea from "./pages/ingredients/area/CircleArea";
import CirclePerimeter from "./pages/ingredients/perimeter/CirclePerimeter";
import EquilateralTrianglePerimeter from "./pages/ingredients/perimeter/EquilateralTrianglePerimeter";
import IsoscelesTrianglePerimeter from "./pages/ingredients/perimeter/IsoscelesTrianglePerimeter";
import NonIsoscelesTrianglePerimeter from "./pages/ingredients/perimeter/NonIsoscelesTrianglePerimeter";
import RectanglePerimeter from "./pages/ingredients/perimeter/RectanglePerimeter";
import SquarePerimeter from "./pages/ingredients/perimeter/SquarePerimeter";
import ConeVolume from "./pages/ingredients/volume/ConeVolume";
import CubeVolume from "./pages/ingredients/volume/CubeVolume";
import CuboidVolume from "./pages/ingredients/volume/CuboidVolume";
import CylinderVolume from "./pages/ingredients/volume/CylinderVolume";
import RectangularPrismVolume from "./pages/ingredients/volume/RectangularPrismVolume";
import RegularTetrahedronVolume from "./pages/ingredients/volume/RegularTetrahedronVolume";
import SphereVolume from "./pages/ingredients/volume/SphereVolume";
import SquarePrismVolume from "./pages/ingredients/volume/SquarePrismVolume";
import SquarePyramidVolume from "./pages/ingredients/volume/SquarePyramidVolume";
import Sample from "./pages/ingredients/shuffle/Sample";
import Shuffle from "./pages/ingredients/shuffle/Shuffle";
const Layout = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export const Paths = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/docs",
          element: <Docs />,
          children: [
            {
              path: "",
              element: <Introduction />,
            },
            {
              path: "installation",
              element: <Installation />,
            },
            {
              path: "temperature-converter",
              element: <Temperature />,
            },
            {
              path: "length-converter",
              element: <Length />,
            },
            {
              path: "min",
              element: <Min />,
            },
            {
              path: "max",
              element: <Max />,
            },
            {
              path: "sum",
              element: <Sum />,
            },
            {
              path: "factorial",
              element: <Factorial />,
            },
            {
              path: "arithmetic-mean",
              element: <AritmeticMean />,
            },
            {
              path: "harmonic-mean",
              element: <HarmonicMean />,
            },
            {
              path: "geometric-mean",
              element: <GeometricMean />,
            },
            {
              path: "combine-mean",
              element: <CombineMean />,
            },
            {
              path: "combination",
              element: <Combination />,
            },
            {
              path: "permutation",
              element: <Permutation />,
            },
            {
              path: "gamma",
              element: <Gamma />,
            },
            {
              path: "median",
              element: <Median />,
            },
            {
              path: "mode",
              element: <Mode />,
            },
            {
              path: "range",
              element: <Range />,
            },
            {
              path: "z-score",
              element: <ZScore />,
            },
            {
              path: "random-generator",
              element: <RandomGenerator />,
            },
            {
              path: "currency",
              element: <Currency />,
            },
            {
              path: "parity",
              element: <Parity />,
            },
            {
              path: "circle-area",
              element: <CircleArea />,
            },
            {
              path: "cone-area",
              element: <ConeArea />,
            },
            {
              path: "cube-area",
              element: <CubeArea />,
            },
            {
              path: "cylinder-area",
              element: <CylinderArea />,
            },
            {
              path: "rectangle-area",
              element: <RectangleArea />,
            },
            {
              path: "sphere-area",
              element: <SphereArea />,
            },
            {
              path: "square-area",
              element: <SquareArea />,
            },
            {
              path: "triangle-area",
              element: <TriangleArea />,
            },
            {
              path: "circle-perimeter",
              element: <CirclePerimeter />,
            },
            {
              path: "equilateral-triangle-perimeter",
              element: <EquilateralTrianglePerimeter />,
            },
            {
              path: "isosceles-triangle-perimeter",
              element: <IsoscelesTrianglePerimeter />,
            },
            {
              path: "non-isosceles-triangle-perimeter",
              element: <NonIsoscelesTrianglePerimeter />,
            },
            {
              path: "rectangle-perimeter",
              element: <RectanglePerimeter />,
            },
            {
              path: "square-perimeter",
              element: <SquarePerimeter />,
            },
            {
              path: "cone-volume",
              element: <ConeVolume />,
            },
            {
              path: "cube-volume",
              element: <CubeVolume />,
            },
            {
              path: "square-volume",
              element: <CuboidVolume />,
            },
            {
              path: "cylinder-volume",
              element: <CylinderVolume />,
            },
            {
              path: "rectangular-prism-volume",
              element: <RectangularPrismVolume />,
            },
            {
              path: "regular-tetrahedron-volume",
              element: <RegularTetrahedronVolume />,
            },
            {
              path: "sphere-volume",
              element: <SphereVolume />,
            },
            {
              path: "square-prism-volume",
              element: <SquarePrismVolume />,
            },
            {
              path: "square-pyramid-volume",
              element: <SquarePyramidVolume />,
            },
            {
              path: "sample",
              element: <Sample />,
            },
            {
              path: "shuffle",
              element: <Shuffle />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
