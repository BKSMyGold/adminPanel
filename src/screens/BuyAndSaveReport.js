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
// import { getPlan } from "../APIs_Hai/Plan";
//================================================================
let reportEndpoint = {
  instant: `${ADMIN_API}/reports/transactions`,
  buy_save: `${ADMIN_API}/reports/transactions`,
  buy_reserve: `${ADMIN_API}/reports/transactions`,
  sell_reserve: `${ADMIN_API}/reports/transactions`,
  ecom: `${ADMIN_API}/reports/transactions`,
};
//================================================================
export default function BuyAndSaveReport() {
  //================================================================
  const [cycle, setCycle] = React.useState("");
  const [plan, setPlan] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [skipCount, setSkipCount] = React.useState(0);
  const [unpaidSkips, setUnpaidSkips] = React.useState(0);
  const [unpaidInvestment, setUnpaidInvestment] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [pageSize, setPageSize] = React.useState(5);

  //================================================================
  const [buyAndSaveReport, setBuyAndSaveReport] = React.useState([]);

  React.useEffect(() => {
    getBuyAndSaveReport({
      cyclePeriod: cycle,
      type: plan,
      status,
      skipCount,
      unpaidSkipCount: unpaidSkips,
      unpaidInvestments: unpaidInvestment,
      duration,
      from,
      to,
    }).then((res) => {
      setBuyAndSaveReport(res.data.data.data);
    });
  }, [
    cycle,
    plan,
    status,
    skipCount,
    unpaidSkips,
    unpaidInvestment,
    duration,
    from,
    to,
  ]);
  console.log(buyAndSaveReport);
  //================================================================
  const [cycleperiod, setCycleperiod] = React.useState([]);
  React.useEffect(() => {
    getCyclePeriod().then((res) => {
      setCycleperiod(res.data.data.data);
    });
  }, []);
  //================================================================
  const [planType, setPlanType] = React.useState([]);
  React.useEffect(() => {
    axios.post(`${ADMIN_API}/admin/plan/list`).then((res) => {
      setPlanType(res.data.data.data);
    });
  }, []);
  console.log(planType);
  //================================================================
  const column = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "cycle",
      headerName: "Cylce",
      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Purchased on",
      width: 150,
      valueFormatter: (params) => params.value.substring(0, 10),
    },
    {
      field: "dueDate",
      headerName: "Due Date",
      width: 150,
      valueFormatter: (params) => params.value.substring(0, 10),
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 150,
    },
    {
      field: "gracePeriod",
      headerName: "Grace Period",
      width: 150,
    },
    {
      field: "lastPaidAt",
      headerName: "Last Paid on",
      width: 150,
      valueFormatter: (params) => params.value.substring(0, 10),
    },
    {
      field: "maturityDate",
      headerName: "Maturity Date",
      width: 150,
      valueFormatter: (params) => params.value.substring(0, 10),
    },
    {
      field: "maxSkip",
      headerName: "Max Skip",
      width: 150,
    },
    {
      field: "min",
      headerName: "Minimum",
      width: 150,
    },
    {
      field: "mode",
      headerName: "Mode",
      width: 150,
    },
    
    {
      field: "skipCount",
      headerName: "Skip Count",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "type",
      headerName: "Plan",
      width: 150,
    },
    {
      field: "unpaidInvestments",
      headerName: "Unpaid Investments",
      width: 150,
    },
    {
      field: "unpaidSkipCount",
      headerName: "Unpaid Skip Count",
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
      field: "installments.amount",
      headerName: "Installments Amount",
      width: 350,
      renderCell: (params) => (
        // console.log(params),
        <ul className="flex">
          {params.row.installments.map((installments, index) => (
            <li key={index}>{installments.amount.toLocaleString('en-IN')} ₹</li>
          ))}
        </ul>
      ),
      // valueGetter: (params) => {
      //   // console.log({ params });
      //   let result = [];
      //   if (params.row.installments) {
      //     params.row.installments.map((x) => {
      //       return result.push(x.amount);
      //     });
      //   } else {
      //     result = ["Unknown"];
      //   }
      //   return result.join(", ");
      // },
    },
    {
      field: "installments.count",
      headerName: "Installments Count",
      width: 250,
      renderCell: (params) => (
        // console.log(params),
        <ul className="flex">
          {params.row.installments.map((installments, index) => (
            <li key={index}>{installments.count}</li>
          ))}
        </ul>
      ),
      // valueGetter: (params) => {
      //   // console.log({ params });
      //   let result = [];
      //   if (params.row.installments) {
      //     params.row.installments.map((x) => {
      //       return (
      //         <li>{result.push(x.count)}</li>
      //       )
      //     });
      //   } else {
      //     result = ["Unknown"];
      //   }
      //   return result.join(", ");
      // },
    },
    {
      field: "installments.createdAt",
      headerName: "Installments createdAt",
      width: 250,
      renderCell: (params) => (
        // console.log(params),
        <ul className="flex">
          {params.row.installments.map((installments, index) => (
            <li key={index}>{installments.createdAt}</li>
          ))}
        </ul>
      ),
    },
    {
      field: "installments.gold",
      headerName: "Installments Gold",
      width: 250,
      renderCell: (params) => (
        // console.log(params),
        <ul className="flex">
          {params.row.installments.map((installments, index) => (
            <li key={index}>{installments.gold} gm</li>
          ))}
        </ul>
      ),
    },
    {
      field: "installments.type",
      headerName: "Installments Type ",
      width: 250,
      renderCell: (params) => (
        // console.log(params),
        <ul className="flex">
          {params.row.installments.map((installments, index) => (
            <li key={index}>{installments.type} </li>
          ))}
        </ul>
      ),
    },
  ];

  //================================================================
  return (
    <>
      <Header />
      {/* ---------------------------- Cycle Period ----------------------------------------------------------- */}

      <div class="report_box">
        <select
          class=""
          onChange={(e) => {
            setCycle(e.target.value);
            // console.log(e.target.value);
          }}
        >
          <option>Select Cycle Period</option>
          {cycleperiod.map((x) => {
            return <option value={x.id}>{x.name}</option>;
          })}
        </select>
        {/* ---------------------------- {Plan Type} ----------------------------------------------------------- */}

        <select
          onChange={(e) => {
            setPlan(e.target.value);
          }}
        >
          <option>Select Plan Type</option>
          <option value="standard">Standard</option>
          <option value="flexi">Flexi</option>
        </select>
        {/* ---------------------------- Status ----------------------------------------------------------- */}
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option>Select Type</option>

          <option value="running">Running</option>
          <option value="completed">Completed</option>
          <option value="forfieted">ForFieted</option>
        </select>
        {/* ---------------------------- Skip Count ----------------------------------------------------------- */}

        <input
          type="number"
          placeholder="Skip Count"
          onChange={(e) => {
            setSkipCount(e.target.value);
          }}
        />
        {/* ---------------------------- Unpaid Skip ----------------------------------------------------------- */}

        <input
          type="number"
          placeholder="Unpaid Skip"
          onChange={(e) => {
            setUnpaidSkips(e.target.value);
          }}
        />
        {/* ---------------------------- Unpaid Investment ----------------------------------------------------------- */}

        <input
          type="number"
          placeholder="Unpaid Investment Skip"
          onChange={(e) => {
            setUnpaidInvestment(e.target.value);
          }}
        />
        {/* ---------------------------- Duration ----------------------------------------------------------- */}

        <input
          type="number"
          placeholder="Duration"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
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