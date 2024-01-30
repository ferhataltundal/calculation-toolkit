import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import HarmonicMean from "./pages/ingredients/HarmonicMean";
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
              path: "harmonic-mean",
              element: <HarmonicMean />,
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
