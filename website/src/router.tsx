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
