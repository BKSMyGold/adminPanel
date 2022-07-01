import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { BASE_URL } from "../Constants";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { CSVLink } from "react-csv";
//===============================================================
const UserDataCycle = () => {
//===============================================================
  function tableToCSV1() {
    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    var rows = document.getElementsByClassName("table1");
    for (var i = 0; i < rows.length; i++) {
      // Get each column data
      var cols = rows[i].querySelectorAll("td,th");

      // Stores each csv row data
      var csvrow = [];
      for (var j = 0; j < cols.length; j++) {
        // Get the text data of each cell of
        // a row and push it to csvrow
        csvrow.push(cols[j].innerHTML);
      }

      // Combine each column value with comma
      csv_data.push(csvrow.join(","));
    }
    // combine each row data with new line character
    csv_data = csv_data.join("\n");

    /* We will use this function later to download
    the data in a csv file downloadCSVFile(csv_data);
    */
    downloadCSVFile(csv_data);
  }
//===============================================================
  function downloadCSVFile(csv_data) {
    // Create CSV file object and feed our
    // csv_data into it
    let CSVFile = new Blob([csv_data], { type: "text/csv" });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement("a");

    // Download csv file
    temp_link.download = "report.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
  }


  function tableToCSV() {
    // Variable to store the final csv data
    var csv_data = [];

    // Get each row data
    var rows = document.getElementsByClassName("table0");
    for (var i = 0; i < rows.length; i++) {
      // Get each column data
      var cols = rows[i].querySelectorAll("td,th");

      // Stores each csv row data
      var csvrow = [];
      for (var j = 0; j < cols.length; j++) {
        // Get the text data of each cell of
        // a row and push it to csvrow
        csvrow.push(cols[j].innerHTML);
      }

      // Combine each column value with comma
      csv_data.push(csvrow.join(","));
    }
    // combine each row data with new line character
    csv_data = csv_data.join("\n");

    /* We will use this function later to download
    the data in a csv file downloadCSVFile(csv_data);
    */
    downloadCSVFile(csv_data);
  }

//===============================================================
  const [CyclePeriod, setCyclePeriod] = useState([]);
  const [Standardplan, setStandardplans] = useState([]);
  const [standardSubscriptionsByCyclePeriod, setStandardSubscriptions] =
    useState([]);
  const [flexiSubscriptionsByCyclePeriod, setFlexiSubscriptions] = useState([]);
  const [Users, setUsers] = useState([]);
  const [sub, setSub] = useState([]);

  //===================================================================================
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription/`)
      .then((res) => setSub(res.data.subscriptions));
  }, []);
  console.log("==>", sub);
//===============================================================
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/cycle-period/`)
      .then((res) => setCyclePeriod(res.data));
  }, []);
  // console.log('==>', CyclePeriod)
//===============================================================
  let cycleName = [];
  cycleName = CyclePeriod.map((name) => name.name);
  console.log("==>", cycleName);

  let cycleSub = sub.filter((sub) => {
    if (sub.plan && sub.plan.cyclePeriod.name === cycleName[0]) {
      //  console.log('===>', sub.plan.cyclePeriod.name)
      return sub;
    }
  });
  console.log("Mil gaya =====>", cycleSub);
