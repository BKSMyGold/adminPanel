import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "../screens/dashboard";
import axios from "axios";
import { BASE_URL, ROLE_PERMISSION_BASE_URL } from "../Constants";
import { Link, useLocation } from "react-router-dom";

const FilteredUsers = (props) => {
  const location = useLocation();

  // console.log("hellYyeah ==>",location.state)

  const [obj, setObj] = useState([{}]);
  const filteredUser = location.state;

  useEffect(() => {
    axios.get(`${BASE_URL}/api/user/`).then((data) =>
      data.data.map((user) => {
        if (filteredUser.toLowerCase() === user.fname || filteredUser.toUpperCase() === user.fname  ) {
          setObj({ ...user });
        }
      })
    );
  }, []);

  console.log("hellYyeah ==>", Object.values(obj));

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard />

          <div class="container">
            <h1 class="btn btn-success">{obj.length} App's Users</h1>
            <br></br>

            <table class="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Status</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               
                  <tr>
                    <td>
                      <div class="user-info">
                        <div class="user-info__img">
                          <img
                            src={
                              "assets/media/avatars/150-2.jpg"
                            }
                            alt="User Img"
                          />
                        </div>
                        <div class="user-info__basic">
                          <h5 class="mb-0">{Object.values(obj)[8]}</h5>
                          <p class="text-muted mb-0">{Object.values(obj)[7]}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="active-circle bg-success"></span> Active
                    </td>
                    <td>{Object.values(obj)[15]}</td>

                    <td>
                      <Link to="/user_details" state={obj}>
                        <button class="btn btn-primary">Show more</button>
                      </Link>
                    </td>
                  </tr>
                
              </tbody>
            </table>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FilteredUsers;
