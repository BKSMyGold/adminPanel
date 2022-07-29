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
const StyleForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [style, setStyle] = useState(
    location?.state ?? {
        name: "",
        metalGroup:"",
      
    }
  );
  //===================================================================================
const[metalGroup, setMetalGroup] = useState([])
  useEffect(()=>{
  getMetalGroup().then(res => setMetalGroup(res.data.data.data))
},[])
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
                      {isUpdate ? "Update Style" : "Add Style"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Style" : "Add Style"}
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
                          <span class="required">Style Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Style"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Style Name"
                          onChange={(e) =>
                            setStyle({
                              ...style,
                              name: e.target.value,
                            })
                          }
                            value={style.name}                          
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Metal Group Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Metal Group"
                          ></i>
                        </label>
                        <select
                          class="form-control mb-5"
                          onChange={(e) =>
                            setStyle({
                              ...style,
                              metalGroup: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {metalGroup?.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                               {x.shortName} {x.metal.name}
                              </option>
                            );
                          })}
                        </select>

                        {/* <input
                          type="text"
                          name="metalGroup"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Metal Group Name"
                          onChange={(e) =>
                            setStyle({
                              ...style,
                              metalGroup: e.target.value,
                            })
                          }
                            value={style.metalGroup}                          
                        /> */}
                      </div>

                      {/* <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            isUpdate
                              ? console.log({ ...style })
                              : console.log({ ...style })
                          }}
                        >
                          {isUpdate ? "Update Style" : "Add Style"}
                        </button>
                      </div> */}
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={style}
                        adding={addStyle}
                        updating={updateStyle}
                        url={"/master/product-data/style/"}
                        validate={{
                          name:"Name is required",
                          metalGroup:"Metal Group is required"

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

export default StyleForm;
