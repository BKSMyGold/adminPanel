import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { BASE_URL } from "../Constants";
import axios from "axios";
import { Link } from "react-router-dom";

const SkipNowUser = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  const [plans, setPlans] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    {
      /*
			 /*endpont = /api/subscription/   where status = forfieted
		*/
    }

    const SubscriptionResponse = [].constructor(1).fill({
      createdAt: "2021-12-13T11:53:44.682Z",
      customPlan: {
        cyclePeriod: [
          {
            createdAt: "2021-12-10T19:09:32.282Z",
            cycle: 10,
            docType: "CyclePeriod",
            graceperiod: 240,
            id: "61b3a5ecea31faacc7b37863",
            minValue: 5000,
            minWeight: 1,
            name: "Every Month",
            shortName: "M",
            status: "Active",
            updatedAt: "2021-12-10T19:09:32.282Z",
          },
        ],
        duration: 24,
        id: "61b73448b2cb7fdd62a1ea2b",
        mode: "Value",
        name: "Flexi Plan",
        planType: "Flexi",
      },
      docType: "Subscription",
      id: "61b73448b2cb7fdd62a1ea2c",
      installments: ["61b73446b2cb7fdd62a1ea2a"],
      maturityDate: null,
      planBonus: 0,
      skipCount: 0,
      status: "Running",
      trackingId: "",
      unpaidInvestments: 0,
      unpaidSkips: 0,
      updatedAt: "2021-12-13T11:53:44.682Z",
      user: "61b716a57c3e83d0f634da04",
    });

    // setSubscriptions(SubscriptionResponse)
  }, []);

  useEffect(() => {
    {
      /*Use Endpoint to get  user data for each subscription */
    }
    {
      /*endpont = api/user/:userId   */
    }
    const userResponse = {
      GBPBonusEntries: [],
      GBPcode: "",
      addresses: [],
      createdAt: "2021-12-10T19:10:50.435Z",
      deviceToken:
        "doHSXifERQGpCQyeHMMij6:APA91bHf9rudMzbqdwv3OjNuiLkI98pDgMKzrsJecfPt0i6F5whpi2d5R1sVleS5Ew823FwiECkEE8oEx6ezFt85NZpshZfcs2PuEpetIzBt5NMZSf7ZZPzefc3qAHixB6YaE4VuxV8x",
      dob: "2000-11-23",
      docType: "User",
      email: "ashutoshsenapati2311@gmail.com",
      fname: "Ashutosh Senapati",
      id: "61b3a63aea31faacc7b37864",
      image:
        "https://bks-gold.s3.ap-south-1.amazonaws.com/User%2Fimage_picker6967090782453535724.jpg",
      isInvested: false,
      isWhatsapp: true,
      joiningBonus: 0,
      level: "",
      mobile: 9777139671,
      pan: "DEPPP5884H",
      refCode: "",
      referenceType: "",
      referral: null,
      referralBonusEntries: [],
      role: "",
      updatedAt: "2021-12-14T05:50:11.532Z",
    };

    setUsers(userResponse);
  }, []);

  useEffect(() => {
    {
      /*
			 Get all  Plans Avaialable using api/plan/:planid 
		*/
    }

    const PlanResponse = {
      bonus: 1,
      createdAt: "2021-12-10T19:33:23.048Z",
      cyclePeriod: {
        createdAt: "2021-12-10T19:09:32.282Z",
        cycle: 10,
        docType: "CyclePeriod",
        graceperiod: 240,
        id: "61b3a5ecea31faacc7b37863",
        minValue: 5000,
        minWeight: 1,
        name: "Every Month",
        shortName: "M",
        status: "Active",
        updatedAt: "2021-12-10T19:09:32.282Z",
      },
      docType: "Plan",
      duration: 24,
      id: "61b3ab83d59d6bacdd6ef5a3",
      mode: "weight",
      name: "24 month Savings Plan",
      planType: "Standard",
      updatedAt: "2021-12-10T19:33:23.048Z",
    };

    setPlans(PlanResponse);
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription`)
      .then((res) => setSubscriptions(res.data.subscriptions));
  }, []);
  let skipUser = subscriptions.filter((x) => {
    if (x.status === "forfieted") {
      return x;
    }
  });
  console.log("AAyaa =====>>", skipUser);
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
                      Full Subscriptions Data converted to normal Plans
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      All Subscriptions Full User Data
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    {/*begin::Table*/}
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      {/*begin::Table head*/}
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Plan Name</th>
                          <th class="min-w-140px">Cycle Name</th>
                          <th class="min-w-120px">Skips Clicked</th>
                          <th class="min-w-120px">Status</th>
                          <th class="min-w-120px">Unpaid Skips</th>
                        </tr>
                      </thead>

                      <tbody>
                        {subscriptions &&
                          subscriptions.map((subscription) => {
                            if (
                              subscription.plan &&
                              subscription.plan !== undefined
                            ) {
                              return (
                                <tr>
                                  <td>{subscription.user.id}</td>
                                  <Link 
                                  to="/user_details"
                                  state = {subscription.user}
                                  >
                                    <td>{subscription.user.fname}</td>
                                  </Link>
                                  <td>{subscription.plan.name}</td>
                                  <td>{subscription.plan.cyclePeriod.name}</td>
                                  <td>{subscription.skipCount}</td>
                                  <td>{subscription.status}</td>
                                  <td>{subscription.unpaidSkips}</td>
                                </tr>
                              );
                            }
                          })}
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
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

export default SkipNowUser;
