import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";

const CollectorSummary = () => {
  const [installments, setInstallments] = useState([]);
  useEffect(() => {
    const fetchcategories = async () => {
      const data = await axios.get(`${BASE_URL}/api/installment`);
      // console.log("===-------------------->",data.data.data)

      // response = response.data.map(installment =>{
      //   if(installment.mode === "Online"){
      //     return(
      //       installment
      //     )
      //   }
      // } )

      setInstallments(data.data.data);
    };
    fetchcategories();
  }, []);
  console.log("==>", installments);
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard />
          <div
            id="kt_content_container"
            class="d-flex flex-column-fluid align-items-start container-xxl"
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
                      CollectorSummary
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Define CollectorSummary
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    {/*begin::Table*/}
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      {/*begin::Table head*/}
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Collection Request Id</th>
                          <th class="min-w-140px">Amount</th>
                          <th class="min-w-120px">Weight of Gold</th>
                          <th class="min-w-120px">Mode</th>
                          <th class="min-w-120px">Status</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {installments.map((installment) => {
                          if (installment.mode === "COD") {
                            return (
                              <tr>
                                <td>
                                  <div class="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      class="form-check-input widget-13-check"
                                      type="checkbox"
                                      value="1"
                                    />
                                    {installment.collector ? installment.collector : "collector ID"}
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    class="text-dark fw-bolder text-hover-primary fs-6"
                                  >
                                    ₹ {installment.amount}
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                                  >
                                    {installment.gold} GRAM
                                  </a>
                                </td>
                                <td>
                                  
                                    <a
                                      href="#"
                                      class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                                    >
                                      {installment.mode}
                                    </a>
                                  </td>
                                  <td>
                                  <a
                                    href="#"
                                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                                  >
                                    {installment.status}
                                  </a>
                                </td>

                             
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
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

export default CollectorSummary;
