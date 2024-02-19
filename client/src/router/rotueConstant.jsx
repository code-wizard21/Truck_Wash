import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/client/dashboard"));
const Login = lazy(() => import("../components/auth/Login"));
const CheckTask = lazy(() => import("../pages/client/CheckoutPage"));

export const ROUTES_CONSTANTS = [
  {
    path: "/client/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/client/checktask",
    element: <CheckTask />,
  },

  {
    path: "/",
    element: <Login />,
  },

];
