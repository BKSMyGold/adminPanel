import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import { getAllSubscriptions } from '../apis/Subscription'
import { getHandlingChargeById } from '../apis/HandlingCharge'
import InStoreRedeemRow from '../components/InStoreRedeemRow'

const InStoreRedeem = () => {
  const [subscriptions, setSubscription] = useState([])
  const [handlingCharge, setHandlingCharge] = useState({})

  useEffect(() => {
    getAllSubscriptions().then(
      ({ data: { subscriptions: foundSubscriptions } }) => {
        console.log('foundSubscriptions', foundSubscriptions)
        setSubscription(foundSubscriptions)
      }
    )
  }, [])

  useEffect(() => {
    getHandlingChargeById('61b3a896d59d6bacdd6ef5a1').then(
      ({ data: foundHandlingCharge }) => {
        setHandlingCharge(foundHandlingCharge)
      }
    )
  }, [])

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
                      In Store Redeems
                    </span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      You can avail redeems here
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
                          <th class='w-25px'>
                            <div class='form-check form-check-sm form-check-custom form-check-solid'>
                              <input
                                class='form-check-input'
                                type='checkbox'
                                value='1'
                                data-kt-check='true'
                                data-kt-check-target='.widget-13-check'
                              />
                            </div>
                          </th>
                          <th class='min-w-150px'>subscription Id</th>
                          <th class='min-w-140px'>Customer Name</th>
                          <th class='min-w-120px'>Status</th>
                          <th class='min-w-120px'>Maturity</th>
                          <th class='min-w-120px'>Saved Gold</th>
                          <th class='min-w-120px'>Avaialble Gold For Redeem</th>

                          <th class='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {subscriptions
                          .filter(
                            (subscription) =>
                              subscription.status === 'Processing'
                          )
                          .map((subscription, index) => (
                            <InStoreRedeemRow
                              key={index}
                              subscription={subscription}
                              handlingCharge={handlingCharge}
                            />
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

export default InStoreRedeem
