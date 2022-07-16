import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constants";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
//===============================================================================================================================
export default function SellRequestDetails() {
  const location = useLocation();
  const user = location.state;
  console.log("aaya user ===>", user);
  //===============================================================================================================================
  let myPlanSno = 1;
  let mySubSno = 1;
  let myCycleSno = 1;
  let myInstallSno = 1;
  //===============================================================================================================================
  const [userSubscription, setUserSubscription] = React.useState([]);
  const [appointment, setAppointment] = React.useState([]);
  const [userAddress, setUserAddress] = React.useState({});
  const [userCart, setUserCart] = React.useState({});
  const [userTransaction, setUserTransaction] = React.useState([]);

  //===============================================================================================================================
  React.useEffect(() => {
    const fetchAppointment = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/appointment/`);

      setAppointment(data.data);
    };
    fetchAppointment();
  }, []);

  let userAppointment = appointment.filter((x) => {
    if (x.user.id === user.id) {
      return x;
    }
  });

  // console.log("Users appointment ==>", userAppointment);
  //===============================================================================================================================
  React.useEffect(() => {
    const fetchSubscription = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/api/subscription/user/${user.id}`
      );
      setUserSubscription(data.data);
    };
    fetchSubscription();
  }, []);
  // console.log("Users subscription ==>", userSubscription);
  //===============================================================================================================================
  React.useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/cart/${user.id}`);
      setUserCart(data.data);
    };
    fetchCart();
  }, []);
  // console.log("Users CART ==>", userCart);
  //===============================================================================================================================
  React.useEffect(() => {
    const fetchTransaction = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/transaction/`);
      setUserTransaction(data.data);
    };
    fetchTransaction();
  }, []);
  // console.log("Users Transaction ==>", userTransaction);
  //===============================================================================================================================
  React.useEffect(() => {
    const fetchAddress = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/api/address/user/${user.id}`
      );
      setUserAddress(data.data);
    };
    fetchAddress();
  }, []);
  // console.log(" =============================>", userAddress.docType);
  // console.log(" =============================>", userAddress.pin);
  // console.log(" =============================>", userAddress.landMark);
  // console.log(" =============================>", userAddress.user);

  //===============================================================================================================================
  let userPlan = {};
  userPlan = userSubscription?.map((c) => (c.plan ? c.plan : c.customPlan));
  // console.log("Users plan =====>", userPlan);

  let totalBonus = [];
  totalBonus = userPlan?.map((plan) => (plan.bonus ? plan.bonus : 0));
  let bonusSum = 0;
  for (let i = 0; i < totalBonus.length; i++) {
    bonusSum += totalBonus[i];
    // console.log("planBonus", bonusSum);
  }

  let totalAmount = [];
  totalAmount = userSubscription?.map(
    (plan) => plan.savedAmount && plan.savedAmount
  );
  let amountSum = 0;
  for (let i = 0; i < totalBonus.length; i++) {
    amountSum += totalAmount[i];
    // console.log("amountSum------------------>", amountSum);
  }

  let totalPlanBonus = [];
  totalPlanBonus = userSubscription.map((plan) => plan.planBonus);
  // console.log("=============================>", totalPlanBonus);

  let totalGoldSaved = [];
  totalGoldSaved = userSubscription.map((plan) => plan.savedWeight);
  // console.log("=============================>", totalGoldSaved);
  let savedGold = 0.0;
  for (let i = 0; i < totalGoldSaved.length; i++) {
    savedGold += totalGoldSaved[i];
  }

  let planBonusSum = 0.0;
  for (let i = 0; i < totalBonus.length; i++) {
    planBonusSum += totalPlanBonus[i];
  }
  // console.log("==========> totalPlanBonus", planBonusSum);

  let userCyclePeriod = {};
  userCyclePeriod = userSubscription.map((c) =>
    c.plan ? c.plan.cyclePeriod : c.customPlan.cyclePeriod
  );
  // console.log("Users CyclePeriod =====>", userCyclePeriod);

  let userInstallments = {};
  userInstallments = userSubscription.map((c) => c.installments);
  // console.log("Users Installments =====>", userInstallments);
  let userTrans = [];
  userTrans = userTransaction.map((trans) => {
    if (trans.user === user.id) {
      return trans;
    }
  });
  //==================================================================================================================================
  return (
    <>
      <Header />

      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="profile-user-box card-box bg-custom">
                <div class="row">
                  <div class="col-sm-6">
                    <span class="float-left mr-3">
                      {user.user.image ? (
                        <img
                          src={user.user.image}
                          alt=""
                          class="thumb-lg h-180px w-180px rounded-circle"
                        />
                      ) : (
                        <img
                          src="assets/media/avatars/150-2.jpg"
                          alt=""
                          class="thumb-lg h-180px w-180px rounded-circle"
                        />
                      )}
                    </span>
                    <div class="media-body text-white">
                      <h4 class="mt-1 mb-1 font-25 text-white">{user.user.fullName}</h4>
                      <p class="font-13 text-light">{user.user.dob}</p>
                      <p class="font-13 text-light">
                        BKS My Gold User
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4">
              <div class="card-box shadow-sm">
                <h4 class="header-title mt-0">Personal Information</h4>
                <div class="panel-body">
                  <div class="text-left">
                    <p class="text-muted font-13">
                      <strong>Full Name :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.user.fullName}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Mobile :</strong>
                      <span class="m-l-15 text-dark fw-bolder">
                        (+91) {user.user.mobile}{" "}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Email :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.user.email}
                      </span>
                    </p>

                    <p class="text-muted font-13">
                      <strong>Location/Landmark :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.user.addresses ? user.user.addresses : "No adresses"}
                      </span>
                    </p>

                    <p class="text-muted font-13">
                      <strong>Location Pin:</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {userAddress.pin ? userAddress.pin : "226001"}
                      </span>
                    </p>

                    <p class="text-muted font-13">
                      <strong>PAN :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.user.pan ? user.user.pan : "CBCP68IJ"}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Referral Code :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.user.referralCode ? user.user.referralCode : "CBCP68IJ"}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Languages :</strong>{" "}
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-us m-r-5 m-t-0"
                          title="us"
                        ></span>{" "}
                        <span class="text-dark fw-bolder">English,</span>{" "}
                      </span>
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-de m-r-5"
                          title="de"
                        ></span>{" "}
                        <span class="text-dark fw-bolder">Hindi</span>{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* <div class="card-box shadow-sm">
                <h4 class="header-title mt-0">Appointment Information</h4>
                <div class="panel-body">
                  {userAppointment &&
                    userAppointment.map((appointment) => {
                      return (
                        <div class="text-left">
                          <p class="text-muted font-13">
                            <strong>Appointment Date :</strong>{" "}
                            <span class="m-l-15 text-dark fw-bolder">
                              {appointment.appointmentDate
                                ? appointment.appointmentDate
                                : "none"}
                            </span>
                          </p>
                          <p class="text-muted font-13">
                            <strong>Appointment Time :</strong>
                            <span class="m-l-15 text-dark fw-bolder">
                              {appointment.appointmentTime
                                ? appointment.appointmentTime
                                : "none"}
                            </span>
                          </p>
                          <p class="text-muted font-13">
                            <strong>Status :</strong>{" "}
                            <span class="m-l-15 text-dark fw-bolder">
                              {appointment.status}
                            </span>
                          </p>
                          <p class="text-muted font-13">
                            <strong>Location :</strong>{" "}
                            <span class="m-l-15">
                              <a
                                href={appointment.storeLocation}
                                target="_blank"
                              >
                                {appointment.storeLocation}
                              </a>
                            </span>
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div class="card-box shadow-sm">
                <h4 class="header-title mt-0">User's Cart Information</h4>
                <div class="panel-body">
                  {userCart.createdAt && (
                    <div class="text-left">
                      <p class="text-muted font-13">
                        <strong>User Added Item to Cart on : </strong>{" "}
                        <span class="m-l-15 text-dark fw-bolder">
                          {userCart.createdAt &&
                            userCart.createdAt.substring(0, 10)}
                        </span>
                      </p>
                      <p class="text-muted font-13">
                        <strong>User bought: </strong>{" "}
                        <span class="m-l-15 text-dark fw-bolder">
                          {userCart.items &&
                            userCart.items.map((item) => {
                              return item.item.name;
                            })}
                        </span>
                      </p>
                      <p class="text-muted font-13">
                        <strong>Units Bought : </strong>{" "}
                        <span class="m-l-15 text-dark fw-bolder">
                          {userCart.items &&
                            userCart.items.map((item) => {
                              return item.units;
                            })}
                        </span>
                      </p>
                      <p class="text-muted font-13">
                        <strong>User's Payable Amount: </strong>
                        <span class="m-l-15 text-dark fw-bolder">
                          {userCart.items &&
                            userCart.items.map((item) => {
                              return (
                                Math.round(item.totalAmount * 100) / 100
                              ).toLocaleString("en-IN");
                            })}
                          ₹
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div> */}
            </div>

            {/* <div class="card-box shadow-sm">
              <h4 class="header-title mt-0">User's Trasanctions Information</h4>
              <div class="panel-body">
                <table>
                  <tr>
                    <th class="text-muted p-5">Delivery Agent</th>
                    <th class="text-muted p-5">Transacted on</th>
                    <th class="text-muted p-5">Amount</th>
                    <th class="text-muted p-5">Instant Gold </th>
                    <th class="text-muted p-5">Mode</th>
                    <th class="text-muted p-5">Mode</th>
                  </tr>
                  {userTrans &&
                    userTrans.map((trans) => {
                      return (
                        <>
                          <tr>
                            <td class="fw-bolder fs-5 text-center">
                              {trans.deleveryAgent
                                ? trans.deleveryAgent
                                : "Delivery Agent"}
                            </td>
                            <td class="fw-bolder fs-5 text-center">
                              {trans.createdAt.substring(0, 10)}
                            </td>
                            <td class="fw-bolder fs-5 text-center">
                              {(
                                Math.round(trans.amount * 100) / 100
                              ).toLocaleString("en-IN")}{" "}
                              ₹
                            </td>
                            <td class="fw-bolder fs-5 text-center">
                              {trans.instantGoldApplied ? "Yes" : "No" }
                            </td>{" "}
                            <td class="fw-bolder fs-5 text-center">{trans.mode}</td>{" "}
                         
                            <td class="fw-bolder fs-5 text-center">{trans.status}</td>{" "}
                          </tr>
                          <hr class ='hr'/>
                        </>
                      );
                    })}
                </table>
              </div>
            </div> */}

            <div class="col-xl-8">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-layers float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">
                      Amount Requested to Sell
                    </h6>
                    <h2 class="" data-plugin="counterup">
                      {/* <span>{Math.round(savedGold * 100) / 100} gm</span> */}
                      <span>{user.amount} ₹</span>

                    </h2>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-layers float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">
                        Weight of Gold
                    </h6>
                    <h2 class="" data-plugin="counterup">
                      {/* <span>{Math.round(savedGold * 100) / 100} gm</span> */}
                      <span>{user.gold} gm</span>

                    </h2>
                  </div>
                </div> 
                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-paypal float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">
                      User's Buy Price
                    </h6>
                    <h2 class="">
                      <span data-plugin="counterup">
                        {user.buyPrice.toLocaleString(
                        "en-IN")} ₹/gm
                      </span>
                    </h2>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-rocket float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">
                    User's Sell Price
                    </h6>
                    <h2 class="" data-plugin="counterup">
                      
                      {user.sellPrice.toLocaleString(
                        "en-IN"
                      )} ₹/gm
                    </h2>
                  </div>  
                </div>
                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-rocket float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">
                    Request Status
                    </h6>
                    <h2 class="" data-plugin="counterup">
                      {user.status}
                    </h2>
                  </div>
                  
                </div>

              </div>
              {/* ============================= */}
              <div class="table-responsive card-box shadow-sm">
                <h4 class="header-title mt-0">
                  User's Accounts Details
                </h4>
                <div class="panel-body">
                  <table class="">
                    <tr>
                      <th class="text-muted p-5">Holder Name</th>
                      <th class="text-muted p-5">Account Number</th>
                      <th class="text-muted p-5">IFSC</th>
                      <th class="text-muted p-5">Account Type</th>
                    </tr>
                    <tr class ="fw-bold text-center p-2">
                        <td>
                            {user.account.holderName}
                        </td>
                        <td>
                            {user.account.accountNo}
                        </td>
                        <td>
                            {user.account.ifsc}
                        </td>
                        <td>
                            {user.account.accountType}
                        </td>
                    </tr>
                    {/* {userTrans &&
                      userTrans.map((trans) => {
                        if (trans !== undefined) {
                          return (
                            <>
                              <tr>
                                <td class="fw-bolder fs-5 text-center">
                                  {trans.deleveryAgent && trans.deleveryAgent
                                    ? trans.deleveryAgent
                                    : "Delivery Agent"}
                                </td>
                                <td class="fw-bolder fs-5 text-center">
                                  {trans.createdAt.substring(0, 10)}
                                </td>
                                <td class="fw-bolder fs-5 text-center">
                                  {(
                                    Math.round(trans.amount * 100) / 100
                                  ).toLocaleString("en-IN")}{" "}
                                  ₹
                                </td>
                                <td class="fw-bolder fs-5 text-center">
                                  {trans.instantGoldApplied ? "Yes" : "No"}
                                </td>{" "}
                                <td class="fw-bolder fs-5 text-center">
                                  {trans.mode}
                                </td>{" "}
                                <td class="fw-bolder fs-5 text-center">
                                  {trans.status}
                                </td>{" "}
                              </tr>
                              <hr class="hr" />
                            </>
                          );
                        }
                      })} */}
                  </table>
                </div>
              </div>

              {/* <div class="card-box shadow-sm">
                <h4 class="header-title mb-3 badge badge-info fs-3">
                  My Plans
                </h4>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Plan Name</th>

                        <th>Plan Type</th>
                        <th>Bonus</th>
                        <th>Duration</th>
                        <th>Mode</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userPlan.map((plan) => {
                        return (
                          <tr>
                            <td>{myPlanSno++}</td>
                            <td>{plan.name}</td>

                            <td>{plan.planType}</td>
                            {plan.bonus ? (
                              <td>{plan.bonus} gm</td>
                            ) : (
                              <td>0 gm</td>
                            )}

                            <td>{plan.duration} months</td>
                            <td>{plan.mode}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-box shadow">
                <h4 class="header-title mb-3 badge badge-info fs-3">
                  My Subscriptions
                </h4>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Saving Amount</th>
                        <th>Plan Maturity</th>

                        <th>Plan Bonuses</th>
                        <th>Saving Weight</th>
                        <th>Skip Count</th>
                        <th>Status</th>
                        <th>Unpaid Investment</th>
                        <th>Unpaid Skip</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userSubscription.map((sub) => {
                        return (
                          <tr>
                            <td>{mySubSno++}</td>
                            <td>
                              ₹ {sub.savedAmount.toLocaleString("en-IN")}{" "}
                            </td>
                            <td>
                              {sub.maturityDate
                                ? sub.maturityDate.substring(0, 10)
                                : 0}
                            </td>
                            <td>{sub.planBonus} gm</td>
                            <td>{sub.savedWeight} gm</td>
                            <td>{sub.skipCount} </td>
                            <td>{sub.status}</td>
                            <td>
                              ₹ {sub.unpaidInvestments.toLocaleString("en-IN")}{" "}
                            </td>
                            <td>{sub.unpaidSkips}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-box shadow">
                <h4 class="header-title mb-3 badge badge-info fs-3">
                  Installments
                </h4>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Assigned Collector</th>
                        <th>Gold</th>
                        <th>Payment Mode</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userInstallments.map((installments) =>
                        installments.map((installment) => (
                          <tr>
                            <td>{myInstallSno++}</td>
                            <td>
                              {installment.collector
                                ? installment.collector
                                : "None"}
                            </td>
                            <td>{installment.gold} gm</td>
                            <td>{installment.mode} </td>
                            {installment.status === "Saved" ? (
                              <td className="badge badge-success">
                                {installment.status}
                              </td>
                            ) : (
                              <td className="badge badge-warning">
                                {installment.status}
                              </td>
                            )}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-box shadow">
                <h4 class="header-title mb-3 badge badge-info fs-3">
                  Cycle Periods
                </h4>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Cycle</th>
                        <th>Grace Period</th>

                        <th>Minimum Value</th>
                        <th>Minimum Weight</th>
                        <th>Saving amount</th>
                        <th>Short Name</th>

                        <th>Stauts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userCyclePeriod.map((cycle) => {
                        return (
                          <tr>
                            <td>{myCycleSno++}</td>
                            <td>{cycle.cycle} cycle</td>
                            <td>{cycle.graceperiod} Hrs</td>
                            <td>₹ {cycle.minValue.toLocaleString("en-IN")} </td>
                            <td>{cycle.minWeight} gm</td>
                            <td>{cycle.name} </td>
                            <td>{cycle.shortName}</td>
                            <td>{cycle.status}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div class ="text-center my-5">

      <button class ="btn btn-success mx-5">Approve</button>
      <button class ="btn btn-danger">Reject</button>
      </div>

    </>
  );
}
