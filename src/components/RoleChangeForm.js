import React from "react";
import { useLocation } from "react-router-dom";
import AddUpdateSpinner from "../AddUpdateSpinner";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";
import { ROLE_PERMISSION_BASE_URL } from "../Constants";

export default function RoleChangeForm() {
  const location = useLocation();
  console.log(location.state);

  const [roles, setRoles] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${ROLE_PERMISSION_BASE_URL}/api/system-user`)
      .then((res) => setRoles(res.data));
  }, []);

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />

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
                      Change Role Name
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Form to change role name
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
                          <span class="required">User Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="category_name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Category Name"
                          defaultValue={location.state.name}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">User Old Role</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="category_name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Category Name"
                          defaultValue={location.state.role.role_name}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Choose New Role</span>

                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select class="form-control">
                          {roles.map((role) => {
                            <option class="form-control">Choose Role</option>;
                            if (
                              role.role &&
                              role.role.role_name !== undefined
                            ) {
                              return (
                                <option class="form-control">
                                  {role.role.role_name}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Parent Role</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="category_name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Category Name"
                          defaultValue="Parent Role"
                        />
                      </div>

                   
                      <div>
                        <br />

                        <button class="btn btn-danger">Add</button>
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
}
