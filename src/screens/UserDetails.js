import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constants";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";

export default function UserDetails () {
  const location = useLocation();
  const user = location.state;
  console.log("aaya user ===>", user);

  const [userSubscription, setUserSubscription] = React.useState([]);
  const [planBonus, setPlanBonus] = React.useState([]);

  React.useEffect(() => {
    const fetchSubscription = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/api/subscription/user/${user.id}`
      );
      setUserSubscription(data.data);
    };
    fetchSubscription();
  }, []);
  console.log("Users subscription ==>", userSubscription);

  let userPlan = {};
  userPlan = userSubscription.map((c) => c.plan);
  console.log("Users plan =====>", userPlan);

  let totalBonus = [];
  totalBonus = userPlan.map((plan) => plan.bonus);
  let bonusSum = 0;
  for (let i = 0; i < totalBonus.length; i++) {
    bonusSum += totalBonus[i];
    console.log("planBonus", bonusSum);
  }

  let userCyclePeriod = {};
  userCyclePeriod = userSubscription.map((c) => c.plan.cyclePeriod);
  console.log("Users CyclePeriod =====>", userCyclePeriod);

  let userInstallments = {};
  userInstallments = userSubscription.map((c) => c.installments);
  console.log("Users Installments =====>", userInstallments);

  //==================================================================================================================================
  return (
    <>
      <Header />
      <Dashboard />
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="profile-user-box card-box bg-custom">
                <div class="row">
                  <div class="col-sm-6">
                    <span class="float-left mr-3">
                      {user.image ? (
                        <img
                          src={user.image}
                          alt=""
                          class="thumb-lg rounded-circle"
                        />
                      ) : (
                        <img
                          src="assets/media/avatars/150-2.jpg"
                          alt=""
                          class="thumb-lg rounded-circle"
                        />
                      )}
                    </span>
                    <div class="media-body text-white">
                      <h4 class="mt-1 mb-1 font-15 text-white">{user.fname}</h4>
                      <p class="font-13 text-light">
                        BKS My Gold User
                        <br />
                        Lucknow, India
                      </p>
                    </div>
                  </div>
                  {/* <div class="col-sm-6">
                  <div class="text-right">
                    <button type="button" class="btn btn-light waves-effect">
                      <i class="mdi mdi-account-settings-variant mr-1"></i> Edit
                      Profile
                    </button>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4">
              <div class="card-box shadow-sm">
                <h4 class="header-title mt-0">Personal Information</h4>
                <div class="panel-body">
                  {/* <p class="text-muted font-13">
                    Hye, I’m Johnathan Doe residing in this beautiful world. I
                    create websites and mobile apps with great UX and UI design.
                    I have done work with big companies like Nokia, Google and
                    Yahoo. Meet me or Contact me for any queries. One Extra line
                    for filling space. Fill as many you want.
                  </p>
                  <hr /> */}
                  <div class="text-left">
                    <p class="text-muted font-13">
                      <strong>Full Name :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.fname}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Mobile :</strong>
                      <span class="m-l-15 text-dark fw-bolder">
                        (+91) {user.mobile}{" "}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Email :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.email}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Location :</strong>{" "}
                      <span class="m-l-15">USA</span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Languages :</strong>{" "}
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-us m-r-5 m-t-0"
                          title="us"
                        ></span>{" "}
                        <span class="text-dark fw-bolder">English</span>{" "}
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
                  <ul class="social-links list-inline mt-4 mb-0">
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i class="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="card-box shadow-sm">
                <h4 class="header-title mt-0">Appointment Information</h4>
                <div class="panel-body">
                  {/* <p class="text-muted font-13">
                    Hye, I’m Johnathan Doe residing in this beautiful world. I
                    create websites and mobile apps with great UX and UI design.
                    I have done work with big companies like Nokia, Google and
                    Yahoo. Meet me or Contact me for any queries. One Extra line
                    for filling space. Fill as many you want.
                  </p>
                  <hr /> */}
                  <div class="text-left">
                    <p class="text-muted font-13">
                      <strong>Full Name :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.fname}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Mobile :</strong>
                      <span class="m-l-15 text-dark fw-bolder">
                        (+91) {user.mobile}{" "}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Email :</strong>{" "}
                      <span class="m-l-15 text-dark fw-bolder">
                        {user.email}
                      </span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Location :</strong>{" "}
                      <span class="m-l-15">USA</span>
                    </p>
                    <p class="text-muted font-13">
                      <strong>Languages :</strong>{" "}
                      <span class="m-l-5">
                        <span
                          class="flag-icon flag-icon-us m-r-5 m-t-0"
                          title="us"
                        ></span>{" "}
                        <span class="text-dark fw-bolder">English</span>{" "}
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
                  <ul class="social-links list-inline mt-4 mb-0">
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                        <i class="fa fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              {/* <div class="card-box ribbon-box">
              <div class="ribbon ribbon-primary">Appointment</div>
              <div class="clearfix"></div>
              <div class="inbox-widget">
                <a href="#">
                  <div class="inbox-item">
                    <div class="inbox-item-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        class="rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="inbox-item-author">Tomaslau</p>
                    <p class="inbox-item-text">
                      I've finished it! See you so...
                    </p>
                    <p class="inbox-item-date">
                      <button
                        type="button"
                        class="btn btn-icon btn-sm waves-effect waves-light btn-success"
                      >
                        Reply
                      </button>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div class="inbox-item">
                    <div class="inbox-item-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        class="rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="inbox-item-author">Stillnotdavid</p>
                    <p class="inbox-item-text">This theme is awesome!</p>
                    <p class="inbox-item-date">
                      <button
                        type="button"
                        class="btn btn-icon btn-sm waves-effect waves-light btn-success"
                      >
                        Reply
                      </button>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div class="inbox-item">
                    <div class="inbox-item-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                        class="rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="inbox-item-author">Kurafire</p>
                    <p class="inbox-item-text">Nice to meet you</p>
                    <p class="inbox-item-date">
                      <button
                        type="button"
                        class="btn btn-icon btn-sm waves-effect waves-light btn-success"
                      >
                        Reply
                      </button>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div class="inbox-item">
                    <div class="inbox-item-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                        class="rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="inbox-item-author">Shahedk</p>
                    <p class="inbox-item-text">Hey! there I'm available...</p>
                    <p class="inbox-item-date">
                      <button
                        type="button"
                        class="btn btn-icon btn-sm waves-effect waves-light btn-success"
                      >
                        Reply
                      </button>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div class="inbox-item">
                    <div class="inbox-item-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar6.png"
                        class="rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="inbox-item-author">Adhamdannaway</p>
                    <p class="inbox-item-text">This theme is awesome!</p>
                    <p class="inbox-item-date">
                      <button
                        type="button"
                        class="btn btn-icon btn-sm waves-effect waves-light btn-success"
                      >
                        Reply
                      </button>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div class="inbox-item">
                    <div class="inbox-item-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        class="rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="inbox-item-author">Tomaslau</p>
                    <p class="inbox-item-text">
                      I've finished it! See you so...
                    </p>
                    <p class="inbox-item-date">
                      <button
                        type="button"
                        class="btn btn-icon btn-sm waves-effect waves-light btn-success"
                      >
                        Reply
                      </button>
                    </p>
                  </div>
                </a>
                <a href="#">
                  <div class="inbox-item">
                    <div class="inbox-item-img">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        class="rounded-circle"
                        alt=""
                      />
                    </div>
                    <p class="inbox-item-author">Stillnotdavid</p>
                    <p class="inbox-item-text">This theme is awesome!</p>
                    <p class="inbox-item-date">
                      <button
                        type="button"
                        class="btn btn-icon btn-sm waves-effect waves-light btn-success"
                      >
                        Reply
                      </button>
                    </p>
                  </div>
                </a>
              </div>
            </div> */}
            </div>







            
            <div class="col-xl-8">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-layers float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">
                      Total Gold Bonus
                    </h6>
                    <h2 class="" data-plugin="counterup">
                      {/* {userPlan.map(plan =>plan.bonus ).reduce((a,b)=>
                    <span>{a+b}</span>
                    
                    )} */}

                      <span>{bonusSum} gm</span>
                    </h2>
                    <span class="badge badge-custom">+11% </span>
                    <span class="text-muted"> From previous period</span>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-paypal float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">Revenue</h6>
                    <h2 class="">
                      $<span data-plugin="counterup">46,782</span>
                    </h2>
                    <span class="badge badge-danger">-29% </span>
                    <span class="text-muted">From previous period</span>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card-box tilebox-one shadow-sm">
                    <i class="icon-rocket float-right text-muted"></i>
                    <h6 class="text-muted text-uppercase mt-0">Product Sold</h6>
                    <h2 class="" data-plugin="counterup">
                      1,890
                    </h2>
                    <span class="badge badge-custom">+89% </span>
                    <span class="text-muted">Last year</span>
                  </div>
                </div>
              </div>
              {/* <div class="card-box">
              <h4 class="header-title mt-0 mb-3">Experience</h4>
              <div class="">
                <div class="">
                  <h5 class="text-custom">Lead designer / Developer</h5>
                  <p class="mb-0">websitename.com</p>
                  <p>
                    <b>2010-2015</b>
                  </p>
                  <p class="text-muted font-13 mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <hr />
                <div class="">
                  <h5 class="text-custom">Senior Graphic Designer</h5>
                  <p class="mb-0">coderthemes.com</p>
                  <p>
                    <b>2007-2009</b>
                  </p>
                  <p class="text-muted font-13 mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div> */}
              <div class="card-box shadow-sm">
                <h4 class="header-title mb-3 badge badge-info fs-3">My Plans</h4>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Plan Name</th>
                        <th>Start Date</th>
                        
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
                            <td>1</td>
                            <td>{plan.name}</td>
                            <td>{plan.createdAt.substring(0, 10)}</td>
                            <td>{plan.planType}</td>
                            <td>{plan.bonus} gm</td>
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
                <h4 class="header-title mb-3 badge badge-info fs-3">My Subscriptions</h4>
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
                            <td>1</td>
                            <td>{sub.savedAmount} ₹</td>
                            <td>{sub.maturityDate.substring(0, 10)}</td>
                            <td>{sub.planBonus} gm</td>
                            <td>{sub.savedWeight} gm</td>
                            <td>{sub.skipCount} </td>
                            <td>{sub.status}</td>
                             <td>{sub.unpaidInvestments} ₹</td>
                             <td>{sub.unpaidSkips}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-box shadow">
                <h4 class="header-title mb-3 badge badge-info fs-3">My Subscriptions</h4>
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
                            <td>1</td>
                            <td>{sub.savedAmount} ₹</td>
                            <td>{sub.maturityDate.substring(0, 10)}</td>
                            <td>{sub.planBonus} gm</td>
                            <td>{sub.savedWeight} gm</td>
                            <td>{sub.skipCount} </td>
                            <td>{sub.status}</td>
                             <td>{sub.unpaidInvestments} ₹</td>
                             <td>{sub.unpaidSkips}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-box shadow">
                <h4 class="header-title mb-3 badge badge-info fs-3">Installments</h4>
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
                      installments.map((installment) =>(

                          <tr>
                            <td>1</td>
                            <td>{installment.collector ? installment.collector : "None" }</td>
                            <td>{installment.gold} gm</td>
                            <td>{installment.mode} </td>
                            <td>{installment.status} </td> 
                          </tr>
                      ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="card-box shadow">
                <h4 class="header-title mb-3 badge badge-info fs-3">Cycle Periods</h4>
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
                            <td>1</td>
                            <td>{cycle.cycle} cycle</td>
                            <td>{cycle.graceperiod} Hrs</td>
                            <td>{cycle.minValue} ₹</td>
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
              </div>

              {/* <div class="card-box">
                <h4 class="header-title mb-3">My Transaction</h4>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Assign</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Adminox Admin</td>
                        <td>01/01/2015</td>
                        <td>07/05/2015</td>
                        <td>
                          <span class="label label-info">Work in Progress</span>
                        </td>
                        <td>Coderthemes</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Adminox Frontend</td>
                        <td>01/01/2015</td>
                        <td>07/05/2015</td>
                        <td>
                          <span class="label label-success">Pending</span>
                        </td>
                        <td>Coderthemes</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Adminox Admin</td>
                        <td>01/01/2015</td>
                        <td>07/05/2015</td>
                        <td>
                          <span class="label label-pink">Done</span>
                        </td>
                        <td>Coderthemes</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Adminox Frontend</td>
                        <td>01/01/2015</td>
                        <td>07/05/2015</td>
                        <td>
                          <span class="label label-purple">
                            Work in Progress
                          </span>
                        </td>
                        <td>Coderthemes</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Adminox Admin</td>
                        <td>01/01/2015</td>
                        <td>07/05/2015</td>
                        <td>
                          <span class="label label-warning">Coming soon</span>
                        </td>
                        <td>Coderthemes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
