import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addLoanInterestRates,updateLoanInterestRates } from "../APIs_Hai/LoanInterestRates";
//===================================================================================
const LoanInterestRatesForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log("---------=============---->",location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [loanInterestRates, setLoanInterestRates] = useState(
    location?.state ?? {
        minMonth:0,
        maxMonth:0,
        interest:0
    }
  );
  //===================================================================================



    //===================================================================================

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* < Dashboard /> */}
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
                      {isUpdate ? "Update Loan Interest Rates" : "Add Loan Interest Rates"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Loan Interest Rates" : "Add Loan Interest Rates"}
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    <form>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Minimum Month</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the minimum duration of Loan"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="minMonth"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the minimum duration of Loan"
                          onChange={(e) =>
                            setLoanInterestRates({
                              ...loanInterestRates,
                              minMonth: Number(e.target.value),
                            })
                          }
                            value={loanInterestRates.minMonth}                          
                        />
                      </div>


                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5" >
                          <span class="required">Maximum Month</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Maximum duration of Loan"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="maxMonth"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Maximum duration of Loan"
                          onChange={(e) =>
                            setLoanInterestRates({
                              ...loanInterestRates,
                              maxMonth: Number(e.target.value),
                            })
                          }
                            value={loanInterestRates.maxMonth}                          
                        />
                      </div>


                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Interest</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Interest Rate"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="interest"
                          className="form-control form-control-lg form-control-solid mb-5"
                          placeholder="Enter the Interest Rate"
                          onChange={(e) =>
                            setLoanInterestRates({
                              ...loanInterestRates,
                              interest: Number(e.target.value),
                            })
                          }
                            value={loanInterestRates.interest}                          
                        />
                      </div>

                  
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={loanInterestRates}
                        adding={addLoanInterestRates}
                        updating={updateLoanInterestRates}
                        url={"/master/loan_intrest_rates"}
                      />
                    </form>
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

export default LoanInterestRatesForm;
