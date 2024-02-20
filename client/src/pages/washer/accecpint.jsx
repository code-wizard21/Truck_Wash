import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { CircularProgress, Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./style.css";

const api = axios.create({
  baseURL: `http://localhost:5000/api`,
});

const Accept = () => {
  const [state, setState] = useState({
    page: 1,
    count: 1,
    rowsPerpage: 10,
    sortOrder: {},
    isLoading: false,
    data: [],
    editData: [],
    equipment: [],
  });

  useEffect(() => {
    getData();
  }, []);

  const getDateSrc = () => {
    return [
      {
        pageNumber: 1,
        pageSize: 10,
        firstPage: null,
        lastPage: null,
        totalPages: 0,
        totalRecords: 14,
        nextPage: null,
        previousPage: null,
        data: [
          {
            id: 1,
            name: "Toshib_Satellite y11",
            location: "Chaussée d'Ixelles 84/86, 1050 Ixelles",
            description: "Toshiba Satellite S55-C5274 15.6 Inch",
            picturePath: null,
            status: "Accepted",
            dateAdded: "2020-08-05T00:00:00",
            maintenances: [],
          },
        ],
        succeeded: true,
        errors: null,
        message: null,
      },
    ];
  };

  const getData = () => {
    setState({
      ...state,
      data: getDateSrc()[0].data,
      isLoading: false,
      page: getDateSrc()[0].pageNumber,
      count: getDateSrc()[0].totalRecords,
    });
  };

  const columns = [
    { name: "id", label: "NO", width: 70 },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return <span>{data[dataIndex].name}</span>;
        },
      },
    },
    {
      name: "carcode",
      label: "Car Number",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return <span>{data[dataIndex].name}</span>;
        },
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return <span>{data[dataIndex].description}</span>;
        },
      },
    },
    {
      name: "status",
      label: "State",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          const state = data[dataIndex].status;

          return (
            <div className="accept">
              <span>{state}</span>
            </div>
          );
        },
      },
    },
    
    {
      name: "pnumber",
      label: "Phone Number",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return <span>{data[dataIndex].location}</span>;
        },
      },
    },
    {
      name: "dateAdded",
      label: "Date",
      // options: {
      //   filter: true,
      //   customBodyRenderLite: (dataIndex) => {
      //     return <span>{this.state.data[dataIndex].dateAdded}</span>;
      //   },
      // },
    },
    {
      name: "Action",
      label: "Action",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <span>
              <IconButton color="secondary" aria-label="add an alarm">
                <CheckCircleIcon />
              </IconButton>
            </span>
          );
        },
      },
    },
  ];
  const { data, count, isLoading, rowsPerpage } = state;
  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    download: false,
    serverSide: true,
    print: false,
    count: count,
    rowsPerpage: rowsPerpage,
    rowsPerPageOptions: [],
    selectableRowsHideCheckboxes: false,
    selectableRows: "none",
    selectableRowsHeader: false,
    onColumnSortChange: (changedColumn, direction) =>
      console.log("changedColumn: ", changedColumn, "direction: ", direction),
    onChangeRowsPerPage: (numberOfRows) =>
      console.log("numberOfRows: ", numberOfRows),
    onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
    onTableChange: (action, tableState) => {
      console.log(action, tableState);
      //   switch (action) {
      //   case "changePage":
      //     changePage(tableState.page);  // <-- Change is here
      //     break;
      //   case "sort":
      //     sort(tableState.page);  // <-- Change is here
      //     break;
      //   default:
      //     console.log("action not handled.");
      // }
    },
  };

  return (

   
        <MUIDataTable
          title={
            <Typography variant="h6">
              List of Task
              {isLoading && (
                <CircularProgress
                  size={24}
                  style={{ marginLeft: 15, position: "relative", top: 4 }}
                />
              )}
            </Typography>
          }
          data={data}
          columns={columns}
          options={options}
        />
 
  );
};
export default Accept;
