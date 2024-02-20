import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/client/dashboard"));
const Login = lazy(() => import("../components/auth/Login"));
const CheckTask = lazy(() => import("../pages/client/CheckoutPage"));
const DriverTask = lazy(() => import("../pages/driver/index"));
const WasherTask = lazy(() => import("../pages/washer"));
const LandingPage = lazy(() => import("../pages/landing"));
const Admin = lazy(() => import("../pages/admin"));
const Admin_Role = lazy(() => import("../pages/admin/admin-role"));
const Driver_Role = lazy(() => import("../pages/admin/driver-role"));

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
    element: <CheckTask />,
  },

  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "/", element: <Admin_Role /> },
      { path: "/driver-role", element: <Driver_Role /> },
    ],
  },
];
