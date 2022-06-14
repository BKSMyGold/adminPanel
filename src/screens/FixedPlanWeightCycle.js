import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Dashboard from './dashboard'
import axios from 'axios'
import {Link} from 'react-router-dom'

const formatDate = (date) => {
  date = new Date(date)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return `${year}-${month}-${day}`
}

const FixedPlanWeightCycle = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [subscriptionsByUser, setSubscriptionsByUser] = useState(null)
  const [buySell, setBuySell] = useState(null)
  useEffect(() => {
    const fetchBuySell = async () => {
      const { data } = await axios.get('http://13.59.57.74:5000/api/cycle-period/')
      setBuySell(data)
    }
    fetchBuySell()

    const fetchtotalOfSubscriptionByUser = () => {
      let subscriptionsData = {}
      subscriptions.forEach(async (subscription) => {
        const { data } = await axios.get(`http://13.59.57.74:5000/api/subscription/balance/individual/${subscription.user.id}/${subscription.id}`)
        subscriptionsData[subscription.user.id] = data.totalGold
      })

      setSubscriptionsByUser(subscriptionsData)
    }
    fetchtotalOfSubscriptionByUser()

    const fetchSubscription = async () => {
      const { data } = await axios.get('http://13.59.57.74:5000/api/subscription/')

      // Setting "mode" property for each subscription
      data.subscriptions.forEach(subscription => {
        subscription['mode'] = subscription.plan !== null ? subscription.plan.mode : subscription.customPlan.mode
      })
      // setSubscriptions(data.subscriptions.filter(subscription => ((subscription['plan']['cyclePeriod']['name'] === buySell['name']) || (subscription.customPlan && subscription['customPlan']['cyclePeriod'][0]['name'] === buySell['name'])) && (subscription.mode === 'Weight' || subscription.mode === 'weight')))
      setSubscriptions(data.subscriptions)
    }
    fetchSubscription()
  }, []);


  console.log(subscriptions)

  let subByWeight = subscriptions.filter(x =>{
    if (x.plan && x.plan!== undefined) {
      if(x.plan.mode === "weight" || x.plan.mode === "Weight"){
        return(
          x
        )
      }

    }
  })
console.log("Lo and Behold =>", subByWeight)

  return (
    <div className='d-flex flex-column flex-root'>
      <div className='page d-flex flex-row flex-column-fluid'>
        <div
          className='wrapper d-flex flex-column flex-row-fluid'
          id='kt_wrapper'
        >
          <Header />

          <div
            id='kt_content_container'
            class='d-flex flex-column-fluid align-items-start container-xxl mt-20'
          >
            {/*begin::Post*/}
            <div class='content flex-row-fluid' id='kt_content'>
              {/*begin::Row*/}

              {/*begin::Tables Widget 13*/}
              <div class='card mb-5 mb-xl-8'>
                {/*begin::Header*/}
                <div class='card-header border-0 pt-5'>
                  <h3 class='card-title align-items-start flex-column'>
                    <span class='card-label fw-bolder fs-3 mb-1'>
                      Full User Data
                    </span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      All Subscriptions Full User Data
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class='card-body py-3'>
                  {/*begin::Table container*/}
                  <div class='table-responsive'>
                    {/*begin::Table*/}
                    <table class='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                      {/*begin::Table head*/}
                      <thead>
                        <tr class='fw-bolder text-muted'>
                          <th class='min-w-150px'>Id</th>
                          <th class='min-w-140px'>Customer Name</th>
                          <th class='min-w-140px'>Cycle Name</th>
                          <th class='min-w-140px'>Plan Type</th>

                          <th class='min-w-120px'>Maturity Date</th>
                          <th class='min-w-120px'>Status</th>

                          <th class='min-w-100px '>Saved Gold</th>
                          <th class='min-w-100px '>Maturity Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* {subscriptions.map((subscription) => (
                          <tr>
                            <td>{subscription.id}</td>
                            <td>{subscription.user.fname}</td>
                            <td>{subscription.plan !== null ? subscription.plan.cyclePeriod.name : subscription.customPlan.cyclePeriod[0].name}</td>
                            <td>{subscription.plan !== null ? 'Standard Pan' : 'Flexi Plan'}</td>
                            <td>{formatDate(subscription.maturityDate)}</td>
                            <td>{subscription.status}</td>
                            <td>{subscriptionsByUser[subscription.user.id]} GRAM</td>
                            <td>{subscription.status !== 'Completed' ? 'Un Matured' : 'Matured'}</td>
                          </tr>
                        ))} */}
                          {subByWeight.map(x =>{
                            return(
                              <tr>
                                <td>{x.id}</td>
                                <Link 
                                to = '/user_details'
                                state = {x.user}
                                > 
                                <td>{x.user.fname}</td>
                                </Link>
                                <td>{x.plan.cyclePeriod.name}</td>
                                <td>{x.plan.planType}</td>
                                
                                <td>{x.maturityDate.substring(0,10)}</td>
                                <td>{x.status}</td>
                                <td>{x.installments.map(x => (
                                  x.gold
                                ))} gm</td>
                                  <td>{x.installments.map(x => (
                                  x.status
                                ))}</td>


                                



                              </tr>
                            )
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
  )
}

export default FixedPlanWeightCycle
