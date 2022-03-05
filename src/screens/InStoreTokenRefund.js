import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import { BASE_URL, dateFormatter } from '../Constants'
import axios from 'axios'

const InStoreTokenRefund = () => {
  const [TokenGolds, setTokenGolds] = useState([])
  const [MetalGroup, setMetalGroup] = useState([])
  const [BuySellPrice, setBuySellPrice] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    {
      /*Use Endpoint to get all token gold submissions made by user*/
    }
    {
      /*endpont = /api/token-gold
	  
	 use MongoURL
	 
	 GET */
    }
    const TokenResponse = [].constructor(1).fill({
      _id: '61b8c05ec5e6c60016c33659',
      metalGroup: '615871819d83e0001680389e',
      user: '617507b7edfe4100168e8bcb',
      buySell: '615a16cacdc997001643bdcd',
      weightEntered: 40,
      calculation: '5f433e672cdf47a1febb31d7',
      paymentId: '6158c221e0aee60016cb52ea',
      amountPaid: 500,
      status: 'Request Placed',
      returnReason: null,
      otp: 3680,
      __v: 0,
    })

    setTokenGolds(TokenResponse)
  }, [])

  useEffect(() => {
    {
      /*Use Endpoint to get  user data for particular token gold request*/
    }
    {
      /*endpont = api/user/:userId   */
    }
    const userResponse = {
      GBPBonusEntries: [],
      GBPcode: '',
      addresses: [],
      createdAt: '2021-12-10T19:10:50.435Z',
      deviceToken:
        'doHSXifERQGpCQyeHMMij6:APA91bHf9rudMzbqdwv3OjNuiLkI98pDgMKzrsJecfPt0i6F5whpi2d5R1sVleS5Ew823FwiECkEE8oEx6ezFt85NZpshZfcs2PuEpetIzBt5NMZSf7ZZPzefc3qAHixB6YaE4VuxV8x',
      dob: '2000-11-23',
      docType: 'User',
      email: 'ashutoshsenapati2311@gmail.com',
      fname: 'Ashutosh Senapati',
      id: '61b3a63aea31faacc7b37864',
      image:
        'https://bks-gold.s3.ap-south-1.amazonaws.com/User%2Fimage_picker6967090782453535724.jpg',
      isInvested: false,
      isWhatsapp: true,
      joiningBonus: 0,
      level: '',
      mobile: 9777139671,
      pan: '',
      refCode: '',
      referenceType: '',
      referral: null,
      referralBonusEntries: [],
      role: '',
      updatedAt: '2021-12-14T05:50:11.532Z',
    }

    setUser(userResponse)
  }, [])

  useEffect(() => {
    {
      /*Use Endpoint to get Metal Group data for every particular token gold request*/
    }
    {
      /*endpont =/api/metal-group/:metalgroupid   */
    }
    const metalResponse = {
      createdAt: '2021-12-10T19:07:43.665Z',
      docType: 'MetalGroup',
      fineness: 999.9,
      id: '61b3a57fea31faacc7b37860',
      karatage: '24 KT',
      metals: [
        {
          createdAt: '2021-12-10T19:06:52.043Z',
          docType: 'Metal',
          icon: 'metal/logo-light.png',
          id: '61b3a54cea31faacc7b3785f',
          name: 'Gold',
          updatedAt: '2021-12-10T19:06:52.043Z',
        },
      ],
      referenceId: 1,
      shortName: '24 KT',
      updatedAt: '2021-12-10T19:07:43.665Z',
    }

    setMetalGroup(metalResponse)
  }, [])

  useEffect(() => {
    {
      /*Use Endpoint to get buysell prices for particular token gold request*/
    }
    {
      /*endpont =/api/buy-sell-price/:buySellId  */
    }
    {
      /*response.data*/
    }
    const BuySellResponse = {
      buy: 4000,
      createdAt: '2021-12-10T19:08:47.847Z',
      docType: 'BuySell',
      id: '61b3a5bfea31faacc7b37861',
      sell: 3000,
      updatedAt: '2021-12-10T19:08:47.847Z',
    }

    setBuySellPrice(BuySellResponse)
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
                      In Store Token Refund
                    </span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      You can avail Refunds for Token Gold
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class='card-body py-3'>
                  {/*begin::Table container*/}
                  <div class='table-responsive'>
                    {/*begin::Table*/}
                    <table class='table table-row-bordered table-lg-responsive table-row-gray-100 align-middle gs-0 gy-3'>
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
                          <th class='min-w-150px'>Token Id</th>
                          <th class='min-w-140px'>Customer Name</th>
                          <th class='min-w-120px'>Booked Gold</th>
                          <th class='min-w-120px'>Karatage</th>
                          <th class='min-w-120px'>Buy Rate</th>
                          <th class='min-w-120px'>Advance Paid</th>

                          <th class='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {TokenGolds.map((tokengold) => (
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
                            <td>{tokengold._id}</td>
                            <td>{user.fname ?? 'No User found'}</td>
                            <td>{user.mobile ?? 'No User found'}</td>
                            <td>{MetalGroup.karatage}</td>
                            <td>INR {BuySellPrice.buy}</td>
                            <td>{tokengold.weightEntered} GRAM</td>
                            <td>INR {tokengold.amountPaid}</td>
                            <td>
                              {/*Put  */}
                              <select className='form-control' name='mode'>
                                <option value={''}>
                                  Select Mode of Refund
                                </option>
                                <option value={'Bank'}>Bank</option>
                                <option value={'Cash'}>Cash</option>
                              </select>
                            </td>
                            {/* if(mode.value === 'Bank'){

								endpoint = /api/bank/:userId

								 var userBankID = response.data.id
							} */}
                            <td>
                              {/*Put  */}
                              <input
                                className='form-control'
                                name='reason'
                                placeholder='Enter Reason'
                              ></input>
                              <button className='btn btn-primary'>
                                Send OTP
                              </button>
                            </td>
                            <td>
                              {/*Put Enter OTP and onChange change status of Token Gold to Cancelled and fill the reason to return with the reason entered by the admin */}
                              <input
                                className='form-control'
                                name='otp'
                                placeholder='Enter OTP'
                              ></input>
                              <button className='btn btn-primary'>
                                Verify OTP
                              </button>
                            </td>

                            <td>{tokengold.status}</td>
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

export default InStoreTokenRefund
