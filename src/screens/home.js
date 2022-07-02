import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL, ROLE_PERMISSION_BASE_URL } from "../Constants";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ReactApexChart from "react-apexcharts";
import { Chart, Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

const Home = () => {
  ChartJS.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title
  );

  const [latestBuySell, setPrice] = useState([{}]);
  const [countUsers, setUsersCount] = useState([{}]);
  const [countStandard, setSubscriptions] = useState([{}]);
  const [Users, setUser] = useState([]);
  const [Plans, setPlan] = useState({});
  const [buysell, setBuySell] = useState([{}]);
  const [searchUser, setSearchUser] = useState("");
  const [filterUser, setFilterUser] = useState({});
  const [series, setSeries] = useState([30, 40, 45, 50, 49, 60, 70, 91]);

  const [pageNumber, setPageNumber] = useState(0);

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
          // console.log("userObject ====>", userObject);
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
          // console.log(planObject);
          setPlan(planObject);
        });
      });
  }, []);
  //========================================================================

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = countUsers
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <tr>
          <td>
            <div class="user-info">
              <div class="user-info__img">
                <img
                  src={
                    user.image ? user.image : "assets/media/avatars/150-2.jpg"
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
          <td>{user.dob}</td>
          <td>{user.mobile}</td>

          <td>
            <Link to="/user_details" state={user}>
              <button class="btn btn-primary">Show details</button>
            </Link>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(countUsers.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  //========================================================================

  const [foundUsers, setFoundUser] = useState(countUsers);
  const [name, setName] = useState("");

  const filter = (e) => {
    let keyword = e.target.value;
    if (keyword === "") {
      setFoundUser(countUsers);
    } else {
      const result = countUsers.filter((user) => {
        return user.fname.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUser(result);
    }

    setName(keyword);
  };
  //========================================================================

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />

          {/* ======================================  dashboard */}
          <div class="dashboard responsive_dashboard">
            <div class="grid_child">
              <h2 class="text-muted">Total Gold Saved by users</h2>
              <h3 class="fw-bolder mt-5">📈 ₹ 12,25,369</h3>
            </div>
            <div class="grid_child">
              <h2 class="text-muted">Total Gold Saved by users</h2>
              <h3 class="fw-bolder mt-5">📉 15,000 kg</h3>
            </div>
            <div class="grid_child">
              <h2 class="text-muted">Total Forfeited Gold</h2>
              <h3 class="fw-bolder mt-5">💸 5,000 gm </h3>
            </div>

            <div class="grid_child two_row two_col p-20">
              <Bar
                // height="100%"
                class ="graph"
                data={{
                  labels: ["Jun", "Jul", "Aug"],
                  options: {
                    layout: {
                      padding: 20,
                    },
                  },
                  datasets: [
                    {
                      backgroundColor: "#1dd3d5",
                      id: 1,
                      label: "Jun",
                      data: [5, 6, 7],
                    },
                    {
                      backgroundColor: "#9991d4",
                      id: 2,
                      label: "Jul",
                      data: [3, 2, 1],
                    },
                    {
                      backgroundColor: "#049ff5",
                      id: 3,
                      label: "Aug",
                      data: [8, 7, 9],
                    },
                  ],
                }}
              />
            </div>
            <div class="grid_child bg_color ">
              <Line
                // type="bar"
                data={{
                  labels: [
                    "jan",
                    "feb",
                    "mar",
                    "apr",
                    "may",
                    "jun",
                    "jul",
                    "aug",
                    "sept",
                    "oct",
                    "nov",
                  ],

                  datasets: [
                    {
                      borderColor: "white",
                      backgroundColor: "white",
                      id: 1,
                      label: "data",
                      data: [1, 2, 4, 2, 3, 4, 6, 3, 7, 9, 3],
                    },
                  ],
                }}
              />
            </div>
            <div class="grid_child">
              <div class="d-flex">
                <span class="mx-3">🔑</span> <h1>23.5 gm</h1>
              </div>
              <p class="fw-bold">Gold added this week</p>
              <hr class="dashboard_hr" />
              <div class="d-flex">
                <span class="mx-3">🧑</span> <h1>21,369</h1>
              </div>
              <p class="fw-bold">New Customer</p>
            </div>

            <div class="grid_child">
              <div class="center">
                <i class="fab fa-facebook-f text-primary f-36 mx-3"></i>
                <h3>12,789</h3>
              </div>
              <p class="fw-bold">Total Likes This week</p>
              <hr class="dashboard_hr" />
              <div class="progress w-75 h-75">
                <div
                  class="progress-bar w-75"
                  style={{ width: "75%" }}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75 %
                </div>
              </div>
            </div>
            <div class="grid_child">
              <div class="center">
                <i class="fab fa-twitter text-c-blue f-36 mx-3"></i>
                <h3>1,125</h3>
              </div>
              <p class="fw-bold">Total Likes This week</p>
              <hr class="dashboard_hr" />
              <div class="progress w-75 h-75">
                <div
                  class="progress-bar w-95"
                  style={{ width: "35%" }}
                  role="progressbar"
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  35 %
                </div>
              </div>
            </div>
            <div class="grid_child">
              <div class="center">
                <i class="fab fa-google-plus-g text-c-red f-36 mx-3"></i>
                <h3>24,457</h3>
              </div>
              <p class="fw-bold">Total Likes This week</p>
              <hr class="dashboard_hr" />
              <div class="progress w-75 h-75">
                <div
                  class="progress-bar"
                  style={{ width: "95%" }}
                  role="progressbar"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  95%
                </div>
              </div>
            </div>
          </div>
          {/* ====================================== */}
          <div class="table-responsive">
            <div class="container">
              <h1 class="btn text-light bg-dark">
                {countUsers.length} App's Users
              </h1>
              <br></br>

              <input
                class="form-control mt-5"
                placeholder="Enter User Name"
                onChange={filter}
              />

              <button class="btn btn-warning mt-5">Search User</button>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {foundUsers && foundUsers.length > 0 ? (
                    foundUsers
                      .slice(pagesVisited, pagesVisited + usersPerPage)
                      .map((user) => {
                        return (
                          <tr class="fw-bolder">
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
                            <td>{user.dob}</td>
                            <td>{user.mobile}</td>

                            <td>
                              <Link to="/user_details" state={user}>
                                <button class="btn btn-primary">
                                  Show details
                                </button>
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                  ) : (
                    <h1>No Result</h1>
                  )}
                </tbody>
              </table>
            </div>

            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              activeClassName={"paginationActive"}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
