import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidDiamonds } from "../Validator";
import { addDiamond, updateDiamond } from "../apis/Diamonds";
import AddUpdateSpinner from "../AddUpdateSpinner";

const DiamondsForm = (props) => {
  let location = useLocation();

  let navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [diamonds, setDiamonds] = useState(
    location?.state ?? {
      shape: "",
      gemstones: "",
      clarity: "",
      color: "",
      cut: "",
      certify_authority: "",
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
                      {isUpdate ? "Update Diamonds" : "Add Diamonds"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Diamonds" : "Add Diamonds"}
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
                          <span class="required">Shape</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="shape"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Diamonds Shape Name"
                          onChange={(e) =>
                            setDiamonds({
                              ...diamonds,
                              shape: e.target.value,
                            })
                          }
                          value={diamonds.shape}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span>Gemstones</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="gemstones"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Gemstones Name"
                          onChange={(e) =>
                            setDiamonds({
                              ...diamonds,
                              gemstones: e.target.value,
                            })
                          }
                          value={diamonds.gemstones}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Clarity</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="clarity"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Clarity Name"
                          onChange={(e) =>
                            setDiamonds({
                              ...diamonds,
                              clarity: e.target.value,
                            })
                          }
                          value={diamonds.clarity}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Color </span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="color"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Color Name"
                          onChange={(e) =>
                            setDiamonds({
                              ...diamonds,
                              color: e.target.value,
                            })
                          }
                          value={diamonds.color}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Cut</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="cut"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Cut Name"
                          onChange={(e) =>
                            setDiamonds({
                              ...diamonds,
                              cut: e.target.value,
                            })
                          }
                          value={diamonds.cut}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Certifying Authority</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="certify_authority"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Certifying Authority Name"
                          onChange={(e) =>
                            setDiamonds({
                              ...diamonds,
                              certify_authority: e.target.value,
                            })
                          }
                          value={diamonds.certify_authority}
                        />
                      </div>
                      <div>
                        <br />
                        {/* <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidDiamonds({ ...diamonds })) {
                              isUpdate
                                ? updateDiamond({ ...diamonds }).then(() => {
                                    navigate("/master/product-data/diamonds");
                                  })
                                : addDiamond({ ...diamonds }).then(() => {
                                    navigate("/master/product-data/diamonds");
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Diamonds" : "Add Diamonds"}
                        </button> */}

                        <AddUpdateSpinner
                          update={isUpdate ? true : false}
                          collection={diamonds}
                          adding={addDiamond}
                          updating={updateDiamond}
                          url={"/master/product-data/diamonds"}
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

export default DiamondsForm;
