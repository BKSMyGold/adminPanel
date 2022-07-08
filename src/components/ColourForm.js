import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import { addMetalGroup, updateMetalGroup } from "../apis/MetalGroup";
import AddUpdateSpinner from "../AddUpdateSpinner";
//===================================================================================
const ColourForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [colour, setColour] = useState(
    location?.state ?? {
        colourName: "",
      
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
                      {isUpdate ? "Update Colour" : "Add Colour"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Colour" : "Add Colour"}
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
                          <span class="required">Colour Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Colour"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="clarity"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Colour Name"
                          onChange={(e) =>
                            setColour({
                              ...colour,
                              colourName: e.target.value,
                            })
                          }
                            value={colour.colourName}                          
                        />
                      </div>
                      

                      <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            isUpdate
                              ? console.log({ ...colour })
                              : console.log({ ...colour })
                          }}
                        >
                          {isUpdate ? "Update Colour" : "Add Colour"}
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

export default ColourForm;