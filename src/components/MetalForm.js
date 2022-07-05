import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import { addMetalGroup, updateMetalGroup } from "../apis/MetalGroup";
import AddUpdateSpinner from "../AddUpdateSpinner";
//===================================================================================
const MetalForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [metal, setMetal] = useState(
    location?.state ?? {
      metalName: "",
      icon: [],
    }
  );
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
                      {isUpdate ? "Update Metal" : "Add Metal"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Metal" : "Add Metal"}
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
                            title="Enter the Name of the Metal"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="metalName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Metal Name"
                          onChange={(e) =>
                            setMetal({
                              ...metal,
                              metalName: e.target.value,
                            })
                          }
                            value={metal.metalName}                          
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Metal Icon</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Metal Icon"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="icon"
                          multiple
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) => {
                            setMetal({
                              ...metal,
                              icon: e.target.files,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            isUpdate
                              ? console.log({ ...metal })
                              : console.log({ ...metal })
                          }}
                        >
                          {isUpdate ? "Update Metal" : "Add Metal"}
                        </button>
                      </div>
                      {/* <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={metalGroup}
                        adding={addMetalGroup}
                        updating={updateMetalGroup}
                        url={"/master/product-data/metal-groups/"}
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

export default MetalForm;
