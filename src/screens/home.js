import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL, ROLE_PERMISSION_BASE_URL } from "../Constants";
import { Link } from "react-router-dom";

const Home = () => {
  const [latestBuySell, setPrice] = useState([{}]);
  const [countUsers, setUsersCount] = useState([{}]);
  const [countStandard, setSubscriptions] = useState([{}]); 
  const [Users, setUser] = useState([]);
  const [Plans, setPlan] = useState({});
  const [buysell, setBuySell] = useState([{}]);
  const [searchUser, setSearchUser] = useState("");
  const [filterUser, setFilterUser] = useState({});

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
          console.log("userObject ====>", userObject);
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


  //  useEffect(()=>{
  //    axios.get(`${BASE_URL}/api/user/`).then(data => (
  //      data.data.map( user => {
  //        if(user.fname === filterUser){
  //          setUsersCount(user)
  //        }
  //      })
  //    ))

  //  },[filterUser])

  // console.log("==>latestBuySell", latestBuySell);
  // console.log("==>countUsers", countUsers);
  // console.log("==>countStandard", countStandard);
  // console.log("==>Users", Users);
  // console.log("==>Plans", Plans);
  // console.log("==>buysell", buysell);
  console.log("==>filter user", filterUser);

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
            <h1 class="btn btn-success">{countUsers.length} App's Users</h1>
            <br></br>
          
            <input
              class="form-control mt-5"
              placeholder="Search User"
              onChange={(e) => {
                e.preventDefault();
                setSearchUser(e.target.value);
              }}
            />
          

            <Link to ='/filtered_users'
            state = {searchUser}
            >
            <button class="btn btn-warning mt-5">
              Search
            </button>
            </Link>
            <table class="table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Status</th>
                  <th>Phone</th>
                  <th>Action</th>
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
{/* 
                {filterUser ? (
                   filterUser.map((user) => (
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
                      <td>{user.mobile}</td>
                   
                      <td>
                        <Link to="/user_details" state={user}>
                          <button class="btn btn-primary">Show more</button>
                        </Link>
                      </td>
                    </tr>
                  )))

                 : (countUsers.map((user) => (
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
                      <td>{user.mobile}</td>
                   
                      <td>
                        <Link to="/user_details" state={user}>
                          <button class="btn btn-primary">Show more</button>
                        </Link>
                      </td>
                    </tr>
                  )))
                   */}
                   {countUsers && countUsers.map((user) => (

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
                      <td>{user.mobile}</td>
                   
                      <td>
                        <Link to="/user_details" state={user}>
                          <button class="btn btn-primary">Show more</button>
                        </Link>
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
