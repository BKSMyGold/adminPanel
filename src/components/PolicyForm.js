import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { ADMIN_API } from "../Constants";
import { addPolicy, updatePolicy } from "../APIs_Hai/Policy";
//===================================================================================
const PolicyForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log("---------=============---->", location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [policy, setPolicy] = useState(
    location?.state ?? {
      title: "",
      description: "",
      consignmentRequired: "",
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
                      {isUpdate ? "Update Policy" : "Add Policy"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Policy" : "Add Policy"}
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
                          <span class="required">Description</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the description"
                          ></i>
                        </label>
                        <textarea
                          id="w3review"
                          name="description"
                          class="form-control"
                          rows="4"
                          cols="50"
                          placeholder="Enter Description"
                          onChange={(e) =>
                            setPolicy({
                              ...policy,
                              description: e.target.value,
                            })
                          }
                          value={policy.description}
                        />

                    
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Title</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the title"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          value={policy.title}
                          onChange={(e) =>
                            setPolicy({
                              ...policy,
                              title: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          <option class="form-control" value="privacy">
                            Privacy
                          </option>
                          ;
                          <option class="form-control" value="terms">
                            Terms
                          </option>
                          ;
                          <option class="form-control" value="shipping">
                            Shipping
                          </option>
                          ;
                          <option class="form-control" value="cancellation">
                            Cancellation
                          </option>
                          ;
                          <option class="form-control" value="return">
                            Return
                          </option>
                          ;
                          <option class="form-control" value="refund">
                            Refund
                          </option>
                          ;
                        </select>
                      </div>

                      <div contenteditable="true">
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Consignment</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Consignment"
                          ></i>
                        </label>
                        <select
                          name="consignmentRequired"
                          class="form-control mb-5"
                          value={policy.consignmentRequired}
                          onChange={(e) =>
                            setPolicy({
                              ...policy,
                              consignmentRequired: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          <option class="form-control" value="true">
                            Yes
                          </option>
                          <option class="form-control" value="false">
                            No
                          </option>
                        </select>
                      </div>

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={policy}
                        adding={addPolicy}
                        updating={updatePolicy}
                        url={"/master/policy/"}
                        validate={{
                          title: "title is required",
                          description: "description is required",
                          consignmentRequired: "consignmentRequired is required",

                        }}
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

export default PolicyForm;
