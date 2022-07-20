import * as React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { resolveComponentProps } from "@mui/base/utils";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";
import { ADMIN_API } from "../Constants";
import { getBuyAndSaveReport } from "../APIs_Hai/BuyAndSaveReport";
import { getCyclePeriod } from "../APIs_Hai/CyclePeriod";
import { getEcommerceReport } from "../APIs_Hai/EcommerceReport";
//================================================================

//================================================================
export default function EcommerceReport() {
  const [status, setStatus] = React.useState(0);
  const [goldApllied, setGoldApllied] = React.useState(0);
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [pageSize, setPageSize] = React.useState(5);

  //================================================================
  const [ecommReport, setEcommReport] = React.useState([]);

  React.useEffect(() => {
    getEcommerceReport({
      status,
      goldApllied,
      from,
      to,
    }).then((res) => {
      setEcommReport(res.data.data.data);
    });
  }, [status, goldApllied, from, to]);
  console.log(ecommReport);
  //================================================================
  const column = [
    {
      field: "",
      headerName: "Order Id",
      width: 150,
    },
    {
      field: "",
      headerName: "Product Id",
      width: 150,
    },
    {
      field: "",
      headerName: "User ID",
      width: 150,
    },
    {
      field: "",
      headerName: "Cart ID",
      width: 150,
    },
    {
      field: "",
      headerName: "Address",
      width: 150,
    },
    {
      field: "",
      headerName: "Consigment Number",
      width: 150,
    },
    {
      field: "",
      headerName: "Consigment Number",
      width: 150,
    },
    {
      field: "",
      headerName: "Order Status",
      width: 150,
    },
    {
      field: "",
      headerName: "Order Value",
      width: 150,
    },
    {
      field: "",
      headerName: "Gold Bank Apllied",
      width: 150,
    },
    {
      field: "",
      headerName: "Return Reason",
      width: 150,
    },
  ];

  //================================================================
  return (
    <>
      <Header />
      {/* ---------------------------- Status ----------------------------------------------------------- */}

      <div class="report_box">
        <select
          class=""
          onChange={(e) => {
            setStatus(e.target.value);
            // console.log(e.target.value);
          }}
        >
          <option>Order Status</option>
          <option class="placed">Placed</option>
          <option class="in-transit">In-Transit</option>
          <option class="completed">Completed</option>
          <option class="cancelled">Cancelled</option>
          <option class="returned">Returned</option>
        </select>
        {/* ---------------------------- Gold Applied ----------------------------------------------------------- */}

        <select
          onChange={(e) => {
            setGoldApllied(e.target.value);
          }}
        >
          <option>Gold Apllied</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        {/* ---------------------------- Date ----------------------------------------------------------- */}
      </div>
      <div class="block report_box">
        <div>
          <label>Select From Date :</label>
          <input type="date" onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div>
          <label for="to">Select To Date :</label>
          <input type="date" onChange={(e) => setTo(e.target.value)} />
        </div>
      </div>
      {/* ---------------------------- Data Grid ----------------------------------------------------------- */}

      <div class="table_hai">
        <DataGrid
          getRowHeight={() => "auto"}
          rows={ecommReport}
          columns={column}
          components={{ Toolbar: GridToolbar }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[1, 2, 3]}
          pagination
        />
      </div>

      <Footer />
    </>
  );
}
