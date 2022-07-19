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
import { getReport } from "../APIs_Hai/Reports";
import {getBuyAndSaveReport} from "../APIs_Hai/BuyAndSave"
//================================================================
let reportEndpoint = {
  instant: `${ADMIN_API}/reports/transactions`,
  buy_save: `${ADMIN_API}/reports/transactions`,
  buy_reserve: `${ADMIN_API}/reports/transactions`,
  sell_reserve: `${ADMIN_API}/reports/transactions`,
  ecom: `${ADMIN_API}/reports/transactions`,
};
//================================================================
export default function UserDataFull() {
  const [module, setModule] = React.useState("");
  const [type, setType] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [pageSize, setPageSize] = React.useState(5);

  //================================================================
  const [buyAndSaveReport, setBuyAndSaveReport] = React.useState([]);

  //================================================================
React.useEffect(()=>{
  getBuyAndSaveReport().then((res)=>{
    setBuyAndSaveReport(res.data.data.data)
  })
},[])
console.log(buyAndSaveReport)
  //================================================================



  //================================================================
  const column = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },

    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "user.fullName",
      headerName: "user Name",
      width: 150,
      valueGetter: (params) => {
        // console.log({ params });
        let result = [];
        if (params.row.user) {
          if (params.row.user.fullName) {
            result.push(params.row.user.fullName)
          }
          
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      }
    },
    {
      field: "installments.amount",
      headerName: "user Installments",
      width: 150,
      valueGetter: (params) => {
        // console.log({ params });
        let result = [];
        if (params.row.installments) {
          if (params.row.installments.amount) {
            result.push(params.row.installments.amount)
          }
          
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      }
    },
    {
      field: "sellRate",
      headerName: "Sell Rate",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 150,
      valueFormatter: params => 
      // console.log("----->",params),
      params.value.substring(0,10),
    },
  ];
  //================================================================

//================================================================
  return (
    <>
      <Header />
      {/* ---------------------------- Module ----------------------------------------------------------- */}

      <div class="sm">
        <select
          class="form-control"
          onChange={(e) => {
            setModule(e.target.value);
          }}
        >
          <option>Select Module</option>

          <option value="instant">Instant Gold</option>
          <option value="buy_save">Buy and Save</option>
          <option value="sell_reserve">Sell and Reserve</option>
          <option value="ecom">Ecommerce</option>
        </select>
        {/* ---------------------------- Type ----------------------------------------------------------- */}

        <select
          class="form-control"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option>Select Type</option>

          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
          <option value="hold">Hold</option>
          <option value="release">Release</option>
          <option value="transferred">Transferred</option>
        </select>
        {/* ---------------------------- Status ----------------------------------------------------------- */}

        <select
          class="form-control"
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option>Select Status</option>

          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
        </select>
        
        <input
          class="form-control"
          type="date"
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          class="form-control"
          type="date"
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>

      {/* ---------------------------- Date ----------------------------------------------------------- */}

      <div class="table_hai">
        <DataGrid
          rows={buyAndSaveReport}
          columns={column}
          components={{ Toolbar: GridToolbar }}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[1,2,3]}
          pagination
        />
      </div>

      <Footer />
    </>
  );
}
