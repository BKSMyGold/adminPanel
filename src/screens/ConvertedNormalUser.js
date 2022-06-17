import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Dashboard from './dashboard'
import axios from 'axios'
import { BASE_URL } from '../Constants'

const formatDate = (date) => {
  date = new Date(date)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return `${year}-${month}-${day}`
}

const ConvertedNormalUser = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [subscriptionsByUser, setSubscriptionsByUser] = useState(null)
  const [handingChargeCalculation, setHandingChargeCalculation] = useState()
  const [charges, setCharges] = useState(null)
  useEffect(() => {
    const fetchSubscriptions = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/subscription`)

      setSubscriptions(data.subscriptions.filter(subscription => subscription.status !== null && subscription.status === 'Forfieted'))
      // setSubscriptions(data.subscriptions)
    }
    fetchSubscriptions()

    const fetchtotalOfSubscriptionByUser = () => {
      let subscriptionsData = {}
      subscriptions.forEach(async (subscription) => {
        const { data } = await axios.get(`http://13.59.57.74:5000/api/subscription/balance/individual/${subscription.user.id}/${subscription.id}`)
        subscriptionsData[subscription.user.id] = data.totalGold
      })

      setSubscriptionsByUser(subscriptionsData)
    }
    fetchtotalOfSubscriptionByUser()

    const fetchCharges = async () => {
      const { data: response } = await axios.get('http://13.59.57.74:5000/api/calculation')
      let percentage = 0
      response.data.forEach(calculation => {
        if (calculation.Type === 'HandlingCharges') {
          percentage = calculation.Percentage * 0.01
        }
      })
      setCharges(percentage)
    }
    fetchCharges()

    const getHandingCharges = () => {
      let handingPercentage = charges
      setHandingChargeCalculation(handingPercentage)
    }
    getHandingCharges()
  }, [])
  console.log('-->',subscriptions)
  return (
    <div className='d-flex flex-column flex-root'>
      <div className='page d-flex flex-row flex-column-fluid'>
        <div
          className='wrapper d-flex flex-column flex-row-fluid'
          id='kt_wrapper'
        >
          <Header />
          <Dashboard />
          <div
            id='kt_content_container'
            class='d-flex flex-column-fluid align-items-start container-xxl'
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
                      ConvertedNormalUser
                    </span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      Define ConvertedNormalUser
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
                          <th class='min-w-140px'>Plan Name</th>
                          <th class='min-w-140px'>Mode</th>

                          <th class='min-w-120px'>Maturity Date Was</th>
                          <th class='min-w-120px'>Status</th>

                          <th class='min-w-100px '>Saved Gold</th>
                          <th class='min-w-100px '>
                            Gold Converted to Instant Gold
                          </th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {subscriptions.map((subscription) => (
                          <tr>
                            <td>
                              <div class='form-check form-check-sm form-check-custom form-check-solid'>
                                <input
                                  class='form-check-input widget-13-check'
                                  type='checkbox'
                                  value='1'
                                />
                              </div>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary fs-6'
                              >
                                {subscription.id}
                              </a>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                              >
                                {subscription.user.fname}
                              </a>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                              >
                                {subscription.plan.cyclePeriod.name}
                              </a>
                            </td>
                            <td class='text-dark fw-bolder text-hover-primary fs-6'>
                              {subscription.plan.mode}
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                                {formatDate(subscription.maturityDate)}
                              </span>
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                                {subscription.status}
                              </span>
                            </td>

                            <td class='text-end'>
                              {subscription.installments.map(x =>(
                                x.gold
                              ))} gm
                            </td>
                            <td class='text-end'>
                              {subscription.installments.map(x =>(
                                x.gold - charges
                              ))} gm
                            </td>
                            {/* <td class='text-end'>
                              {subscriptionsByUser[subscription.user.id] * (1 - charges)} GRAM  
                            </td> */}
                          </tr>
                        ))}
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

export default ConvertedNormalUser
