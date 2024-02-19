import React from "react";
import { Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function CheckoutSuccess() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleBack = () => {
    navigate("/client/dashboard"); // Use navigate function to change the route
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
      Your request has been successfully submitted.
      </Typography>

      <Button variant="contained" onClick={handleBack} color="success">
        Go to Task Table
      </Button>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
