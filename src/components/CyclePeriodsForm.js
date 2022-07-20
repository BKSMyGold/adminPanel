import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidCyclePeriod } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addCyclePeriod, updateCyclePeriod } from "../APIs_Hai/CyclePeriod";
//======================================================================
const CyclePeriodsForm = (props) => {
  //======================================================================
  let location = useLocation();
  let navigate = useNavigate();
  //======================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [CyclePeriod, setCyclePeriod] = useState(
    location?.state ?? {
      name: "",
      shortName:"", 
      gracePeriod: 0,
      cycle: 0,
      lockinPeriod: 0,
      maxSkipCount: 0,
      maxUnpaidSkipCount: 0,
      maxUnpaidInvestment: 0,
    }
  );
  //======================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* <Dashboard /> */}
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
                      {isUpdate ? "Update Cycle Periods" : "Add Cycle Periods"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Cycle Periods" : "Add Cycle Periods"}
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
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Cycle Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify  Cycle Name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Cycle Period Name"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              name: e.target.value,
                            })
                          }
                          value={CyclePeriod.name}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Cycle Short Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify Cycle Period Short Name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="shortName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Cycle Period Short Name"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              shortName: e.target.value,
                            })
                          }
                          value={CyclePeriod.shortName  }
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Grace Period in Hours</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify graceperiod"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="graceperiod"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Grace Period in Hours"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              gracePeriod: Number(e.target.value),
                            })
                          }
                          value={CyclePeriod.gracePeriod}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Value</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Value of the Cycle"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="value"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Short Name"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              cycle: Number(e.target.value),
                            })
                          }
                          value={CyclePeriod.cycle}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Locking Period</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Locking Period"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="lockinPeriod"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Locking Period"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              lockinPeriod: Number(e.target.value),
                            })
                          }
                          value={CyclePeriod.lockinPeriod}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Max Skip Count</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the max Skip Count"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="maxSkipCount"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter max Skip Count"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              maxSkip: Number(e.target.value),
                            })
                          }
                          value={CyclePeriod.maxSkip}
                        />
                      </div>


                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Max Unpaid Skip Count</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify Max Unpaid Skip Count"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="value"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter max Unpaid Skip Count"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              maxUnpaidSkip: Number(e.target.value),
                            })
                          }
                          value={CyclePeriod.maxUnpaidSkip}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Max Unpaid Investment</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the max Unpaid Investment"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="maxUnpaidInvestment"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter max Unpaid Investment"
                          onChange={(e) =>
                            setCyclePeriod({
                              ...CyclePeriod,
                              maxUnpaidInvestment: Number(e.target.value),
                            })
                          }
                          value={CyclePeriod.maxUnpaidInvestment}
                        />
                      </div>


                      {/* <div>
                        <br/>
                        <button className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidCyclePeriod({ ...CyclePeriod })) {
                              isUpdate
                                ? updateCyclePeriod({ ...CyclePeriod }).then(
                                    () => {
                                      navigate(
                                        "/master/plans/cycle-periods"
                                      );
                                    }
                                  )
                                : addCyclePeriod({ ...CyclePeriod }).then(() => {
                                    navigate(
                                      "/master/plans/cycle-periods"
                                    );
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Cycle Periods" : "Add Cycle Periods"}
                        </button>
                      </div> */}

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={CyclePeriod}
                        adding={addCyclePeriod}
                        updating={updateCyclePeriod}
                        url={"/master/plans/cycle-periods"}
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

export default CyclePeriodsForm;