//===============================================================
  let cycleSub2 = sub.filter((sub) => {
    if (sub.customPlan && sub.customPlan.cyclePeriod.name === cycleName[1]) {
      //  console.log('===>', sub.plan.cyclePeriod.name)
      return sub;
    }
  });
  console.log("Mil gaya again=====>", cycleSub2);
  //===================================================================================

  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <Header />

            <div
              id="kt_content_container"
              class="d-flex flex-column-fluid align-items-start container-xxl mt-20"
            >
              {/*begin::Post*/}
              <div class="content flex-row-fluid" id="kt_content">
                {/*begin::Row*/}

                {/*begin::Tables Widget 13*/}
                <div class="card mb-5 mb-xl-8">
                  {/*begin::Header*/}
                  <div class="card-header border-0 pt-5">
                    <h3 class="card-title align-items-start flex-column">
                      <span class="card-label fw-bolder fs-3 mb-1">
                        User Details As Per Cycle Period
                      </span>
                      <span class="text-muted mt-1 fw-bold fs-7">
                        All Users Data as per Cycle Periods
                      </span>
                    </h3>
                  </div>

                  <div class="card-body py-3">
                      <h1 class="">{cycleName[0]}</h1>
                    <div class="exportables">
                      <button
                        class="pdf_button"
                        onClick={() => {
                          const doc = new jsPDF();

                          doc.autoTable({
                            html: "#my-table",
                            styles: {
                              overflow: "linebreak",
                              fontSize: 9,
                            },
                          });
                          doc.save("Report");
                        }}
                      >
                       
                      </button>
                      <button class="csv_button" onClick={tableToCSV}></button>
                    </div>
                    <div class="table-responsive">
                      <table
                        class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3 "
                        id="my-table"
                      >
                        <thead>
                          <tr class="fw-bolder text-muted table0">
                            <th class="min-w-150px">Id</th>
                            <th class="min-w-140px">Customer Name</th>
                            <th class="min-w-140px">Cycle Name</th>
                            <th class="min-w-100px">Plan Type</th>
                            <th class="min-w-100px">Mode</th>
                            <th class="min-w-120px">Maturity Date</th>
                            <th class="min-w-120px">Status</th>
                            <th class="min-w-100px ">Saved Gold</th>
                            <th class="min-w-100px ">Maturity Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {cycleSub.map((Users) => {
                            if (Users.plan !== undefined) {
                              return (
                                <tr class='table0'>
                                  <td>{Users.user.id}</td>
                                  <td>{Users.user.fname}</td>
                                  <td>
                                    {Users.plan.cyclePeriod.name
                                      ? Users.plan.cyclePeriod.name
                                      : "Name"}
                                  </td>
                                  <td>{Users.plan.planType}</td>
                                  <td>{Users.plan.mode}</td>
                                  <td>{Users.maturityDate.substring(0, 10)}</td>
                                  <td>{Users.status}</td>
                                  <td>
                                    {Users.installments.map((x) => x.gold)} gm
                                  </td>
                                  <td>
                                    {Users.installments.map((x) => x.status)}
                                  </td>
                                </tr>
                              );
                            }
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/*end::Table container*/}
                  </div>

                  <div class="card-body py-3">
                    {/* <h1>{cycle.name}</h1> */}
                    <h1>{cycleName[1]}</h1>
                    <div class="exportables">
                      <button
                        class="pdf_button"
                        onClick={() => {
                          const doc = new jsPDF();

                          doc.autoTable({
                            html: "#my-table1",
                            styles: {
                              overflow: "linebreak",
                              fontSize: 9,
                            },
                          });
                          doc.save("Report");
                        }}
                      >
                       
                      </button>
                      <button class="csv_button" onClick={tableToCSV1}></button>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3"  id="my-table1">
                        <thead>
                          <tr class="fw-bolder text-muted table1">
                            <th class="min-w-150px">Id</th>
                            <th class="min-w-140px">Customer Name</th>
                            <th class="min-w-140px">Cycle Name</th>
                            <th class="min-w-100px">Plan Type</th>
                            <th class="min-w-100px">Mode</th>
                            <th class="min-w-120px">Maturity Date</th>
                            <th class="min-w-120px">Status</th>
                            <th class="min-w-100px ">Saved Gold</th>
                            <th class="min-w-100px ">Maturity Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {cycleSub2.map((Users) => {
                            if (Users.plan !== undefined) {
                              return (
                                <tr class ="table1">
                                  <td>{Users.user.id}</td>
                                  <td>{Users.user.fname}</td>
                                  <td>{Users.customPlan.cyclePeriod.name}</td>
                                  <td>{Users.customPlan.planType}</td>
                                  <td>
                                    {Users.customPlan.mode || Users.plan.mode}
                                  </td>
                                  <td>{Users.maturityDate.substring(0,10)}</td>
                                  <td>{Users.status}</td>
                                  <td>
                                    {Users.installments.map((x) => x.gold)} gm
                                  </td>
                                  <td>
                                    {Users.installments.map((x) => x.status)}
                                  </td>
                                </tr>
                              );
                            }
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/*end::Table container*/}
                  </div>

                  {/* ))} */}
                  {/*begin::Body*/}
                </div>
                {/*end::Tables Widget 13*/}
              </div>
              {/*end::Post*/}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDataCycle;
