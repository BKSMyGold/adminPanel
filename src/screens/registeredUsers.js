import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      {/* <h1>Registered Users are :</h1>
      {registeredUser.map((x) => (
        <>
          <h3>{x.name}</h3>
          <h3>{x.email}</h3>
          <h3>{x.password}</h3>
          <h3>{x.phoneNumber}</h3>
          <h3>{x.panNumber}</h3>
          <h3>{x.aadharNumber}</h3>
          <h3>{x.address}</h3>
          <h3>{x.role}</h3> */}
      {/*----------------------------*/}
      <h1 className="btn btn-primary mr-5">Registered Users are :</h1>
      <table class="table table-row-bordered table-row-black-100 registeredUser">
        {/*begin::Table head*/}
        <thead>
          <tr class="fw-bolder text-muted">
            {/* <th class="w-25px">
                  <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="1"
                      data-kt-check="true"
                      data-kt-check-target=".widget-13-check"
                    />
                  </div>
                </th> */}
            <th class="min-w-150px">Name</th>
            <th class="min-w-140px">Email</th>
            {/* <th class="min-w-120px">password</th> */}
            <th class="min-w-120px">phoneNumber</th>
            <th class="min-w-120px">panNumber</th>
            <th class="min-w-100px">aadharNumber</th>
            <th class="min-w-100px">address</th>
            <th class="min-w-100px">role</th>
          </tr>
        </thead>
        {/*end::Table head*/}
        {/*begin::Table body*/}
        <tbody>
          {registeredUser.map((user) => (
            <tr>
              <td>
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
                <span class="badge badge-light-success">{user.address}</span>
              </td>
              <td>
                {Object.keys(user).map((obj) => (
                   <a
                   href="/master/security/masterUserRights"       
                   class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6 "
                 >
                  <span
                    
                    class="badge badge-light-danger"
                  >
                    {user[obj].role_name}
                  </span>
                  </a>
                ))}
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
