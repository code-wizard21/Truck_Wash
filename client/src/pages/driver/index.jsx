import * as React from "react";
import { Container, Tab, Box } from "@mui/material";
import { TabPanel, TabContext,TabList } from "@mui/lab";
import Accept from "./accecpint";
import Washing from "./washing";
import Request from "./request";
import MyPlan from "./myplan";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 2, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Requesting Truck" value="1" />
              <Tab label="Accepting Truck" value="2" />
              <Tab label="Wasing Up Truck" value="3" />
              <Tab label="My Plan" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Request />
          </TabPanel>
          <TabPanel value="2">
            <Accept />
          </TabPanel>
          <TabPanel value="3">
            <Washing />
          </TabPanel>
          <TabPanel value="4">
            <MyPlan />
          </TabPanel>
        </TabContext>
      </Container>
    </Box>
  );
}
