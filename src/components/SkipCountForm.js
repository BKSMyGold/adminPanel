import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addStyle,updateStyle } from "../APIs_Hai/Style";
import {getMetalGroup} from "../APIs_Hai/MetalGroup"
//===================================================================================
const SkipCountForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [skipCount, setSkipCount] = useState(
    location?.state ?? {
        count: "",

      
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
                      {isUpdate ? "Update SKip Count" : "Add SKip Count"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update SKip Count" : "Add SKip Count"}
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
                          <span class="required">Skip Count </span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Unpaid Skip Count "
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="count"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Skip Count"
                          onChange={(e) =>
                            setSkipCount({
                              ...skipCount,
                              count: e.target.value,
                            })
                          }
                            // value={location.state.skipCount ?location.state.skipCount:5 }                          
                        />
                      </div>

                     
                      <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            isUpdate
                              ? console.log({ ...skipCount })
                              : console.log({ ...skipCount })
                          }}
                        >
                          {isUpdate ? "Update skipCount" : "Add skipCount"}
                        </button>
                      </div>
                      {/* <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={style}
                        adding={addStyle}
                        updating={updateStyle}
                        url={"/master/product-data/style/"}
                      /> */}
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

export default SkipCountForm;
