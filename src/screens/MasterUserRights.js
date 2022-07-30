import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { ADMIN_API } from "../Constants";
import axios from "axios";
import { getRole } from "../APIs_Hai/Role";

//==================================================================================
export default function MasterUserRights() {
  const [allRoles, setAllRoles] = React.useState([]);
  const [systemUsers, setSystemUsers] = React.useState([]);
  //==================================================================================
let user = JSON.parse(localStorage.getItem("user"))
console.log(user)
  //==================================================================================
  React.useEffect(() => {
    axios
      .post(`${ADMIN_API}/admin/user/list`, {
        query: {
          userType: 2,
          parentRole:user.role._id
        },

        options: {
          populate: "role",
        },
      })
      .then((res) => setSystemUsers(res.data.data.data));
  }, []);
  console.log("||----->", systemUsers);
  //==================================================================================
  React.useEffect(() => {
    axios
      .post(`${ADMIN_API}/admin/role/list`)
      .then((res) => setAllRoles(res.data.data.data));
  }, []);
  //==================================================================================

  return (
    <>
      <Header />
      <div class="role_right">
        <h1>Role Master</h1>

        <div class="role_master table-responsive">
          <table class="table">
            <thead>
              <tr class="fw-bolder text-center">
                <th>User Name</th>
                <th>User Email</th>
                <th>User Mobile</th>
                <th>User Role</th>
                {/* <th>Change User Name</th> */}
                <th>Change Role</th>
              </tr>
            </thead>
            <tbody class="m-5">
              {systemUsers?.map((x) => {
                return (
                  <tr class="text-center">
                    <td class="p-5">{x.fullName}</td>
                    <td class="p-5">{x.email}</td>
                    <td class="p-5">{x.mobile}</td>
                    <td class="p-5">{x.role?.name}</td>

                    {/* <td>
                      <Link to="/change_name" state={x}>
                        <button class="btn btn-danger fs-8">
                          {" "}
                          Change Name
                        </button>
                      </Link>
                    </td> */}
                    <td>
                      <Link to="/change_role" state={x}>
                        <button class="btn btn-danger fs-8">
                          {" "}
                          Change Role
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}
