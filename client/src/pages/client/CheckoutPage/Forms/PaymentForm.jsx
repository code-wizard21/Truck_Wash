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

      <Grid container spacing={3}>
        <Grid item xs={4} md={4}>
          <Box m={1}>
            <Grid item xs={12} md={6}>
              <InputField
                name='location'
                label="Pick location"
                value="625 McDonald St Regina"
                fullWidth
                style={{ marginBottom: "30px" }}
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
        <Grid item xs={7} md={7}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.5012428224413!2d-104.58563572306265!3d50.46901168602662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fa7080a1679%3A0x27e82440887ddbb!2s625%20McDonald%20St%2C%20Regina%2C%20SK%20S4N%204X1%2C%20Canada!5e0!3m2!1sen!2s!4v1708334494781!5m2!1sen!2s"
            width="800"
            height="550"
            allowFullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
