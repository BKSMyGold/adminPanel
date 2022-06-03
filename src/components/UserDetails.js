import React, { useState, useEffect,useCallback } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "../screens/dashboard";
import axios from "axios";
import { BASE_URL, ROLE_PERMISSION_BASE_URL } from "../Constants";
import { Link, useLocation } from "react-router-dom";

//========================================================================================
const UserDetails = (props) => {
  const location = useLocation();

  console.log("->", location.state);
  const user = location.state;
  const address = "24/158 Mahanagar";
  //========================================================================================
  const [userSubscription, setUserSubscription] = useState([]);
  // const [userPlan, setUserPlan] = useState();
  //========================================================================================
  // useEffect(() => {
   
  //   axios
  //     .get(`${BASE_URL}/api/subscription/user/${user.id}`)
  //     .then((res) => setUserSubscription(res.data.data));
  // }, []);
  // console.log("Users subscription ==>", userSubscription);


  useEffect(() => {
    const fetchSubscription = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/subscription/user/${user.id}`)
      setUserSubscription(data.data);
    };
    fetchSubscription();
  }, []);



  // const loadData = useCallback(async () => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/api/subscription/user/${user.id}`);
  //       const data = await response.json();

  //       setUserSubscription(data.data);
  //   } catch (err) {
  //     //do something
  //   }
  // }, [userSubscription])
  // loadData();



  //========================================================================================
  // useEffect(() => {
  //   // console.log("Users plan ==>", userPlan);
  // }, []);

  let userPlan = {};
  userPlan = userSubscription.map((c) => c.plan);
  console.log("Users plan =====>", userPlan);

  let userCyclePeriod = {};
  userCyclePeriod = userSubscription.map((c) => c.plan.cyclePeriod);
  console.log("Users CyclePeriod =====>", userCyclePeriod);

  let userInstallments = {};
  userInstallments = userSubscription.map((c) => c.installments);
  console.log("Users Installments =====>", userInstallments);

  //========================================================================================
  //   {
  //     userplan.map((m) => {
  //       return (
  //         //  console.log("Users Plans name  ==>", m.name)
  //         console.log("Users Plans name  ==>", m.bonus)
  //       );
  //     });
  //   }

  //   {userplan.map(obc =>{
  //       return(

  //           console.log("Users Plans are  ==>", obc.duration)
  //       )
  //   })}
  //========================================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <div class="container">
            <div class="main-body">
              {/* <!-- Breadcrumb --> */}
              {/* <nav aria-label="breadcrumb" class="main-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="javascript:void(0)">User</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    User Profile
                  </li>
                </ol>
              </nav> */}
              {/* <!-- /Breadcrumb --> */}

              <div class="row gutters-sm">
                <div class="col-md-4 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-column align-items-center text-center">
                        <img
                          src={
                            user.image
                              ? user.image
                              : "assets/media/avatars/150-2.jpg"
                          }
                          alt="User Img"
                          class="rounded-circle"
                          width="150"
                        />
                        {/* <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          class="rounded-circle"
                          width="150"
                        /> */}
                        <div class="mt-3">
                          <h4>{user.fname}</h4>
                          <p class="text-dark  mb-1">BKS My Gold User</p>
                          <p class="text-dark mb-1">{user.dob}</p>
                          <p class="text-dark font-size-sm">{address}</p>
                          <p class="text-secondary font-size-sm">{user.id}</p>
                        </div>
                      </div>
                    </div>

                    {/* ======================================== PLANS ============================================== */}
                    <div class="card-body">
                      <h5 class="d-flex align-items-center mb-3">
                      <b class="material-icons text-light fs-2 badge mb-4 badge-info">
                          Plans Are :</b>
                      </h5>
                      <div class="sub-box">
                        <span class="badge text-light bg-dark">Plans</span>
                        {userPlan &&
                          userPlan.map((plan) => (
                            <span class="fw-bolder">{plan.name}</span>
                          ))}
                      </div>
                      <hr />

                      <div class="sub-box">
                        <span class="badge text-light bg-dark">Mode</span>
                        {userPlan &&
                          userPlan.map((plan) => (
                            <span class="fw-bolder">{plan.mode}</span>
                          ))}
                      </div>
                      <hr />

                      <div class="sub-box">
                        <span class="badge text-light bg-dark">Duration</span>
                        {userPlan &&
                          userPlan.map((plan) => (
                            <span class="fw-bolder">{plan.duration}</span>
                          ))}
                      </div>
                      <hr />

                      <div class="sub-box">
                        <span class="badge text-light bg-dark">Plan Type</span>
                        {userPlan &&
                          userPlan.map((plan) => (
                            <span class="fw-bolder">{plan.planType}</span>
                          ))}
                      </div>
                      <hr />

                      <div class="sub-box">
                        <span class="badge text-light bg-dark">Bonus</span>
                        {userPlan &&
                          userPlan.map((plan) => (
                            <span class="fw-bolder">{plan.bonus}</span>
                          ))}
                      </div>
                      <hr />

                      <div class="sub-box">
                        <span class="badge text-light bg-dark">
                          Created At :
                        </span>
                        {userPlan &&
                          userPlan.map((plan) => (
                            <span class="fw-bolder">
                              {plan.createdAt.substring(0, 10)}
                            </span>
                          ))}
                      </div>
                      <hr />
                    </div>
                  </div>
                  {/* 
                  <div class="card mt-3">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <b class="material-icons text-info mr-2">Plans</b>
                        </h6>
                        <span class="text-secondary">https://bootdey.com</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-github mr-2 icon-inline"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          Github
                        </h6>
                        <span class="text-secondary">bootdey</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-twitter mr-2 icon-inline text-info"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                          Twitter
                        </h6>
                        <span class="text-secondary">@bootdey</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-instagram mr-2 icon-inline text-danger"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          Instagram
                        </h6>
                        <span class="text-secondary">bootdey</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-facebook mr-2 icon-inline text-primary"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                          Facebook
                        </h6>
                        <span class="text-secondary">bootdey</span>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div class="col-md-8">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 text-dark bg-light">Full Name</h6>
                        </div>
                        <div class="col-sm-9 badge text-light bg-dark">{user.fname}</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 text-dark bg-light">Email</h6>
                        </div>
                        <div class="col-sm-9 badge text-light bg-dark">{user.email}</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 text-dark bg-light">Phone</h6>
                        </div>
                        <div class="col-sm-9 badge text-light bg-dark">
                          (+91) {user.mobile}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 text-dark bg-light">PAN</h6>
                        </div>
                        <div class="col-sm-9 badge text-light bg-dark">
                          {user.pan ? user.pan : "CPBCJ78Ik"}
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 text-dark bg-light">Referral Code</h6>
                        </div>
                        <div class="col-sm-9 badge text-light bg-dark">{user.refCode}</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0 text-dark bg-light">Address</h6>
                        </div>
                        <div class="col-sm-9 badge text-light bg-dark">{address}</div>
                      </div>
                      <hr />
                      
                      <div class="row">
                        <div class="col-sm-12">
                          {/* <a
                            class="btn btn-info "
                            target="__blank"
                            href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                          >
                            Edit
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div class="card-body">
                          <h5 class="d-flex align-items-center mb-3">
                            <b class="material-icons text-info mr-2">
                              Subscriptions
                            </b>
                          </h5>
                          <div class="sub-box">
                          <span class="badge badge-info mr-4">
                            Saving amount
                          </span>
                          {userSubscription.map((sub) => (
                            <span class="fw-bolder"> ₹ {sub.savedAmount}</span>
                          ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge badge-danger mr-4">
                            Plan Maturity
                          </span>
                          {userSubscription.map((sub) => (
                            <span class="fw-bolder">{sub.maturityDate}</span>
                          ))}
                              </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge badge-danger mr-4">
                            Plan Bonus
                          </span>
                          {userSubscription.map((sub) => (
                            <span class="fw-bolder">{sub.planBonus}</span>
                          ))}
                              </div>
                          <hr />
                          
                          <div class="sub-box">
                            <span class="badge badge-danger mr-4">
                              Saved Weight
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">{sub.savedWeight}</span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                            <span class="badge badge-danger mr-4">
                              Skip Count
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">{sub.skipCount}</span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge badge-danger mr-4">
                            Total Bonus
                          </span>
                          {userSubscription.map((sub) => (
                            <span class="fw-bolder">{sub.totalBonus}</span>
                          ))}
                              </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge badge-success mr-4">Status</span>
                          {userSubscription.map((sub) => (
                            <span class="fw-bolder">{sub.status}</span>
                          ))}
                              </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge badge-success mr-4">
                            Unpaid Investments
                          </span>
                          {userSubscription.map((sub) => (
                            <span class="fw-bolder">
                              {sub.unpaidInvestments}
                            </span>
                          ))}
                              </div>
                          <hr />
                        </div> */}
                  {/* ======================================== SUBSCRPTION ============================================== */}
                  <div class="row gutters-sm">
                    <div class="col-sm-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h5 class="d-flex align-items-center mb-3">
                          <b class="material-icons text-light fs-2 badge mb-4 badge-info">
                              Subscriptions
                            </b>
                          </h5>
                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Saving amount
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">₹ {sub.savedAmount}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Created At :
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">
                                {sub.createdAt.substring(0, 10)}
                              </span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Plan Maturity
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder badge badge-danger">
                                {sub.maturityDate.substring(0, 10)}
                              </span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Plan Bonus
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">{sub.planBonus}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Saved Weight
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">{sub.savedWeight}</span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Skip Count
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">{sub.skipCount}</span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                              Total Bonus
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">{sub.totalBonus}</span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge text-light bg-dark">Status</span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder badge badge-success">{sub.status}</span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Unpaid Investments
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">
                                {sub.unpaidInvestments}
                              </span>
                            ))}
                          </div>
                          <hr />
                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Unpaid Skips
                            </span>
                            {userSubscription.map((sub) => (
                              <span class="fw-bolder">{sub.unpaidSkips}</span>
                            ))}
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                    {/* ======================================== ACTIVITY ============================================== */}
                    <div class="col-sm-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h5 class="d-flex align-items-center mb-3">
                          <b class="material-icons text-light fs-2 badge mb-4 badge-info">
                              Installments
                            </b>
                          </h5>

                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Saving amount
                            </span>
                            {userInstallments.map((installments) =>
                              installments.map((installment) => (
                                <span class="fw-bolder">
                                  ₹ {installment.amount}
                                </span>
                              ))
                            )}
                          </div>
                          <hr />

                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Assigned Collector
                            </span>
                            {userInstallments.map((installments) =>
                              installments.map((installment) => (
                                <span class="fw-bolder">
                                  {installment.collector
                                    ? installment.collector
                                    : "Abhi to koi nahi"}
                                </span>
                              ))
                            )}
                          </div>
                          <hr />

                          <div class="sub-box">
                          <span class="badge text-light bg-dark">Gold</span>
                            {userInstallments.map((installments) =>
                              installments.map((installment) => (
                                <span class="fw-bolder">
                                  {installment.gold}
                                </span>
                              ))
                            )}
                          </div>
                          <hr />

                          <div class="sub-box">
                          <span class="badge text-light bg-dark">
                              Payment Mode
                            </span>
                            {userInstallments.map((installments) =>
                              installments.map((installment) => (
                                <span class="fw-bolder">
                                  {installment.mode}
                                </span>
                              ))
                            )}
                          </div>

                          <hr />
                          <div class="sub-box">
                          <span class="badge text-light bg-dark">Status</span>
                            {userInstallments.map((installments) =>
                              installments.map((installment) => (
                                <span class="fw-bolder">
                                  {installment.status}
                                </span>
                              ))
                            )}
                          </div>
                          <hr />
                        </div>

                        <div class="card-body">
                          <h5 class="d-flex align-items-center mb-3">
                            <b class="material-icons text-light fs-2 badge mb-4 badge-info">
                              Cycle Periods
                            </b>
                          </h5>

                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                              Cycle
                            </span>
                            {userCyclePeriod.map((period) => (
                              <span class="fw-bolder">{period.cycle}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                              Grace Period
                            </span>
                            {userCyclePeriod.map((period) => (
                              <span class="fw-bolder">{period.graceperiod}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                            Minimun Value

                            </span>
                            {userCyclePeriod.map((period) => (
                              <span class="fw-bolder">{period.minValue}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                              Minimun Weight
                            </span>
                            {userCyclePeriod.map((period) => (
                              <span class="fw-bolder">{period.minWeight}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                              Saving amount
                            </span>
                            {userCyclePeriod.map((period) => (
                              <span class="fw-bolder">{period.name}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                              Short Name
                            </span>
                            {userCyclePeriod.map((period) => (
                              <span class="fw-bolder">{period.shortName}</span>
                            ))}
                          </div>
                          <hr />

                          <div class="sub-box">
                            <span class="badge text-light bg-dark">
                              Status
                            </span>
                            {userCyclePeriod.map((period) => (
                              <span class="fw-bolder">{period.status}</span>
                            ))}
                          </div>
                          <hr />


                        </div>
                      </div>
                    </div>

                    {/* <div class="col-sm-6 mb-3">
                      <div class="card h-100">
                        <div class="card-body">
                          <h6 class="d-flex align-items-center mb-3">
                            <i class="material-icons text-info mr-2">
                              assignment
                            </i>
                            Project Status
                          </h6>
                          <small>Web Design</small>
                          <div class="progress mb-3">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>Website Markup</small>
                          <div class="progress mb-3">
                            <div
                              class="progress-bar bg-danger"
                              role="progressbar"
                              aria-valuenow="72"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>One Page</small>
                          <div class="progress mb-3">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="89"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>Mobile Template</small>
                          <div class="progress mb-3">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="55"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <small>Backend API</small>
                          <div class="progress mb-3">
                            <div
                              class="progress-bar bg-primary"
                              role="progressbar"
                              aria-valuenow="66"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
