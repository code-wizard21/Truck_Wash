import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/client/dashboard"));
const Login = lazy(() => import("../components/auth/Login"));
const CheckTask = lazy(() => import("../pages/client/CheckoutPage"));
const DriverTask = lazy(() => import("../pages/driver/index"));
const WasherTask= lazy(() => import("../pages/washer"));
const LandingPage= lazy(() => import("../pages/landing"));
export const ROUTES_CONSTANTS = [
  {
    path: "/client/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/driver/checktask",
    element: <WasherTask />,
  },
  {
    path: "/client/checktask",
    element: <WasherTask />,
  },

  {
    path: "/",
    element: <LandingPage />,
  },
   {
    path: "/login",
    element: <Login />,
  },

];
