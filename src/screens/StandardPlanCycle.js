import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { BASE_URL } from "../Constants";
import axios from "axios";
import { Link } from "react-router-dom";

const formatDate = (date) => {
  date = new Date(date);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}-${month}-${day}`;
};

const StandardPlanCycle = () => {
  const [CyclePeriod, setCyclePeriod] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionsByUser, setSubscriptionsByUser] = useState({});
  const [buySell, setBuySell] = useState([]);
  useEffect(() => {
    const fetchBuySell = async () => {
      const { data } = await axios.get(
        "http://13.59.57.74:5000/api/cycle-period/"
      );
      console.log(data);
      setBuySell(data);
    };
    fetchBuySell();

    const fetchSubscriptions = async () => {
      const { data } = await axios.get(
        "http://13.59.57.74:5000/api/subscription/"
      );
      setSubscriptions(data.subscriptions);
    };
    fetchSubscriptions();

    const fetchcycleperiods = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/cycle-period`);

      setCyclePeriod(data);
    };
    fetchcycleperiods();

    const fetchtotalOfSubscriptionByUser = () => {
      let subscriptionsData = {};

      subscriptions.forEach(async (subscription) => {
        const { data } = await axios.get(
          `http://13.59.57.74:5000/api/subscription/balance/individual/${subscription.user.id}/${subscription.id}`
        );
        subscriptionsData[subscription.user.id] = data.totalGold;
      });

      setSubscriptionsByUser({ ...subscriptionsData });
    };
    fetchtotalOfSubscriptionByUser();
  }, []);
  console.log("buySell: ", buySell);
  console.log("subs: ", subscriptions);
  let std = subscriptions.filter((x) => {
    if (x.plan && x.plan !== undefined) {
      if (x.plan.planType === "Standard") {
        return x;
      }
    }
  });

  console.log("Mil gaya ==> ", std);

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />

          <div
            id="kt_content_container"
            class="d-flex flex-column-fluid align-items-start container-xxl mt-20"
          >
            {/*begin::Post*/}
            <div class="content flex-row-fluid" id="kt_content">
              {/*begin::Row*/}

              {/*begin::Tables Widget 13*/}
              <div class="card mb-5 mb-xl-8">
                {/*begin::Header*/}
                <div class="card-header border-0 pt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">
                      Standard Plan User Details As Per Cycle Period
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      All Users Data as per Cycle Periods for Standard Plan
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                {/* {CyclePeriod.map((cycle) => ( */}
                <div class="card-body py-3">
                  <h1>Every Month</h1> <span class = 'badge badge-danger'>{std.length} Users</span>
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Mode</th>

                          <th class="min-w-120px">Maturity Date</th>
                          <th class="min-w-120px">Status</th>

                          <th class="min-w-100px ">Saved Gold</th>
                          <th class="min-w-100px ">Maturity Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* {subscriptions.map((subscription) => {
                            if (
                              (subscription.customPlan &&
                                subscription.customPlan.cyclePeriod.name) ===
                                buySell[0].name &&
                              subscription.mode === "Value"
                            ) {
                              return (
                                <tr>
                                  <td>{subscription.id}</td>
                                  <td>{subscription.user.fname}</td>
                                  <td>{subscription.customPlan.mode}</td>
                                  <td>
                                    {formatDate(subscription.maturityDate)}
                                  </td>
                                  <td>{subscription.status}</td>
                                  <td>
                                    {subscriptionsByUser[subscription.user.id]}
                                  </td>
                                  <td>
                                    {subscription.status !== "Completed"
                                      ? "Un Matured"
                                      : "Matured"}
                                  </td>
                                </tr>
                              );
                            }
                          })} */}
                        {std.map((x) => {
                          return (
                            <tr>
                              <td>{x.id}</td>
                              <Link to="/user_details" state={x.user}>
                                <td>{x.user.fname}</td>
                              </Link>
                              <td>{x.plan.mode}</td>
                              <td>{x.maturityDate.substring(0, 10)}</td>

                              <td>{x.status}</td>
                              <td>{x.installments.map((x) => x.gold)} gm</td>
                              <td>{x.installments.map((x) => x.status)} </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/*end::Table container*/}
                </div>
                {/* ))} */}
                {/*begin::Body*/}
              </div>
              {/*end::Tables Widget 13*/}
            </div>
            {/*end::Post*/}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StandardPlanCycle;
