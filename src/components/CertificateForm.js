import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addCertificate, updateCertificate } from "../APIs_Hai/Certificate";
//===================================================================================
const CertiFicateForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [certificate, setCertificate] = useState(
    location?.state ?? {
      name: "",
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
                      {isUpdate ? "Update Certificate" : "Add Certificate"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Certificate" : "Add Certificate"}
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
                          <span class="required">Certificate Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Certificate"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid mb-5"
                          placeholder="Enter Certificate Name"
                          onChange={(e) =>
                            setCertificate({
                              ...certificate,
                              name: e.target.value,
                            })
                          }
                          value={certificate.name}
                        />
                      </div>

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={certificate}
                        adding={addCertificate}
                        updating={updateCertificate}
                        url={"/master/certificates/"}
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

export default CertiFicateForm;
