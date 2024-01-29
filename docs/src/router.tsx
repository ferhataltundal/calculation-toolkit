import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";
import Developer from "./pages/Developer";
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
        },
        {
          path: "/docs/:url",
          element: <Docs />,
        },
        {
          path: "/examples",
          element: <Examples />,
        },
        {
          path: "/developers",
          element: <Developer />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
