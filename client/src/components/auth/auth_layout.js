import PropTypes from "prop-types";

// material-ui
import { Box } from "@mui/material";

// project import
import MainCard from "../../ui-component/cards/MainCard";
import { Outlet } from "react-router-dom";
// ==============================|| AUTHENTICATION CARD WRAPPER ||============================== //

const AuthLayout = () => {
  <>
    <Outlet />
  </>;
};

export default AuthLayout;
