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
import { getBuyAndSaveReport } from "../APIs_Hai/BuyAndSaveReport";
import { getCyclePeriod } from "../APIs_Hai/CyclePeriod";
import { getLoanInterestRates } from "../APIs_Hai/LoanInterestRates";
//================================================================

//================================================================
export default function SellAndReserveReport() {
  const [loanInterest, setLoanInterest] = React.useState("");
  const [buyBack, setBuyBack] = React.useState(Boolean);
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [pageSize, setPageSize] = React.useState(5);

  //================================================================
  const [buyAndSaveReport, setBuyAndSaveReport] = React.useState([]);

  React.useEffect(() => {
    getBuyAndSaveReport({
      loanInterest,
      buyBack,
      from,
      to,
    }).then((res) => {
      setBuyAndSaveReport(res.data.data.data);
    });
  }, [loanInterest,buyBack, from, to]);
  console.log(buyAndSaveReport);
  //================================================================
  const [loan, setLoan] = React.useState([]);
  React.useEffect(() => {
    getLoanInterestRates().then((res) => {
      setLoan(res.data.data.data);
    });
  }, []);

  console.log(":)", loan);
  //================================================================
  const column = [
    {
      field: "id",
      headerName: "ID",
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
              result.push(params.row.user.fullName);
            }
          } else {
            result = ["Unknown"];
          }
          return result.join(", ");
        },
      },
    {
        field: "",
        headerName: "Gold",
        width: 150,
      },
      {
        field: "",
        headerName: "Amount",
        width: 150,
      },
      {
        field: "",
        headerName: "Sell Price",
        width: 150,
      },
      {
        field: "",
        headerName: "Interest Applied",
        width: 150,
      },
      {
        field: "",
        headerName: "Duration",
        width: 150,
      },
      {
        field: "",
        headerName: "Due Date",
        width: 150,
      },
      {
        field: "",
        headerName: "Status",
        width: 150,
      },
      {
        field: "",
        headerName: "Installment",
        width: 150,
      },
      
         

   
   
  ];

  //================================================================
  return (
    <>
      <Header />
      {/* ---------------------------- Loan Interest ----------------------------------------------------------- */}

      <div class="report_box">
        <select
          class=""
          onChange={(e) => {
            setLoanInterest(e.target.value);
            // console.log(e.target.value);
          }}
        >
          <option>Select Loan Interest</option>
          {loan.map((x) => {
            return <option value={x.id}>{x.interest} %</option>;
          })}
        </select>
        {/* ---------------------------- Buy Back ----------------------------------------------------------- */}

        <select
          onChange={(e) => {
            setBuyBack(e.target.value);
          }}
        >
          <option>Buy Back Done</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
       
        {/* ---------------------------- Date ----------------------------------------------------------- */}
        <label>Select From Date :</label>
        <input type="date" onChange={(e) => setFrom(e.target.value)} />
        <label for="to">Select To Date :</label>
        <input type="date" onChange={(e) => setTo(e.target.value)} />
      </div>
      {/* ---------------------------- Data Grid ----------------------------------------------------------- */}

      <div class="table_hai">
        <DataGrid
          getRowHeight={() => "auto"}
          rows={buyAndSaveReport}
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
