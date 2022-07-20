import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
import { isValidStandardPlan } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addPlan, updatePlan } from "../APIs_Hai/Plan";
import { getCyclePeriod } from "../APIs_Hai/CyclePeriod";
//===========================================================================

const StandardPlanForm = (props) => {
  //===========================================================================
  let location = useLocation();
  let navigate = useNavigate();
  //===========================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [plan, setPlan] = useState(
    location?.state ?? {
      name: "",
      cyclePeriod: "",
      duration: 0,
      type: "standard",
      mode: "",
      min: 0,
      // lockinPeriod: 0,
      // maxSkipCount: 0,
      // maxUnpaidSkipCount: 0,
      // maxUnpaidInvestment: 0,
    }
  );
  //===========================================================================
  const [cycleperiods, setCyclePeriods] = useState([]);
  useEffect(() => {
    getCyclePeriod().then((res) => setCyclePeriods(res.data.data.data));
  }, []);
  console.log(cycleperiods);
  //===========================================================================

  //===========================================================================
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
                      {isUpdate ? "Update Standard Plan" : "Add Standard Plan"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Standard Plan" : "Add Standard Plan"}
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
                          <span class="required">Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the name of the plan"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Name of the Plan"
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              name: e.target.value,
                            })
                          }
                          value={plan.name}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Cycle Period</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the cycle period"
                          ></i>
                        </label>
                        <select
                          name="cyclePeriod"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Name of the Plan"
                          value={plan.cyclePeriod}
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              cyclePeriod: e.target.value,
                            })
                          }
                        >
                          <option>_____</option>
                          {cycleperiods.map((cycleperiods) => (
                            <option value={cycleperiods.id}>
                              {cycleperiods.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Duration</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify Duration"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="duration"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Duration in Number"
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              duration: Number(e.target.value),
                            })
                          }
                          value={plan.duration}
                        />
                      </div>


                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Locking Period</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Set the Locking Period"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="lockinPeriod"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the LockingPeriod"
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              lockinPeriod: Number(e.target.value),
                            })
                          }
                          value={plan.lockinPeriod}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Max Skip Count</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify max Skip Count"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="maxSkipCount"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Max Skip Count"
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              maxSkipCount: Number(e.target.value),
                            })
                          }
                          value={plan.maxSkipCount}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Max Unpaid Skip Count</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify max Unpaid Skip Count"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="maxUnpaidSkipCount"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Max Unpaid Skip Count"
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              maxUnpaidSkipCount: Number(e.target.value),
                            })
                          }
                          value={plan.maxUnpaidSkipCount}
                        />
                      </div>


                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Max UnpaidI nvestment</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify Max Unpaid Investment"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="maxUnpaidInvestment"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Max Unpaid Investment"
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              maxUnpaidInvestment: Number(e.target.value),
                            })
                          }
                          value={plan.maxUnpaidInvestment}
                        />
                      </div> */}






                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Minimum</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify Min Value"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="min"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Duration in Number"
                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              min: Number(e.target.value),
                            })
                          }
                          value={plan.min}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Select Mode</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify mode"
                          ></i>
                        </label>
                        <select
                          name="mode"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter mode"
                          value={plan.mode}

                          onChange={(e) =>
                            setPlan({
                              ...plan,
                              mode: e.target.value,
                            })
                          }
                        >
                          <option>_____</option>
                          <option value="weight">By Weight</option>
                          <option value="value">By Value</option>
                        </select>
                      </div>

                      {/* <div>
                        <br/>
                        <button className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidStandardPlan({ ...StandardPlan })) {
                              isUpdate
                                ? updateStandardPlan({ ...StandardPlan }).then(
                                    () => {
                                      navigate(
                                        "/master/plans/standard-plans/"
                                      );
                                    }
                                  )
                                : addStandardPlan({ ...StandardPlan }).then(() => {
                                    navigate(
                                      "/master/plans/standard-plans/"
                                    );
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Standard Plan" : "Add Standard Plan"}
                        </button>
                      </div> */}
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={plan}
                        adding={addPlan}
                        updating={updatePlan}
                        url={"/master/plans/standard-plans/"}
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

export default StandardPlanForm;
