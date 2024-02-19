import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
const steps = ["task", "time", "Review your order"];

function CheckoutPage() {
  const [companyName, setCompanyName] = useState("");
  const [trackCode, setTrackCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [details, setDetails] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [date, setDate] = useState(null);
  const navigate = useNavigate();

  const validate = () => {
    if (!companyName || !trackCode || !phoneNumber) {
      setShowErrors(true);
      console.log(trackCode);
    } else {
      setShowErrors(false);
      navigate("/client/dashboard");
    }
  };
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography component="h1" variant="h4" align="center">
          Request Task
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!companyName && showErrors}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              id="standard-basic"
              name="cname"
              label="Company Name"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              error={!trackCode && showErrors}
              value={trackCode}
              onChange={(e) => setTrackCode(e.target.value)}
              id="standard-basic"
              name="carcode"
              label="Track Code"
              variant="standard"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              error={!phoneNumber && showErrors}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="pnumber"
              label="Company Phone Number"
              id="standard-basic"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="tell"
              label="Tell us the details of your task"
              multiline
              id="standard-basic"
              minRows={2}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem label="Controlled calendar">
                <DateCalendar
                  value={date}
                  onChange={(newValue) => setDate(dayjs(newValue))}
                />
              </DemoItem>
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="right" m={1} p={1}>
          <Button variant="contained" endIcon={<SendIcon />} onClick={validate}>
            Send
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default CheckoutPage;
