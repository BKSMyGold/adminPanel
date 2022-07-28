import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { updateMetalGroup, addMetalGroup } from "../APIs_Hai/MetalGroup";
import { getOrnament } from "../APIs_Hai/Ornament";
import { getAllUnit } from "../APIs_Hai/Unit";
import { getAllMetal } from "../APIs_Hai/Metal";
//===========================================================================
const MetalGroupForm = (props) => {
  let location = useLocation();
  console.log(location.state);
  //===========================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [metalGroup, setMetalGroup] = useState({
    shortName: "",
    metal: "",
    purity: 0,
    unit: "",
    roundingDigits: 0,
    ornament: "",
  });

  const [metal, setMetal] = useState([]);
  useEffect(() => {
    getAllMetal().then((res) => setMetal(res.data.data.data));
  }, []);

  console.log(metal);
  //===================================================================================
  const [ornament, setOrnament] = useState([]);
  useEffect(() => {
    getOrnament().then((res) => setOrnament(res.data.data.data));
  }, []);

  console.log(ornament);
  //===================================================================================
  const [units, setUnits] = useState([]);
  useEffect(() => {
    getAllUnit().then((res) => setUnits(res.data.data.data));
  }, []);

  console.log(units);
  //===================================================================================
  useEffect(() => {
    if (location.state) {
      setMetalGroup(location.state);
    }
  }, []);
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
                      {isUpdate ? "Update Metal Group" : "Add Metal Group"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Metal Group" : "Add Metal Group"}
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
                          <span class="required">Metal Short Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Metal's Short Name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="shortName"
                          value={metalGroup.shortName}
                          maxlength="5"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Short Name"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              shortName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Metal Id</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Metal"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          value={metalGroup.metal?.id}
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              metal: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {metal.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Purity</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Purity"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="purity"
                          value={metalGroup.purity}
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter purity"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              purity: Number(e.target.value),
                            })
                          }
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Unit Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Unit Name"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          value={metalGroup.unit?.id}
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              unit: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {units.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Rounding Digits</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7 "
                            data-bs-toggle="tooltip"
                            title="Specify the Unit Name"
                          ></i>
                        </label>
                        <select
                          value={metalGroup.roundingDigits}
                          class="form-control"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              roundingDigits: Number(e.target.value),
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          <option class="form-control" value={1}>
                            1
                          </option>
                          <option class="form-control" value={2}>
                            2
                          </option>
                          <option class="form-control" value={3}>
                            3
                          </option>
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Ornament Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the type of the ornament"
                          ></i>
                        </label>
                        <select
                          class="form-control mb-5"
                          value={metalGroup.ornament}
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              ornament: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {ornament.map((x) => {
                            return (
                              <option class="form-control" value={x.name}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {/* <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();

                            isUpdate
                              ? console.log({ ...metalGroup })
                              : console.log({ ...metalGroup });
                          }}
                        >
                          {isUpdate ? "Update Metal Group" : "Add Metal Group"}
                        </button>
                      </div> */}
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={metalGroup}
                        adding={addMetalGroup}
                        updating={updateMetalGroup}
                        url={"/master/product-data/metal_groups/"}
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

export default MetalGroupForm;
