import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
//==================================================================================================
export default function RegisteredUser() {
  //==================================================================================================
  const [registeredUser, setRegisteredUser] = React.useState([]);
  //==================================================================================================
  React.useEffect(() => {
    axios.get("https://goldv2.herokuapp.com/api/system-user/").then((res) => {
      console.log(res.data);
      setRegisteredUser(res.data);
    });
  }, []);
  //==================================================================================================
  return (
    <>
      <Header />
      <h1 className="btn btn-primary mt-5">Registered Users are :</h1>
      <div class="table-responsive">
        <table class="table table-row-bordered table-row-black-100 registeredUser">
          <thead>
            <tr class="fw-bolder text-muted text-center">
              <th class="min-w-150px">Name</th>
              <th class="min-w-140px">Email</th>
              <th class="min-w-120px">Mobile</th>
              <th class="min-w-120px">PAN</th>
              <th class="min-w-100px">Aadhaar</th>
              <th class="min-w-100px">Role</th>
              <th class="min-w-100px">Parent Role</th>
              <th class="min-w-100px">Change Name</th>
              <th class="min-w-100px">Change Role</th>
            </tr>
          </thead>

          <tbody>
            {registeredUser.map((user) => {
              if (user.role) {
                return (
                  <tr class="text-center fw-bolder">
                    <td class="p-4">{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.panNumber}</td>
                    <td>{user.aadharNumber}</td>
                    <td>{user.role.role_name}</td>
                    <td>"Parent Role aayega yaha"</td>
                    <td>
                      <Link to="/change_name" state={user}>
                        <button class="btn btn-success">Edit</button>
                      </Link>
                    </td>
                    <td>
                      <Link to="/change_role" state={user}>
                        <button class="btn btn-success">Edit</button>
                      </Link>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
          <Link to="/">
            <button className="btn btn-danger">Go Back</button>
          </Link>
        </table>
      </div>
    </>
  );
}
