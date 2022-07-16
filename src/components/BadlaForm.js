import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidCategory } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addBadla, updateBadla } from "../APIs_Hai/Badla";
//============================================================
const BadlaForm = (props) => {
    //============================================================
  let location = useLocation();
  let navigate = useNavigate();
//============================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [badla, setBadla] = useState(
    location?.state ?? {
      value: "",
      // images: [],
      // video: "",
    }
  );
//============================================================
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
                      {isUpdate ? "Update Badla" : "Add Badla"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Badla" : "Add Badla"}
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
                          <span class="required">Badla Value</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Badla"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="value"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Badla Value"
                          onChange={(e) =>
                            setBadla({
                              ...badla,
                              value: e.target.value,
                            })
                          }
                          value={badla.value}
                        />
                      </div>
                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Category Images</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="video"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          multiple={true}
                          onChange={(e) => {
                            setCategory({
                              ...category,
                              images: e.target.files,
                            });
                          }}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Category Video</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="video"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) => {
                            setCategory({
                              ...category,
                              video: e.target.files[0],
                            });
                          }}
                        />
                      </div> */}

                      <div>
                        <br />
                        {/* <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidCategory({ ...category })) {
                              isUpdate
                                ? updateCategory({ ...category }).then(() => {
                                    navigate("/master/product-data/categories");
                                  })
                                : addCategory({ ...category }).then(() => {
                                    navigate("/master/product-data/categories");
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Category" : "Add Category"}
                        </button> */}
                        <AddUpdateSpinner
                          update={isUpdate ? true : false}
                          collection={badla}
                          adding={addBadla}
                          updating={updateBadla}
                          url={"/master/badla"}
                        />
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

export default BadlaForm;