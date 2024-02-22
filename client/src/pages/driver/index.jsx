import React, { useState, useEffect } from "react";
import { Tab, Box } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import Accept from "./accecpint";
import Washing from "./washing";
import Request from "./request";
import axios from "axios";

export default function LabTabs() {
  const [value, setValue] = useState("1");
  const [cusList, setCusList] = useState([]);
  // const auth = useSelector((state) => state.auth);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // if (!auth.isLoggedIn) {
    //   navigate("/");
    // }
  }, []);
  useEffect(() => {
    axios
      .get("/app/driv/getAllRequest")
      .then((data) => {
        setCusList(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: { xs: 2, sm: 4, md: 6, lg: 8 }, 
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            allowScrollButtonsMobile
            sx={{
              "& .MuiTab-root": {
             
                fontSize: { sm: "0.875rem", md: "1rem" }, 
                minWidth: 0,
                padding: { sm: "6px 12px", md: "8px 16px" }, 
  
              },
            }}
          >
            <Tab label="Requested" value="1" />
            <Tab label="Accepted" value="2" />
            <Tab label="Washed" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Request data = {cusList} setdata = {setCusList}/>
        </TabPanel>
        <TabPanel value="2">
          <Accept />
        </TabPanel>
        <TabPanel value="3">
          <Washing />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
