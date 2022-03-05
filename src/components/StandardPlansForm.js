import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
import { isValidStandardPlan } from "../Validator";
import { addStandardPlan, updateStandardPlan } from "../apis/StandardPlan";


const StandardPlanForm = (props) => {
  let location = useLocation();

  let navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [StandardPlan, setStandardPlan] = useState(
    location?.state ?? {
        name: "",
        cyclePeriod: "",
        duration: "",
        calcId: "",
        mode: "",
    }
  );

  const [cycleperiods, setCyclePeriods] = useState([]);
  useEffect(() => {
    const fetchcycleperiods = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/api/cycle-period`
      );

      setCyclePeriods(data);
    };
    fetchcycleperiods();
  }, []);
  const [taxes,setTaxesDuties] = useState([])
  useEffect(()=>{
       const fetchtaxes = async()=>{
           const {data} = await axios.get('http://13.59.57.74:5000/api/calculation/')
           
           setTaxesDuties(data.data)
       }
       fetchtaxes()
  },[])  
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
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Name of the Plan"
                          onChange={(e) =>
                            setStandardPlan({
                              ...StandardPlan,
                              name: e.target.value,
                            })
                          }
                          value={StandardPlan.name}
                        />
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Cycle Period</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <select
                         
                          name="cyclePeriod"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Name of the Plan"
                          onChange={(e) =>
                            setStandardPlan({
                              ...StandardPlan,
                              cyclePeriod: e.target.value,
                            })
                          }
                         
                        >
                       {cycleperiods.map((cycleperiods) => (
                            <option value={cycleperiods.id}>{cycleperiods.name}</option> ))}
                        </select>
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Duration</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="number"
                          name="duration"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Duration in Number"
                          onChange={(e) =>
                            setStandardPlan({
                              ...StandardPlan,
                              duration: Number(e.target.value),
                            })
                          }
                          value={StandardPlan.duration}
                        />
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Select Tax on Plan</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <select
                         
                          name="calcId"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Name of the Plan"
                          onChange={(e) =>
                            setStandardPlan({
                              ...StandardPlan,
                              calcId: e.target.value,
                            })
                          }
                         
                        >
                         {taxes.map((taxes)=>(
                            <option value={taxes.id}>{taxes.Type}</option> ))}
                        </select>
                      </div>
                     
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Select Mode</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <select
                         
                          name="mode"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Name of the Plan"
                          onChange={(e) =>
                            setStandardPlan({
                              ...StandardPlan,
                              mode: e.target.value,
                            })
                          }
                         
                        >
                        
                            <option value="weight">By Weight</option> 
                            <option value="value">By Value</option> 
                        </select>
                      </div>
                     
                      <div>
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
                      </div>
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
