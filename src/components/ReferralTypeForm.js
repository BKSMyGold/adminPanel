import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidCollection } from "../Validator";
import axios from "axios";
import { addReferralType, updateReferralType } from "../APIs_Hai/ReferralType";
import AddUpdateSpinner from "../AddUpdateSpinner";
//=====================================================================
const ReferralTypeForm = (props) => {
  //=====================================================================
  let location = useLocation();
  let navigate = useNavigate();
  //=====================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [referralType, setReferralType] = useState(
    location?.state ?? {
      userType: "",
      referredBonus: 0,
      joiningBonus:{
        min:0,
        max:0
      },

      criteria: "",
    }
  );
  //=====================================================================
  useEffect(() => {
   if(location.state) setReferralType(location.state)
  }, [location.state]);



  console.log(referralType)
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* <Dashboard/> */}
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
                      {isUpdate ? "Update Referral Type" : "Add Referral Type"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Referral Type" : "Add Referral Type"}
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
                          <span class="required">User Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the User Type"
                          ></i>
                        </label>

                        <select
                          name="userType"
                          className="form-control form-control-lg form-control-solid"
                          onChange={(e) =>
                            setReferralType({
                              ...referralType,
                              userType: e.target.value,
                            })
                          }
                          value={referralType.userType}
                        >
                          <option>Choose User Type</option>
                          <option value="customer">Customer</option>
                          <option value="sales_offer">Sales Offers</option>
                          <option value="sales_associate">
                            Sales Associate
                          </option>
                          <option value="vip">VIP</option>
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Referred Bonus</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Referred Bonus"
                          ></i>
                        </label>

                        <input
                          class="form-control"
                          type="number"
                          name="referredBonus"
                          placeholder="Enter the Referred Bonus"
                          onChange={(e) => {
                            setReferralType({
                              ...referralType,
                              referredBonus: e.target.value,
                            });
                          }}
                          value={referralType.referredBonus}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Minimum Percentage</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the minimum percentage for bonus"
                          ></i>
                        </label>

                        <input
                          type="number"
                          class="form-control"
                          name="min"
                          placeholder="Enter the minimum percentage for bonus"
                          onChange={(e) => {
                            setReferralType({
                              ...referralType,
                              joiningBonus:{
                               ...referralType.joiningBonus,
                               min: e.target.value,
                                
                              }
                            });
                          }}
                          value={referralType.joiningBonus.min}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Maximum Amount</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Maximum Amount"
                          ></i>
                        </label>

                        <input
                          class="form-control"
                          type="number"
                          name="max"
                          placeholder="Enter the Maximum Amount Applicable for Referral"
                          onChange={(e) => {
                            setReferralType({
                              ...referralType,
                              joiningBonus:{
                               ...referralType.joiningBonus,
                               max: e.target.value,
                                
                              }
                            });
                          }}
                          value={referralType.joiningBonus.max}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Criteria</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Criteria"
                          ></i>
                        </label>

                        <select
                          type="text"
                          name="criteria"
                          className="form-control form-control-lg form-control-solid mb-5"
                          placeholder="Select Language"
                          defaultValue={referralType.criteria}
                          onChange={(e) =>
                            setReferralType({
                              ...referralType,
                              criteria: e.target.value,
                            })
                          }
                        >
                          <option>Choose Criteria</option>
                          <option value="plan_maturity">Plan Maturity</option>
                          <option value="download_subscriptions">
                            Download Subscriptions
                          </option>
                        </select>
                      </div>

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={referralType}
                        adding={addReferralType}
                        updating={updateReferralType}
                        url={"/master/referral_type"}
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ReferralTypeForm;
