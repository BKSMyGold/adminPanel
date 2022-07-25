import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidItem } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addLabel, updateLabel } from "../APIs_Hai/Label";
import { getStyle } from "../APIs_Hai/Style";
//===============================================================
const LabelForm = (props) => {
  //===============================================================
  let location = useLocation();
  let navigate = useNavigate();
  //===============================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [style, setStyle] = useState([]);

  useEffect(() => {
    getStyle().then((res) => setStyle(res.data.data.data));
  }, []);

  const [label, setLabel] = useState(
    location?.state ?? {
      name: "",
      style: "",
      mode: "",
      weight: 0,
      piece: 0,
    }
  );
  //===============================================================
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
                      {isUpdate ? "Update Label" : "Add Label"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Label" : "Add Label"}
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
                          <span class="required">Label Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your Label's name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Label Name"
                          onChange={(e) =>
                            setLabel({
                              ...label,
                              name: e.target.value,
                            })
                          }
                          value={label.name}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Label Style</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your Label's name"
                          ></i>
                        </label>
                        <select
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Label Name"
                          onChange={(e) =>
                            setLabel({
                              ...label,
                              style: e.target.value,
                            })
                          }
                          value={label.name}
                        >
                          <option>Choose Style</option>
                          {style.map((x) => (
                            <option value={x.id}>{x.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Mode</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the mode"
                          ></i>
                        </label>
                        <select
                          type="text"
                          name="mode"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Mode "
                          onChange={(e) =>
                            setLabel({
                              ...label,
                              mode: e.target.value,
                            })
                          }
                          value={label.name}
                        >
                          <option>Choose Mode</option>
                          <option value="weight">Weight</option>
                          <option value="piece">Piece</option>
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Weight</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the weight"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="weight"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the weight"
                          onChange={(e) =>
                            setLabel({
                              ...label,
                              weight: e.target.value,
                            })
                          }
                          value={label.weight}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Piece</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Piece"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="piece"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter piece"
                          onChange={(e) =>
                            setLabel({
                              ...label,
                              piece: e.target.value,
                            })
                          }
                          value={label.piece}
                        />
                      </div>

                      <div>
                        <br />
                        {/* <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidItem({ ...Item })) {
                              isUpdate
                                ? updateItem({ ...Item }).then(() => {
                                    navigate("/master/product-data/items");
                                  })
                                : addItem({ ...Item }).then(() => {
                                    navigate("/master/product-data/items");
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Item" : "Add Item"}
                        </button> */}
                        <AddUpdateSpinner
                          update={isUpdate ? true : false}
                          collection={label}
                          adding={addLabel}
                          updating={updateLabel}
                          url={"/master/label"}
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

export default LabelForm;
