import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
import jsPDF from "jspdf";

//=======================================================================================
const UserDataPlan = () => {
  const [Standardplan, setStandardplans] = useState([]);
  const [standardSubscriptions, setStandardSubscriptions] = useState([]);
  const [flexiSubscriptions, setFlexiSubscriptions] = useState([]);
  const [Users, setUsers] = useState([]);
  //=======================================================================================
  //=============================================================================================================
  useEffect(() => { 
    axios
      .get(`${BASE_URL}/api/plan/type/standard`)
      .then((res) => setStandardplans(res.data.data));
  }, []);
  // console.log("Standardplan : ==>", Standardplan);
  //=============================================================================================================
  useEffect(() => {
    axios.get(`${BASE_URL}/api/user`).then((res) => setUsers(res.data));
  }, []);
  // console.log('users : ==>',Users)
  //=============================================================================================================
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription`)
      .then((res) => setStandardSubscriptions(res.data.subscriptions));
  }, []);
  console.log("standardSubscriptions : ==>", standardSubscriptions);
  //=============================================================================================================

  let sub12month = [];
  sub12month =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.plan && sub.plan.name === "12 month Savings Plan") {
        return sub.user;
      }
    });

  // console.log("12 month waale : ==>", sub12month);

  let sub12monthCycle = [];
  sub12monthCycle =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.plan && sub.plan.name === "12 Months Savings Plan") {
        return sub.plan.cyclePeriod;
      }
    });

  // console.log("12 month waali Cycle : ==>", sub12monthCycle);
  // console.log("Ajooba : ==>", sub12month.concat(sub12monthCycle));

  // let arr = sub12monthCycle.concat(sub12month);

  let sub24month = [];
  sub24month =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.plan && sub.plan.name === "24 month Savings Plan") {
        return sub.user;
      }
    });

  // console.log("24 month waale : ==>", sub24month);

  let flexi = [];
  flexi =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.customPlan && sub.customPlan.name === "Flexi Plan") {
        return sub.user;
      }
    });

  console.log("flexi : ==>", flexi);

  //=============================================================
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
function tableToCSV2() {
  // Variable to store the final csv data
  var csv_data = [];

  // Get each row data
  var rows = document.getElementsByClassName("table2");
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


  //=============================================================================================================
  return (
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
                      User Details As Per Plan
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      All Users Data as per Plan
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                {/* {Standardplan &&
                  Standardplan.map((Standard) => ( */}
                <div class="card-body py-3">
                  <h1>12 Months Savings Plan</h1>
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
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3" id="my-table">
                      <thead>
                        <tr class="fw-bolder text-muted table0">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Mobile</th>

                          <th class="min-w-100px">Email</th>
                          <th class="min-w-120px">PAN</th>
                        </tr>
                      </thead>

                      <tbody>
                        {sub12month.map((sub12month) => {
                          if (sub12month !== undefined) {
                            return (
                              <tr class="table0">
                                <td>{sub12month.id}</td>
                                <td>{sub12month.fname}</td>
                                <td>{sub12month.mobile}</td>
                                <td>{sub12month.email}</td>
                                <td>
                                  {sub12month.pan ? sub12month.pan : "NaN"}
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card-body py-3">
                  <h1>24 Months Savings Plan</h1>
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
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3" id ="my-table1">
                      <thead>
                        <tr class="fw-bolder text-muted table1">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Mobile</th>
                          <th class="min-w-100px">Email</th>
                          <th class="min-w-120px">PAN</th>
                        </tr>
                      </thead>

                      <tbody>
                        {sub24month.map((sub24month) => {
                          if (typeof sub24month !== "undefined") {
                            return (
                              <tr class="table1">
                                <td>{sub24month.id}</td>
                                <td>{sub24month.fname}</td>
                                <td>{sub24month.mobile}</td>
                                <td>{sub24month.email}</td>
                                <td>
                                  {sub24month.pan ? sub24month.pan : "NaN"}
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card-body py-3">
                  <h1>Flexi Plan</h1>
                  <div class="exportables">
                      <button
                        class="pdf_button"
                        onClick={() => {
                          const doc = new jsPDF();

                          doc.autoTable({
                            html: "#my-table2",
                            styles: {
                              overflow: "linebreak",
                              fontSize: 9,
                            },
                          });
                          doc.save("Report");
                        }}
                      >
                       
                      </button>
                      <button class="csv_button" onClick={tableToCSV2}></button>
                    </div>
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3" id="my-table2">
                      <thead>
                        <tr class="fw-bolder text-muted table2">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Full Name</th>
                          <th class="min-w-120px">Mobile</th>
                          <th class="min-w-120px">Email</th>

                          <th class="min-w-120px">PAN</th>
                        </tr>
                      </thead>

                      <tbody>
                        {flexi.map((Users) => {
                          if (Users !== undefined) {
                            return (
                              <tr class="table2">
                                <td>{Users.id}</td>
                                <td>{Users.fname}</td>
                                <td>{Users.mobile}</td>
                                <td>{Users.email}</td>
                                <td>{Users.pan ? Users.pan : "Nan"}</td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

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
  );
};

export default UserDataPlan;
