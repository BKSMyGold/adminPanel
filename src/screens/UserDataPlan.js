import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
//=======================================================================================
const UserDataPlan = () => {
  const [Standardplan, setStandardplans] = useState([]);
  const [standardSubscriptions, setStandardSubscriptions] = useState([]);
  const [flexiSubscriptions, setFlexiSubscriptions] = useState([]);
  const [Users, setUsers] = useState([]);
  //=======================================================================================
  //   useEffect(() => {
  //   //   {
  //   //     /*
  //   //    	Get all Standard Plans Avaialable using api/plan/type/standard
  // 	// */
  //   //   }

  //     // const standardPlanResponse = [].constructor(2).fill({
  //     //   bonus: 1,
  //     //   createdAt: '2021-12-10T19:33:23.048Z',
  //     //   cyclePeriod: {
  //     //     createdAt: '2021-12-10T19:09:32.282Z',
  //     //     cycle: 10,
  //     //     docType: 'CyclePeriod',
  //     //     graceperiod: 240,
  //     //     id: '61b3a5ecea31faacc7b37863',
  //     //     minValue: 5000,
  //     //     minWeight: 1,
  //     //     name: 'Every Month',
  //     //     shortName: 'M',
  //     //     status: 'Active',
  //     //     updatedAt: '2021-12-10T19:09:32.282Z',
  //     //   },
  //     //   docType: 'Plan',
  //     //   duration: 24,
  //     //   id: '61b3ab83d59d6bacdd6ef5a3',
  //     //   mode: 'weight',
  //     //   name: '24 month Savings Plan',
  //     //   planType: 'Standard',
  //     //   updatedAt: '2021-12-10T19:33:23.048Z',
  //     // })

  //     axios.get(`${BASE_URL}/api/plan/type/standard`)
  //     .then(res =>

  //       setStandardplans(res.data.data))

  //   }, [])
  // console.log('Standardplan are ===>',Standardplan)
  //   {
  //     /*then Get the all subscription details which matches for each planID above */
  //   }

  //   useEffect(() => {
  //     {
  //       /*Use Endpoint to get all users */
  //     }
  //     {
  //       /*endpont = /api/subscription/   */
  //     }
  //     const StandardSubscriptionResponse = {
  //       createdAt: '2021-12-13T11:51:10.930Z',
  //       docType: 'Subscription',
  //       id: '61b733aeb2cb7fdd62a1ea29',
  //       installments: ['61b733acb2cb7fdd62a1ea28'],
  //       maturityDate: '2022-08-10T11:51:10.892Z',
  //       plan: '61b3ab83d59d6bacdd6ef5a3',
  //       planBonus: 2.4,
  //       skipCount: 0,
  //       status: 'Running',
  //       trackingId: '',
  //       unpaidInvestments: 0,
  //       unpaidSkips: 0,
  //       updatedAt: '2021-12-13T11:51:10.930Z',
  //       user: '61b3a63aea31faacc7b37864',
  //     }

  //     setStandardSubscriptions(StandardSubscriptionResponse)
  //   }, [])

  //   {
  //     /*then Get the all subscription details Where plantype Flexi */
  //   }

  //   useEffect(() => {
  //     {
  //       /*
  //      	/*endpont = /api/subscription/
  // 	*/
  //     }

  //     const FlexiSubscriptionResponse = [].constructor(2).fill({
  //       createdAt: '2021-12-13T11:53:44.682Z',
  //       customPlan: {
  //         cyclePeriod: [
  //           {
  //             createdAt: '2021-12-10T19:09:32.282Z',
  //             cycle: 10,
  //             docType: 'CyclePeriod',
  //             graceperiod: 240,
  //             id: '61b3a5ecea31faacc7b37863',
  //             minValue: 5000,
  //             minWeight: 1,
  //             name: 'Every Month',
  //             shortName: 'M',
  //             status: 'Active',
  //             updatedAt: '2021-12-10T19:09:32.282Z',
  //           },
  //         ],
  //         duration: 24,
  //         id: '61b73448b2cb7fdd62a1ea2b',
  //         mode: 'Value',
  //         name: 'Flexi Plan',
  //         planType: 'Flexi',
  //       },
  //       docType: 'Subscription',
  //       id: '61b73448b2cb7fdd62a1ea2c',
  //       installments: ['61b73446b2cb7fdd62a1ea2a'],
  //       maturityDate: null,
  //       planBonus: 0,
  //       skipCount: 0,
  //       status: 'Running',
  //       trackingId: '',
  //       unpaidInvestments: 0,
  //       unpaidSkips: 0,
  //       updatedAt: '2021-12-13T11:53:44.682Z',
  //       user: '61b716a57c3e83d0f634da04',
  //     })

  //     setFlexiSubscriptions(FlexiSubscriptionResponse)
  //   }, [])

  //   useEffect(() => {
  //     {
  //       /*Use Endpoint to get  user data for each subscription */
  //     }
  //     {
  //       /*endpont = api/user/:userId   */
  //     }
  //     const userResponse = {
  //       GBPBonusEntries: [],
  //       GBPcode: '',
  //       addresses: [],
  //       createdAt: '2021-12-10T19:10:50.435Z',
  //       deviceToken:
  //         'doHSXifERQGpCQyeHMMij6:APA91bHf9rudMzbqdwv3OjNuiLkI98pDgMKzrsJecfPt0i6F5whpi2d5R1sVleS5Ew823FwiECkEE8oEx6ezFt85NZpshZfcs2PuEpetIzBt5NMZSf7ZZPzefc3qAHixB6YaE4VuxV8x',
  //       dob: '2000-11-23',
  //       docType: 'User',
  //       email: 'ashutoshsenapati2311@gmail.com',
  //       fname: 'Ashutosh Senapati',
  //       id: '61b3a63aea31faacc7b37864',
  //       image:
  //         'https://bks-gold.s3.ap-south-1.amazonaws.com/User%2Fimage_picker6967090782453535724.jpg',
  //       isInvested: false,
  //       isWhatsapp: true,
  //       joiningBonus: 0,
  //       level: '',
  //       mobile: 9777139671,
  //       pan: 'DEPPP5884H',
  //       refCode: '',
  //       referenceType: '',
  //       referral: null,
  //       referralBonusEntries: [],
  //       role: '',
  //       updatedAt: '2021-12-14T05:50:11.532Z',
  //     }

  //     setUsers(userResponse)
  //   }, [])
  //=============================================================================================================
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/plan/type/standard`)
      .then((res) => setStandardplans(res.data.data));
  }, []);
  // console.log("Standardplan : ==>", Standardplan);
  //=============================================================================================================
  useEffect(() => {
    axios.get(`${BASE_URL}/api/user`).then((res) => setUsers(res.data));
  }, []);
  // console.log('users : ==>',Users)
  //=============================================================================================================
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription`)
      .then((res) => setStandardSubscriptions(res.data.subscriptions));
  }, []);
  console.log("standardSubscriptions : ==>", standardSubscriptions);
  //=============================================================================================================

  let sub12month = [];
  sub12month =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.plan && sub.plan.name === "12 month Savings Plan") {
        return sub.user;
      }
    });

  // console.log("12 month waale : ==>", sub12month);

  let sub12monthCycle = [];
  sub12monthCycle =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.plan && sub.plan.name === "12 Months Savings Plan") {
        return sub.plan.cyclePeriod;
      }
    });

  // console.log("12 month waali Cycle : ==>", sub12monthCycle);
  // console.log("Ajooba : ==>", sub12month.concat(sub12monthCycle));

  let arr = sub12monthCycle.concat(sub12month);

  let sub24month = [];
  sub24month =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.plan && sub.plan.name === "24 month Savings Plan") {
        return sub.user;
      }
    });

  // console.log("24 month waale : ==>", sub24month);

  let flexi = [];
  flexi =
    standardSubscriptions &&
    standardSubscriptions.map((sub) => {
      if (sub.customPlan && sub.customPlan.name === "Flexi Plan") {
        return sub.user;
      }
    });

  console.log("flexi : ==>", flexi);

  //=============================================================================================================
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
                      User Details As Per Plan
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      All Users Data as per Plan
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                {/* {Standardplan &&
                  Standardplan.map((Standard) => ( */}
                <div class="card-body py-3">
                  <h1>12 Months Savings Plan</h1>
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Mobile</th>

                          <th class="min-w-100px">Email</th>
                          <th class="min-w-120px">PAN</th>
                        </tr>
                      </thead>

                      <tbody>
                        {sub12month.map((sub12month) => {
                          if (sub12month !== undefined) {
                            return (
                              <tr>
                                <td>{sub12month.id}</td>
                                <td>{sub12month.fname}</td>
                                <td>{sub12month.mobile}</td>
                                <td>{sub12month.email}</td>
                                <td>
                                  {sub12month.pan ? sub12month.pan : "NaN"}
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card-body py-3">
                  <h1>24 Months Savings Plan</h1>
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Mobile</th>
                          <th class="min-w-100px">Email</th>
                          <th class="min-w-120px">PAN</th>
                        </tr>
                      </thead>

                      <tbody>
                        {sub24month.map((sub24month) => {
                          if (typeof sub24month !== "undefined") {
                            return (
                              <tr>
                                <td>{sub24month.id}</td>
                                <td>{sub24month.fname}</td>
                                <td>{sub24month.mobile}</td>
                                <td>{sub24month.email}</td>
                                <td>
                                  {sub24month.pan ? sub24month.pan : "NaN"}
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card-body py-3">
                  <h1>Flexi Plan</h1>
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Full Name</th>
                          <th class="min-w-120px">Mobile</th>
                          <th class="min-w-120px">Email</th>

                          <th class="min-w-120px">PAN</th>
                        </tr>
                      </thead>

                      <tbody>
                        {flexi.map((Users) => {
                          if (Users !== undefined) {
                            return (
                              <tr>
                                <td>{Users.id}</td>
                                <td>{Users.fname}</td>
                                <td>{Users.mobile}</td>
                                <td>{Users.email}</td>
                                <td>{Users.pan ? Users.pan : "Nan"}</td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
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

export default UserDataPlan;
