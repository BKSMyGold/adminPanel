import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { BASE_URL } from "../Constants";
import axios from "axios";

const UserDataCycle = () => {
  const [CyclePeriod, setCyclePeriod] = useState([]);
  const [Standardplan, setStandardplans] = useState([]);
  const [standardSubscriptionsByCyclePeriod, setStandardSubscriptions] =
    useState([]);
  const [flexiSubscriptionsByCyclePeriod, setFlexiSubscriptions] = useState([]);
  const [Users, setUsers] = useState([]);
  const [sub, setSub] = useState([]);

  {
    /*Step 1 Get all Cycle Periods */
  }

  // useEffect(() => {
  //   const fetchcycleperiods = async () => {
  //     const { data } = await axios.get(`${BASE_URL}/api/cycle-period`)

  //     setCyclePeriod(data)
  //   }
  //   fetchcycleperiods()
  // }, [])

  // {
  //   /*Step 2 Get all standard plan ID which matches the cycle period  */
  // }
  // useEffect(() => {
  //   {
  //     /*
  //    	Get all Standard Plans Avaialable using api/plan/type/standard
  // */
  //   }

  //   const standardPlanResponse = [].constructor(2).fill({
  //     bonus: 1,
  //     createdAt: '2021-12-10T19:33:23.048Z',
  //     cyclePeriod: {
  //       createdAt: '2021-12-10T19:09:32.282Z',
  //       cycle: 10,
  //       docType: 'CyclePeriod',
  //       graceperiod: 240,
  //       id: '61b3a5ecea31faacc7b37863',
  //       minValue: 5000,
  //       minWeight: 1,
  //       name: 'Every Month',
  //       shortName: 'M',
  //       status: 'Active',
  //       updatedAt: '2021-12-10T19:09:32.282Z',
  //     },
  //     docType: 'Plan',
  //     duration: 24,
  //     id: '61b3ab83d59d6bacdd6ef5a3',
  //     mode: 'weight',
  //     name: '24 month Savings Plan',
  //     planType: 'Standard',
  //     updatedAt: '2021-12-10T19:33:23.048Z',
  //   })

  //   setStandardplans(standardPlanResponse)
  // }, [])

  // useEffect(() => {
  //   {
  //     /*Use Endpoint to get all subscriptions which matches the plan id we got each */
  //   }
  //   {
  //     /*endpont = /api/subscription/   */
  //   }
  //   const StandardSubscriptionResponse = {
  //     createdAt: '2021-12-13T11:51:10.930Z',
  //     docType: 'Subscription',
  //     id: '61b733aeb2cb7fdd62a1ea29',
  //     installments: ['61b733acb2cb7fdd62a1ea28'],
  //     maturityDate: '2022-08-10T11:51:10.892Z',
  //     plan: '61b3ab83d59d6bacdd6ef5a3',
  //     planBonus: 2.4,
  //     skipCount: 0,
  //     status: 'Running',
  //     trackingId: '',
  //     unpaidInvestments: 0,
  //     unpaidSkips: 0,
  //     updatedAt: '2021-12-13T11:51:10.930Z',
  //     user: '61b3a63aea31faacc7b37864',
  //   }

  //   setStandardSubscriptions(StandardSubscriptionResponse)
  // }, [])

  // {
  //   /*then Get the all subscription details Where plantype Flexi and matches cycle period in custom plan*/
  // }

  // useEffect(() => {
  //   {
  //     /*
  //    	/*endpont = /api/subscription/
  // */
  //   }

  //   const FlexiSubscriptionResponse = [].constructor(2).fill({
  //     createdAt: '2021-12-13T11:53:44.682Z',
  //     customPlan: {
  //       cyclePeriod: [
  //         {
  //           createdAt: '2021-12-10T19:09:32.282Z',
  //           cycle: 10,
  //           docType: 'CyclePeriod',
  //           graceperiod: 240,
  //           id: '61b3a5ecea31faacc7b37863',
  //           minValue: 5000,
  //           minWeight: 1,
  //           name: 'Every Month',
  //           shortName: 'M',
  //           status: 'Active',
  //           updatedAt: '2021-12-10T19:09:32.282Z',
  //         },
  //       ],
  //       duration: 24,
  //       id: '61b73448b2cb7fdd62a1ea2b',
  //       mode: 'Value',
  //       name: 'Flexi Plan',
  //       planType: 'Flexi',
  //     },
  //     docType: 'Subscription',
  //     id: '61b73448b2cb7fdd62a1ea2c',
  //     installments: ['61b73446b2cb7fdd62a1ea2a'],
  //     maturityDate: null,
  //     planBonus: 0,
  //     skipCount: 0,
  //     status: 'Running',
  //     trackingId: '',
  //     unpaidInvestments: 0,
  //     unpaidSkips: 0,
  //     updatedAt: '2021-12-13T11:53:44.682Z',
  //     user: '61b716a57c3e83d0f634da04',
  //   })

  //   setFlexiSubscriptions(FlexiSubscriptionResponse)
  // }, [])

  // useEffect(() => {
  //   {
  //     /*Use Endpoint to get  user data for each subscription */
  //   }
  //   {
  //     /*endpont = api/user/:userId   */
  //   }
  //   const userResponse = {
  //     GBPBonusEntries: [],
  //     GBPcode: '',
  //     addresses: [],
  //     createdAt: '2021-12-10T19:10:50.435Z',
  //     deviceToken:
  //       'doHSXifERQGpCQyeHMMij6:APA91bHf9rudMzbqdwv3OjNuiLkI98pDgMKzrsJecfPt0i6F5whpi2d5R1sVleS5Ew823FwiECkEE8oEx6ezFt85NZpshZfcs2PuEpetIzBt5NMZSf7ZZPzefc3qAHixB6YaE4VuxV8x',
  //     dob: '2000-11-23',
  //     docType: 'User',
  //     email: 'ashutoshsenapati2311@gmail.com',
  //     fname: 'Ashutosh Senapati',
  //     id: '61b3a63aea31faacc7b37864',
  //     image:
  //       'https://bks-gold.s3.ap-south-1.amazonaws.com/User%2Fimage_picker6967090782453535724.jpg',
  //     isInvested: false,
  //     isWhatsapp: true,
  //     joiningBonus: 0,
  //     level: '',
  //     mobile: 9777139671,
  //     pan: 'DEPPP5884H',
  //     refCode: '',
  //     referenceType: '',
  //     referral: null,
  //     referralBonusEntries: [],
  //     role: '',
  //     updatedAt: '2021-12-14T05:50:11.532Z',
  //   }

  //   setUsers(userResponse)
  // }, [])
  //===================================================================================
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/subscription/`)
      .then((res) => setSub(res.data.subscriptions));
  }, []);
  console.log('==>', sub)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/cycle-period/`)
      .then((res) => setCyclePeriod(res.data));
  }, []);
  // console.log('==>', CyclePeriod)

  let cycleName = [];
  cycleName = CyclePeriod.map((name) => name.name);
  console.log('==>', cycleName)

  let cycleSub = sub.filter((sub) => {
    if (sub.plan && sub.plan.cyclePeriod.name === cycleName[0]) {
      //  console.log('===>', sub.plan.cyclePeriod.name)
      return sub;
    }
  });
  console.log("Mil gaya =====>", cycleSub);

  let cycleSub2 = sub.filter((sub) => {
    if (sub.customPlan  &&  sub.customPlan.cyclePeriod.name === cycleName[1]) {
      //  console.log('===>', sub.plan.cyclePeriod.name)
      return sub;
    }
  });
  console.log('Mil gaya again=====>', cycleSub2)
  //===================================================================================
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
                      User Details As Per Cycle Period
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      All Users Data as per Cycle Periods
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                {/* {cycleSub.map((cycle) => ( */}
                <div class="card-body py-3">
                  {/* <h1>{cycle.name}</h1> */}
                  <h1>{cycleName[0]}</h1>
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Cycle Name</th>
                          <th class="min-w-100px">Plan Type</th>
                          <th class="min-w-100px">Mode</th>
                          <th class="min-w-120px">Maturity Date</th>
                          <th class="min-w-120px">Status</th>
                          <th class="min-w-100px ">Saved Gold</th>
                          <th class="min-w-100px ">Maturity Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cycleSub.map((Users) => {
                          if (Users.plan !== undefined) {
                            return (
                              <tr>
                                <td>{Users.user.id}</td>
                                <td>{Users.user.fname}</td>
                                <td>
                                  {Users.plan.cyclePeriod.name
                                    ? Users.plan.cyclePeriod.name
                                    : "Name"}
                                </td>
                                <td>{Users.plan.planType}</td>
                                <td>{Users.plan.mode}</td>
                                <td>{Users.maturityDate}</td>
                                <td>{Users.status}</td>
                                <td>
                                  {Users.installments.map((x) => x.gold)} gm
                                </td>
                                <td>
                                  {Users.installments.map((x) => x.status)}
                                </td>
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/*end::Table container*/}
                </div>


                <div class="card-body py-3">
                  {/* <h1>{cycle.name}</h1> */}
                  <h1>{cycleName[1]}</h1>
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr class="fw-bolder text-muted">
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Customer Name</th>
                          <th class="min-w-140px">Cycle Name</th>
                          <th class="min-w-100px">Plan Type</th>
                          <th class="min-w-100px">Mode</th>
                          <th class="min-w-120px">Maturity Date</th>
                          <th class="min-w-120px">Status</th>
                          <th class="min-w-100px ">Saved Gold</th>
                          <th class="min-w-100px ">Maturity Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {cycleSub2.map((Users) => {
                          if (Users.plan !== undefined) {
                            return (
                              <tr>
                                <td>{Users.user.id}</td>
                                <td>{Users.user.fname}</td>
                                <td>
                                 {Users.customPlan.cyclePeriod.name}
                                </td>
                                <td>{Users.customPlan.planType}</td>
                                <td>{Users.customPlan.mode || Users.plan.mode}</td>
                                <td>{Users.maturityDate}</td>
                                <td>{Users.status}</td>
                                <td>
                                  {Users.installments.map((x) => x.gold)} gm
                                </td>
                                <td>
                                  {Users.installments.map((x) => x.status)}
                                </td>
                              </tr>
                            );
                          }
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

export default UserDataCycle;
