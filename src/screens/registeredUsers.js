import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";

// import UserDb from '../db.json'

export default function RegisteredUser() {
  const [registeredUser, setRegisteredUser] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://goldv2.herokuapp.com/api/system-user/").then((res) => {
      console.log(res.data);
      setRegisteredUser(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <h1 className="btn btn-primary mt-5">Registered Users are :</h1>
      <table class="table table-row-bordered table-row-black-100 registeredUser">
        {/*begin::Table head*/}
        <thead>
          <tr class="fw-bolder">
            <th class="min-w-150px">Name</th>
            <th class="min-w-140px">Email</th>
            <th class="min-w-120px">phoneNumber</th>
            <th class="min-w-120px">panNumber</th>
            <th class="min-w-100px">aadharNumber</th>
            <th class="min-w-100px">role</th>
            <th class="min-w-100px">Action</th>
          </tr>
        </thead>

        <tbody>
          {registeredUser.map((user) => (
            <tr>
              <td class = "p-4">
                <a
                  href="#"
                  class="text-dark fw-bolder text-hover-primary fs-6"
                  className="gray"
                >
                  {user.name}
                </a>
              </td>
              <td>
                <a
                  href="#"
                  class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6 "
                >
                  {user.email}
                </a>
              </td>
              {/* <td>
                <a
                  href="#"
                  class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                >
                  {user.password}
                </a>
              </td> */}
              <td class="text-dark fw-bolder text-hover-primary fs-6">
                {user.phoneNumber}
              </td>
              <td>
                <span class="badge badge-light-warning">{user.panNumber}</span>
              </td>
              <td>
                <span class="badge badge-light-info">{user.aadharNumber}</span>
              </td>
              <td>
                {Object.keys(user).map((obj) => (
                  <a
                    href="/master/security/masterUserRights"
                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6 "
                  >
                    <span class="badge badge-light-danger">
                      {user[obj].role_name}
                    </span>
                  </a>
                ))}
              </td>
              <td>
                <Link
                 to="/change_role"
                 state = {user}
                 >
                  <button class="btn btn-success">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        {/*end::Table body*/}
      </table>

      <Link to="/">
        <button className="btn btn-danger">Go Back</button>
      </Link>
      {/* </> */}
    </>
  );
}
