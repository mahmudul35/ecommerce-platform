import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import BikeShop from "../pages/BikeShop";
import BillingAndPayment from "../pages/BillingAndPayment";
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
        element: <BikeShop />,
      },
      {
        path: "/billing",
        element: <BillingAndPayment />,
      },
    ],
  },
]);

export default router;
