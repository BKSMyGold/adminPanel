import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Dashboard from "../screens/dashboard";
import Footer from "../layouts/Footer";
import { getAllRoles } from "../apis/Role";
import { addSystemUser } from "../apis/SystemUser";

const AddMasterDetails = ({}) => {
  let location = useLocation();

  let navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getAllRoles().then(({ data: { roles: foundRoles } }) => {
      console.log(foundRoles);
      setRoles(foundRoles);
    });
  }, []);

  const [masterDetails, setMasterDetails] = useState(
    location?.state ?? {
      name: "",
      email: "",
      role: "",
      password: "",
      phoneNumber: "",
      panNumber: "",
      aadharNumber: "",
      address: "",
    }
  );

  const onInputChange = (e) => {
    setMasterDetails({
      ...masterDetails,
      [e.target.name]: e.target.value,
    });
  };

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
                      {isUpdate
                        ? "Update Master Details"
                        : "Add Master Details"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate
                        ? "Update Master Details"
                        : "Add Master Details"}
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
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Offer Name"
                          onChange={onInputChange}
                          value={masterDetails.name}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Email</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Offer Name"
                          onChange={onInputChange}
                          value={masterDetails.email}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Password</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Offer Name"
                          onChange={onInputChange}
                          value={masterDetails.password}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">PAN Number</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="panNumber"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Offer Name"
                          onChange={onInputChange}
                          value={masterDetails.panNumber}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Phone No.</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="phoneNumber"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Offer Name"
                          onChange={onInputChange}
                          value={masterDetails.phoneNumber}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Aadhar Number</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="aadharNumber"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Offer Name"
                          onChange={onInputChange}
                          value={masterDetails.aadharNumber}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Address</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="address"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) => {
                            setMasterDetails({
                              ...masterDetails,
                              address: e.target.value,
                            });
                          }}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Select Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          name="type"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Offer Applicable"
                          onChange={(e) => {
                            console.log(e.target.value);
                            setMasterDetails({
                              ...masterDetails,
                              role: e.target.value,
                            });
                          }}
                        >
                          <option value="">Select Role</option>
                          {roles.map((role) => (
                            <option value={role._id}>{role.role_name}</option>
                          ))}
                        </select>
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addSystemUser(masterDetails).then().catch();
                        }}
                      >
                        Add Master Details
                      </button>
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

export default AddMasterDetails;
