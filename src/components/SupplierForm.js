import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addSupplier, updateSupplier } from "../APIs_Hai/Supplier";

//===================================================================================
const SupplierForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [supplier, setSupplier] = useState({
    name: "",
    code: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    if(location.state){

      setSupplier(location.state);
    }
  }, [location.state]);
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
                      {isUpdate ? "Update Supplier" : "Add Supplier"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Supplier" : "Add Supplier"}
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
                          <span class="required">Supplier Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Supplier's Name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Name"
                          onChange={(e) =>
                            setSupplier({
                              ...supplier,
                              name: e.target.value,
                            })
                          }
                          value={supplier.name}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Code</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Supplier's Code"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="code"
                          value={supplier.code}
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Code"
                          onChange={(e) =>
                            setSupplier({
                              ...supplier,
                              code: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Email</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Supplier's Email"
                          ></i>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={supplier.email}
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Email"
                          onChange={(e) =>
                            setSupplier({
                              ...supplier,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Phone</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Supplier's Phone"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="phone"
                          value={supplier.phone}
                          className="form-control form-control-lg form-control-solid mb-5"
                          placeholder="Enter the Phone Number"
                          onChange={(e) =>
                            setSupplier({
                              ...supplier,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>

                     
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={supplier}
                        adding={addSupplier}
                        updating={updateSupplier}
                        url={"/master/supplier"}
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

export default SupplierForm;
