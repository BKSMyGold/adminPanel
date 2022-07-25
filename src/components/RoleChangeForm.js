import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AddUpdateSpinner from "../AddUpdateSpinner";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { ADMIN_API } from "../Constants";
import { getRole } from "../APIs_Hai/Role";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

//===================================================================
export default function RoleChangeForm() {
  //===================================================================
  const location = useLocation();
  let user = location.state;
  console.log("||--->", user.id);
  let navigate = useNavigate();
  const [roleList, setRoleList] = React.useState([]);
  //===================================================================
  React.useEffect(() => {
    getRole().then((res) => setRoleList(res.data.data.data));
  }, []);

  //===================================================================
  const [role, setRole] = useState(""     );
    // {
    //   userId: `${user.id}`,
    //   roleId: ""
    // }
  // );
  
  //===================================================================
  const handleRoleChange = (e) => {
    e.preventDefault();
    // console.log(role);
    axios
      .put(`${ADMIN_API}/admin/user/update/${user.id}`, { role })
      .then(() => swal("Hurrah !", "Role has been added", "success"))
      .then(() => navigate("/master/security/masterUserRights"));
  };
  //===================================================================

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
                          className="form-control form-control-lg form-control-solid"
                          value={user.fullName}
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
                          className="form-control form-control-lg form-control-solid"
                          value={user.role?.name}
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
                        <select
                          class="form-control"
                          onChange={(e) => {
                            setRole(e.target.value);}}
                        >
                          <option class="form-control">Choose Role</option>;
                          {roleList.map((role) => {
                            return (
                              <option class="form-control" value={role.id}>
                                {role.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Parent Role</span>

                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) => {
                            setRoleData({
                              ...roleData,
                              parentRole: e.target.value,
                            });
                          }}
                        >
                          <option class="form-control">Parent Role</option>;
                          {parentRoles.map((role) => {

                            return (
                              <option class="form-control" value={role}>
                                {role}
                              </option>
                            );
                          })}
                        </select>
                      </div> */}
                      <div>
                        <br />
                        <button
                          class="btn btn-danger"
                          onClick={handleRoleChange}
                        >
                          Add
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
}
