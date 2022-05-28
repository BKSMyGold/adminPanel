import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL, ROLE_PERMISSION_BASE_URL } from "../Constants";

const Home = () => {
  const [latestBuySell, setPrice] = useState([{}]);
  const [countUsers, setUsersCount] = useState([{}]);
  const [countStandard, setSubscriptions] = useState([{}]);
  const [Users, setUser] = useState({});
  const [Plans, setPlan] = useState({});
  const [buysell, setBuySell] = useState([{}]);

  //======================== Fetching Buy and Sell rate price    ============================================
  useEffect(() => {
    const fetchbuysell = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/buy-sell-price`);
      setBuySell(data);
    };
    fetchbuysell();
  }, []);
  //----------------------------  Fetching Buy and Sell rate price  -------------------------------------
  useEffect(() => {
    const fetchLatest = async () => {
      const { data: latest } = await axios.get(
        `${BASE_URL}/api/buy-sell-price/letest`
      );
      setPrice(latest.data);
    };
    fetchLatest();
  }, []);
  //---------------------------------- Fetching Users      -------------------------------
  useEffect(() => {
    const fetchCount = async () => {
      const { data: users } = await axios.get(`${BASE_URL}/api/user/`);

      setUsersCount(users);
    };
    fetchCount();
  }, []);

  //---------------------------------------  Fetching subscription       -------------------------------
  useEffect(() => {
    const fetchCount = async () => {
      const { data: subscriptions } = await axios.get(
        `${BASE_URL}/api/subscription/`
      );

      setSubscriptions(subscriptions.subscriptions);
    };
    fetchCount();
  }, []);
  //-------------------------------- Fetching users and then mapping() according to their ID  --------------------------------------
  useEffect(() => {
    axios
      .get(`${ROLE_PERMISSION_BASE_URL}/api/subscription`)
      .then((response) => response.data)
      .then((data) => {
        const subscriptionUserPromises = data.subscriptions.map(({ user }) =>
          axios.get(`${ROLE_PERMISSION_BASE_URL}/api/user/${user}`)
        );

        let userObject = {};
        Promise.allSettled(subscriptionUserPromises).then((responseArray) => {
          responseArray.forEach(({ status, value }) => {
            if (status === "fulfilled") {
              const { data: user } = value;
              userObject[user.id] = user.fname;
            }
          });
          console.log(userObject);
          setUser(userObject);
        });
      });
  }, []);
  //----------------------------- Fetching Plan -----------------------------------------
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription`)
      .then((response) => response.data)
      .then((data) => {
        const subscriptionPlanPromises = data.subscriptions.map(({ plan }) =>
          axios.get(`${BASE_URL}/api/plan/${plan}`)
        );
        let planObject = {};
        Promise.allSettled(subscriptionPlanPromises).then((responseArray) => {
          responseArray.forEach(({ status, value }) => {
            if (status === "fulfilled") {
              const { data: plan } = value;
              planObject[plan.id] = plan.name;
            }
          });
          console.log(planObject);
          setPlan(planObject);
        });
      });
  }, []);
  //========================================================================
  console.log("==>latestBuySell", latestBuySell);
  console.log("==>countUsers", countUsers);
  console.log("==>countStandard", countStandard);
  console.log("==>Users", Users);
  console.log("==>Plans", Plans);
  console.log("==>buysell", buysell);

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard />
          {/* ====================================== */}
          {/* <section class="main-content"> */}
          <div class="container">
            <h1 class="btn btn-success">App's Users</h1>
            <table class="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Phone</th>
                  <th>Contact</th>
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {countUsers.map((user) => (
                  <tr>
                    <td>
                      <div class="user-info">
                        <div class="user-info__img">
                          <img
                            src={
                              user.image
                                ? user.image
                                : "assets/media/avatars/150-2.jpg"
                            }
                            alt="User Img"
                          />
                        </div>
                        <div class="user-info__basic">
                          <h5 class="mb-0">{user.fname}</h5>
                          <p class="text-muted mb-0">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="active-circle bg-success"></span> Active
                    </td>
                    <td>{user.addresses}</td>
                    <td>{user.mobile}</td>
                    {/* <td>
                      <button class="btn btn-primary btn-sm">Contact</button>
                    </td> */}
                    <td>
                      <div class="dropdown show ">
                        <a
                          class="btn btn-secondary dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="triggerId1">
                          <a class="dropdown-item" href="#">
                            <i class="fa fa-pencil mr-1"></i> Edit
                          </a>
                          <a class="dropdown-item text-danger" href="#">
                            <i class="fa fa-trash mr-1"></i> Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* </section> */}
          {/* ====================================== */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
