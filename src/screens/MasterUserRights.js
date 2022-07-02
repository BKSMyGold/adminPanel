

import React from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { ROLE_PERMISSION_BASE_URL } from "../Constants";
import { Link } from "react-router-dom";

const roles = [
  "Super Admin",
  "Admin",
  "Accountant",
  "Sales",
  "IT",
  "Marketing",
  "CRM",
];

class MasterUserRights extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roless: [],
    };
  }
  componentDidMount() {
    fetch(`${ROLE_PERMISSION_BASE_URL}/api/system-user`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ roless: res });
        console.log("============>", this.state.roless);
      })
      .catch((er) => console.log(er));
  }
  render() {
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
                  <th>Status</th>
                  <th>Role</th>
                  <th>Change User Name</th>
                  <th>Change Role</th>
                </tr>
              </thead>
              <tbody class="m-5">
                {this.state.roless.map((x) => {
                  if (x.role && x.role.role_name !== undefined) {
                    return (
                      <tr class="text-center">
                        <td class="p-5">{x.name}</td>
                        <td>active</td>
                        <td>{x.role.role_name}</td>
                        <td>
                          <Link to="/change_name" state={x}>
                            <button class="btn btn-danger fs-8">
                              {" "}
                              Change Name
                            </button>
                          </Link>
                        </td>
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
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default MasterUserRights;
