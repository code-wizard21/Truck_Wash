
import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { InputField, DatePickerField } from "../../FormFields";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import MyMap from "./MyMap";

export default function PaymentForm(props) {

  const location1 = { lat: 40.7128, lng: -74.006 }; // New York
  const location2 = { lat: 34.0522, lng: -118.2437 };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose Data and time
      </Typography>
      <Grid container >
        <Grid item xs={6} md={6}>
          <Box m={1}>
            <Grid item xs={12} md={6}>
              <InputField
                name='pick location'
                label="Pick location"
                fullWidth
                style={{ marginBottom: "30px" }}
              />
            </Grid>
          </Box>
          <Box m={1}>
            <Grid item xs={12} md={6}>
              <InputField
                name='drop location'
                label="Drop location"
                fullWidth
                style={{ marginBottom: "30px" }}
              />
            </Grid>
          </Box>
          <Box m={1}>
            <Grid item xs={12} md={6}>
              <TextField
                name="tell"
                label="Tell us the details of your task"
                multiline
                id="standard-basic"
                rows={4}
                style={{ marginBottom: "30px" }}
                fullWidth
              />
            </Grid>
          </Box>
          <Box m={1}>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker />
              </LocalizationProvider>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <MyMap location1={location1} location2={location2} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
