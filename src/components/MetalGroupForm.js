import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import { addMetalGroup, updateMetalGroup } from "../apis/MetalGroup";

const MetalGroupForm = (props) => {
  let location = useLocation();

  let navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [metalGroup, setMetalGroup] = useState(
    location?.state ?? {
      karatage: "",
      fineness: "",
      reference: "",
      shortName: "",
    }
  );

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
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Karatage</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="text"
                          name="karatage"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter karatage Name"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              karatage: e.target.value,
                            })
                          }
                          value={metalGroup.karatage}
                        />
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Short Name</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="text"
                          name="shortName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Short Name"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              shortName: e.target.value,
                            })
                          }
                          value={metalGroup.shortName}
                        />
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Fineness</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="text"
                          name="fineness"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Fineness"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              fineness: Number(e.target.value),
                            })
                          }
                          value={metalGroup.fineness}
                        />
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Reference ID</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="number"
                          name="referenceId"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Reference ID"
                          onChange={(e) =>
                            setMetalGroup({
                              ...metalGroup,
                              referenceId: Number(e.target.value),
                            })
                          }
                          value={metalGroup.referenceId}
                        />
                      </div>
                      <div>
                        <br/>
                        <button className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidMetalGroup({ ...metalGroup })) {
                              isUpdate
                                ? updateMetalGroup({ ...metalGroup }).then(
                                    () => {
                                      navigate(
                                        "/master/product-data/metal-groups"
                                      );
                                    }
                                  )
                                : addMetalGroup({ ...metalGroup }).then(() => {
                                    navigate(
                                      "/master/product-data/metal-groups"
                                    );
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Metal Group" : "Add Metal Group"}
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

export default MetalGroupForm;
