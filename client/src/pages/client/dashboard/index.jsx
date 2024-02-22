import React, { useState, useEffect } from "react";
import { Container, Tab, Box } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import Accept from "./accecpint";
import Washing from "./washing";
import Request from "./request";
// import axios from "axios";
import { useSelector } from "react-redux";
import Http from "../../../utils/http";
export default function LabTabs() {
  const [value, setValue] = useState("1");
  const [cusData, setCusData] = useState([]);
  const [cusAccept, setCusAccept] = useState([]);
  const auth = useSelector((state) => state.auth);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    Http.post("/api/cus/findAllCustom", { name: auth.user.name })
      .then((data) => {
        setCusData(data.data);
      })
      .catch((err) => {});
    Http.post("/api/cus/findAcceptCustom", { name: auth.user.name })
      .then((data) => {
        setCusAccept(data.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 2, sm: 4, md: 6, lg: 8 }, // Adjust padding for different screen sizes
        // Add additional styling as needed here
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            allowScrollButtonsMobile
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTab-root": {
                // Apply styles to each Tab
                fontSize: { sm: "0.875rem", md: "1rem" }, // Adjust font size for different breakpoints
                minWidth: 0, // Remove the default minWidth
                padding: { sm: "6px 12px", md: "8px 16px" }, // Adjust padding for different breakpoints
                // Add additional styles as needed
              },
            }}
          >
            <Tab label="Requested" value="1" />
            <Tab label="Accepted" value="2" />
            <Tab label="Washed " value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Request data={cusData} setData={setCusData} auth={auth} />
        </TabPanel>
        <TabPanel value="2">
          <Accept data={cusAccept} />
        </TabPanel>
        <TabPanel value="3">
          <Washing />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
