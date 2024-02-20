import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/client/dashboard"));
const Login = lazy(() => import("../components/auth/Login"));
const CheckTask = lazy(() => import("../pages/client/CheckoutPage"));
const DriverTask = lazy(() => import("../pages/driver/index"));

export const ROUTES_CONSTANTS = [
  {
    path: "/client/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/driver/checktask",
    element: <DriverTask />,
  },
  {
    path: "/client/checktask",
    element: <DriverTask />,
  },

  {
    path: "/",
    element: <Login />,
  },

];
