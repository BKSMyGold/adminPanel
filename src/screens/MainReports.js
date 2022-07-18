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
//================================================================
let reportEndpoint = {
  instant: `${ADMIN_API}/reports/transactions`,
  buy_save: `${ADMIN_API}/reports/transactions`,
  buy_reserve: `${ADMIN_API}/reports/transactions`,
  sell_reserve: `${ADMIN_API}/reports/transactions`,
  ecom: `${ADMIN_API}/reports/transactions`,
};
//================================================================
export default function MainReports() {
  const [module, setModule] = React.useState("");
  const [type, setType] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");

  //================================================================
  const [reportData, setReportData] = React.useState([]);
  React.useEffect(() => {
    getReport(reportEndpoint[module], { module, type, status, from, to }).then(
      (res) => setReportData(res.data)
    );
  }, [module, type, status, from, to]);
  //================================================================
  let sample = [
    {
      amount: 30793.28,
      buyRate: 13048,
      createdAt: "2022-07-16T06:48:35.202Z",
      docType: "TransactionV1",
      effectOn: "VG",
      gold: 2,
      id: "62d25f432abf0e6b3abef93a",
      module: "instant",
      orderId: "order_Jtw2erzoiwVtsx",
      paymentId: "pay_Jtw48zbnl0MksN",
      sellRate: 13037,
      status: "completed",
      type: "credit",
      updatedAt: "2022-07-16T06:48:35.202Z",
      userId: "62b5d93bd7431b9844878077",
      user: {
        _id: "62b5d93bd7431b9844878077",
        mobile: "8277314517",
        gold: 0,
        referralCode: "BKSREF_DH2W85",
        isWhatsapp: true,
        isInvested: false,
        addresses: [],
        createdAt: "2022-06-24T15:33:15.724Z",
        updatedAt: "2022-07-11T13:42:35.522Z",
        __v: 0,
        dob: "4-12-2002",
        email: "yuvaraj@bksgold.com",
        pan: "xxxx",
        image: "user/pJd99-D~_gold.jpg",
        fullName: "Yuva",
        userType: 1,
        isDeleted: false,
        loginRetryLimit: 0,
        mpin: "$2b$10$d30FLMSmFWr0TAA51t4QXOtPwuRzGAhq2lNSrORRqtsWbz7gWkoKW",
      },
    },
    {
      amount: 30793.28,
      buyRate: 13048,
      createdAt: "2022-07-16T07:28:54.223Z",
      docType: "TransactionV1",
      effectOn: "VG",
      gold: 2,
      id: "62d268b6f090193db979fa7a",
      module: "instant",
      orderId: "order_Jtw2erzoiwVtsx",
      paymentId: "pay_Jtw48zbnl0MksN",
      sellRate: 13037,
      status: "completed",
      type: "credit",
      updatedAt: "2022-07-16T07:28:54.223Z",
      userId: "62b5d93bd7431b9844878077",
      user: {
        _id: "62b5d93bd7431b9844878077",
        mobile: "8277314517",
        gold: 0,
        referralCode: "BKSREF_DH2W85",
        isWhatsapp: true,
        isInvested: false,
        addresses: [],
        createdAt: "2022-06-24T15:33:15.724Z",
        updatedAt: "2022-07-11T13:42:35.522Z",
        __v: 0,
        dob: "4-12-2002",
        email: "yuvaraj@bksgold.com",
        pan: "xxxx",
        image: "user/pJd99-D~_gold.jpg",
        fullName: "Yuva",
        userType: 1,
        isDeleted: false,
        loginRetryLimit: 0,
        mpin: "$2b$10$d30FLMSmFWr0TAA51t4QXOtPwuRzGAhq2lNSrORRqtsWbz7gWkoKW",
      },
    },
    {
      amount: 9800,
      buyRate: 4960,
      createdAt: 1657964878196,
      docType: "TransactionV1",
      effectOn: "VG",
      gold: 2,
      id: "62d2894eb20c07ae9d743c21",
      module: "instant",
      requestId: "62d2894eb20c07ae9d743c22",
      sellRate: 4900,
      status: "processing",
      type: "debit",
      updatedAt: 1657964878196,
      userId: "62b5d93bd7431b9844878077",
      user: {
        _id: "62b5d93bd7431b9844878077",
        mobile: "8277314517",
        gold: 0,
        referralCode: "BKSREF_DH2W85",
        isWhatsapp: true,
        isInvested: false,
        addresses: [],
        createdAt: "2022-06-24T15:33:15.724Z",
        updatedAt: "2022-07-11T13:42:35.522Z",
        __v: 0,
        dob: "4-12-2002",
        email: "yuvaraj@bksgold.com",
        pan: "xxxx",
        image: "user/pJd99-D~_gold.jpg",
        fullName: "Yuva",
        userType: 1,
        isDeleted: false,
        loginRetryLimit: 0,
        mpin: "$2b$10$d30FLMSmFWr0TAA51t4QXOtPwuRzGAhq2lNSrORRqtsWbz7gWkoKW",
      },
    },
    {
      amount: 4900,
      buyRate: 4960,
      createdAt: 1657967442893,
      docType: "TransactionV1",
      effectOn: "VG",
      gold: 1,
      id: "62d29352baaa3e3b2ce261cf",
      module: "instant",
      requestId: "62d29352baaa3e3b2ce261d0",
      sellRate: 4900,
      status: "processing",
      type: "debit",
      updatedAt: 1657967442893,
      userId: "62b5d93bd7431b9844878077",
      user: {
        _id: "62b5d93bd7431b9844878077",
        mobile: "8277314517",
        gold: 0,
        referralCode: "BKSREF_DH2W85",
        isWhatsapp: true,
        isInvested: false,
        addresses: [],
        createdAt: "2022-06-24T15:33:15.724Z",
        updatedAt: "2022-07-11T13:42:35.522Z",
        __v: 0,
        dob: "4-12-2002",
        email: "yuvaraj@bksgold.com",
        pan: "xxxx",
        image: "user/pJd99-D~_gold.jpg",
        fullName: "Yuva",
        userType: 1,
        isDeleted: false,
        loginRetryLimit: 0,
        mpin: "$2b$10$d30FLMSmFWr0TAA51t4QXOtPwuRzGAhq2lNSrORRqtsWbz7gWkoKW",
      },
    },
    {
      amount: 6742.52,
      buyRate: 5714,
      createdAt: "2022-07-17T08:54:20.717Z",
      docType: "TransactionV1",
      effectOn: "VG",
      gold: 1,
      id: "62d3ce36887a98ba87be66ad",
      module: "buy_save",
      orderId: "order_JuNABDKJWbVowe",
      paymentId: "pay_JuNBWING3hPJsD",
      sellRate: 5706,
      status: "completed",
      type: "credit",
      updatedAt: "2022-07-17T08:54:20.717Z",
      userId: "62b5d93bd7431b9844878077",
      user: {
        _id: "62b5d93bd7431b9844878077",
        mobile: "8277314517",
        gold: 0,
        referralCode: "BKSREF_DH2W85",
        isWhatsapp: true,
        isInvested: false,
        addresses: [],
        createdAt: "2022-06-24T15:33:15.724Z",
        updatedAt: "2022-07-11T13:42:35.522Z",
        __v: 0,
        dob: "4-12-2002",
        email: "yuvaraj@bksgold.com",
        pan: "xxxx",
        image: "user/pJd99-D~_gold.jpg",
        fullName: "Yuva",
        userType: 1,
        isDeleted: false,
        loginRetryLimit: 0,
        mpin: "$2b$10$d30FLMSmFWr0TAA51t4QXOtPwuRzGAhq2lNSrORRqtsWbz7gWkoKW",
      },
    },
  ];

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
      headerName: "Buy Rate",
      width: 150,
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
    },
  ];
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
          rows={sample}
          columns={column}
          components={{ Toolbar: GridToolbar }}
        />
      </div>

      <Footer />
    </>
  );
}
