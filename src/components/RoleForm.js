import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPermissions } from "../apis/Permission";
import { addRole } from "../apis/Role";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "../screens/dashboard";
import { isValidRole } from "../Validator";

const RoleForm = () => {
  let navigate = useNavigate();

  const [roleState, setRoleState] = useState({
    role_name: "",
    permissions: new Set(),
  });
  const [permissionState, setPermissionsState] = useState([]);

  const onRoleStateChange = (e) =>
    setRoleState({ ...roleState, [e.target.name]: e.target.value });

  const onPermissionModify = (e) => {
    const { value, checked } = e.target;
    const newPermissions = new Set(roleState.permissions);
    if (checked) {
      newPermissions.add(value);
    } else {
      newPermissions.delete(value);
    }
    console.log(newPermissions);
    setRoleState({ ...roleState, permissions: newPermissions });
  };

  useEffect(() => {
    getAllPermissions().then(({ data: { permissions } }) =>
      setPermissionsState(permissions)
    );
  }, []);

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
                      Add Master User Rights
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Add Master User Rights
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
																		<span class="required">Role Name</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="text"
                          name="role_name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Role Name"
                          onChange={onRoleStateChange}
                        />
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Role Permissions</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        {permissionState.map((permission) => (
                          <div>
                            <input
                            className="form-check-input"
                              type={"checkbox"}
                              value={permission._id}
                              onChange={onPermissionModify}
                            />
                            <label class=" fs-5 fw-bold mb-2">&nbsp; {permission.permission_name}</label>
                          </div>
                        ))}
                      </div>
                      <div>
                        <button
                        className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidRole({ ...roleState })) {
                              addRole({ ...roleState }).then(() => {
                                navigate("/master/security/masterUserRights");
                              });
                            }
                          }}
                        >
                          Add Role
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

export default RoleForm;
