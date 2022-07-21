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
import { getCyclePeriod } from "../APIs_Hai/CyclePeriod";
import { getLoanInterestRates } from "../APIs_Hai/LoanInterestRates";
import { getSellAndReserveReport } from "../APIs_Hai/SellAndReserveReport";
//================================================================

//================================================================
export default function SellAndReserveReport() {
  const [loanInterest, setLoanInterest] = React.useState();
  const [buyBack, setBuyBack] = React.useState();
  const [from, setFrom] = React.useState();
  const [to, setTo] = React.useState();
  const [pageSize, setPageSize] = React.useState(5);

  //================================================================
  const [sellAndReserveReport, setSellAndReserveReport] = React.useState([]);

  React.useEffect(() => {
    getSellAndReserveReport({
      loanInterest,
      buyBack : Boolean(buyBack),
      from,
      to,
    }).then((res) => {
      setSellAndReserveReport(res.data.data);
    });
  }, [loanInterest, buyBack, from, to]);
  console.log("-----> :(", sellAndReserveReport);
  //================================================================
  const [loan, setLoan] = React.useState([]);
  React.useEffect(() => {
    getLoanInterestRates().then((res) => {
      setLoan(res.data.data.data);
    });
  }, []);

  // console.log(":)", loan);
  //================================================================
  const column = [
    {
      field: "_id",
      headerName: "ID",
      width: 180,
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
      field: "user.adhaar",
      headerName: "Adhaar",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.adhaar) {
            result.push(params.row.user.adhaar);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "user.pan",
      headerName: "Pan",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.pan) {
            result.push(params.row.user.pan);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "user.monile",
      headerName: "Mobile",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.mobile) {
            result.push(params.row.user.mobile);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "user.dob",
      headerName: "DOB",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.dob) {
            result.push(params.row.user.dob);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "user.email",
      headerName: "Email",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.email) {
            result.push(params.row.user.email);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "user.refCode",
      headerName: "Referral Code",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.user) {
          if (params.row.user.refCode) {
            result.push(params.row.user.refCode);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },

    //-------------------------------------
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 150,
    },
    {
      field: "gold",
      headerName: "Gold",
      width: 150,
    },
    {
      field: "interestApplied",
      headerName: "Interest Applied",
      width: 150,
    },
    {
      field: "loanInterestId.minMonth",
      headerName: "Interest Minimum Month",
      width: 150,
      valueGetter: (params) => {
        // console.log({ params });
        let result = [];
        if (params.row.loanInterestId) {
          if (params.row.loanInterestId.minMonth) {
            result.push(params.row.loanInterestId.minMonth);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "loanInterestId.maxMonth",
      headerName: "Interest Maximum Month",
      width: 150,
      valueGetter: (params) => {
        // console.log({ params });
        let result = [];
        if (params.row.loanInterestId) {
          if (params.row.loanInterestId.maxMonth) {
            result.push(params.row.loanInterestId.maxMonth);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "installments.gold",
      headerName: "Installments Amount",
      width: 150,
      renderCell: (params) => (
        // console.log(params),
        <ul className="flex">
          {params.row.installments.map((installments, index) => (
            <li key={index}>{installments.gold}</li>
          ))}
        </ul>
      ),
    },
    {
      field: "installments.type",
      headerName: "Installments Type",
      width: 150,
      renderCell: (params) => (
        // console.log(params),
        <ul className="flex">
          {params.row.installments.map((installments, index) => (
            <li key={index}>{installments.type}</li>
          ))}
        </ul>
      ),
    },
    {
      field: "prepayment",
      headerName: "Pre Payment",
      width: 150,
    },
    {
      field: "sellPrice",
      headerName: "Sell Price",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction.amount",
      headerName: "Transaction Amount",
      width: 150,
      valueGetter: (params) => {
        // console.log({ params });
        let result = [];
        if (params.row.transaction) {
          if (params.row.transaction.amount) {
            result.push(params.row.transaction.amount);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "transaction.buyRate",
      headerName: "Transaction Buy Rate",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.transaction) {
          if (params.row.transaction.buyRate) {
            result.push(params.row.transaction.buyRate);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },

    {
      field: "transaction.gold",
      headerName: "Transaction Gold",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.transaction) {
          if (params.row.transaction.gold) {
            result.push(params.row.transaction.gold);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "transaction.createdAt",
      headerName: "Transaction Created At",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.transaction) {
          if (params.row.transaction.createdAt) {
            result.push(params.row.transaction.createdAt);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "transaction.status",
      headerName: "Transaction Status",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.transaction) {
          if (params.row.transaction.status) {
            result.push(params.row.transaction.status);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
    },
    {
      field: "transaction.type",
      headerName: "Transaction Type",
      width: 150,
      valueGetter: (params) => {
        let result = [];
        if (params.row.transaction) {
          if (params.row.transaction.type) {
            result.push(params.row.transaction.type);
          }
        } else {
          result = ["Unknown"];
        }
        return result.join(", ");
      },
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
          getRowId={(row) => row._id}
          getRowHeight={() => "auto"}
          rows={sellAndReserveReport}
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
