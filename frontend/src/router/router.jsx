import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Bikes from "../pages/Bikes";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/bike",
        element: <Bikes />,
      },
    ],
  },
]);

export default router;
