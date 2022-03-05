import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import { getAllOrders, changeOrderStatusByOrderId } from '../apis/Order'
import { getUserById } from '../apis/User'
import {
  sendOtpForOrderCancellation,
  verifyOtpForOrderCancellation,
} from '../apis/Otp'

const InStoreReturns = () => {
  const [orders, setOrders] = useState([])
  const [user, setUser] = useState({})
  const [reasonOtp, setReasonOtp] = useState({ reason: '', otp: '' })

  useEffect(() => {
    getAllOrders().then(({ data: foundOrders }) => {
      foundOrders = foundOrders.filter((order) => order.status === 'Processing')
      setOrders(foundOrders)
    })
    // setOrders([
    //   {
    //     _id: "6145df32f5b55295d3b069b6",
    //     transactions: [
    //       {
    //         _id: "6144e4b0248c5d2b60f5c526",
    //         mode: "COD",
    //         amount: 1000,
    //         instantGoldApplied: ["6145ca7e600bba08b84e922f"],
    //         paymentId: "iofdaojijiofdaoji",
    //         status: "canceled",
    //         deleveryAgent: "613e0091590334001685bc60",
    //         createdAt: "2021-09-15T16:06:57.016Z",
    //         updatedAt: "2021-09-17T19:02:34.309Z",
    //         __v: 0,
    //       },
    //     ],
    //     status: "Processing",
    //     consignment: "grsgraererg",
    //     user: {
    //       _id: "6136f4f828d71c00160d6e51",
    //       UserId: "14",
    //       Mobile: "9859285341",
    //       FirstName: "Ayaan",
    //       LastName: "08-11-2000",
    //       Email: "",
    //       DeviceToken: "",
    //       Status: "Active",
    //       ReferalCode: "sAILu14",
    //       CreatedDate: "2021-09-07 04:01:11",
    //       ModifiedDate: "2021-09-16 10:35:35",
    //     },
    //     item: {
    //       _id: "5f464786fba21d2650a7ec3d",
    //       ProductId: "2020826165910_tWsYd",
    //       CategoryId: "5",
    //       ProductName: "Gold Coin 4g",
    //       Discription:
    //         "24k (999.9) purest Gold guaranteed by MMTC-PAMP\nMMTC-PAMP is India's only LBMA- accredited precious metals facility for both Gold and Silver\nOur products are manufactured using world’s most advanced state-of-the-art Swiss technology, to offer quality and precision\nThis coin portrays the divine beauty of the lotus, in our global copyright design reflecting perfection, purity and eternity\nMMTC-PAMP is an epitome for trust and purity. The weight and purity of the purchased products will always be greater than or equal to what you pay for, thus ensuring you always receive right value for what you have paid\nOur Gold and Silver product range is perfect for gifting on every occasion (eg. marriage, birthday and anniversary) and buying for investment purpose\nOur Gold products come in individually serial numbered assay-certified sealed packaging and exclusive ready-to-gift box\nThis product is not eligible for returns, exchange. Easy buyback at attractive prices available at MMTC-PAMP stores across India",
    //       GoldCategory: "18KT",
    //       Weight: 4,
    //       Status: "Active",
    //       CreatedDate: "2020-08-26 16:31:57",
    //       ModifiedDate: "2021-04-01 13:34:41",
    //       Price: "",
    //     },
    //     address: {
    //       _id: "6144dff6e2102d94873b708f",
    //       addressType: "home",
    //       isDefaultAddress: true,
    //       user: "61362c8eb8bf9a001681bbe6",
    //       pin: 712104,
    //       landMark: "kolkata stand",
    //       status: "active",
    //       createdAt: "2021-09-17T18:35:34.409Z",
    //       updatedAt: "2021-09-17T18:35:34.409Z",
    //       __v: 0,
    //     },
    //     createdAt: "2021-09-18T12:44:34.823Z",
    //     updatedAt: "2021-09-18T12:44:34.823Z",
    //     __v: 0,
    //     amount: 1000,
    //   },
    // ]);
  }, [])

  useEffect(() => {
    if (orders.length) {
      getUserById(orders[0].user._id).then(({ data: foundUser }) =>
        setUser(foundUser)
      )
    }
  }, [orders])
  console.log("ORDERS: ",orders);
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
                      In Store Returns
                    </span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      Define In Store Returns
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
                          <th class='min-w-150px'>order Id</th>
                          <th class='min-w-140px'>Customer Name</th>
                          <th class='min-w-120px'>Status</th>

                          <th class='min-w-120px'>Instant Gold Appiled</th>

                          <th class='min-w-120px'>Redeem Gold Applied</th>
                          <th class='min-w-300px'>Items Purchased</th>
                          <th class='min-w-120px'>GST Applied</th>
                          <th class='min-w-120px'>Making Charges</th>
                          <th class='min-w-120px'>Melting Charges</th>
                          <th class='min-w-120px'>Delivery Charges</th>
                          <th class='min-w-120px'>Total Amount</th>
                          <th class='min-w-120px'>Amount Paid</th>
                          <th class='min-w-100px text-end'>Actions</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {orders.map((order) => (
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
                            <td>{order.id}</td>
                            <td>{order.status}</td>
                            <td>{user.fname ?? 'No User found'}</td>
                            <td>{user.mobile ?? 'No User found'}</td>
                            <td>{order.amount}</td>

                            <td>{order.transactions[0].mode}</td>
                            <td>
                              <input
                                className='form-control'
                                name='reason'
                                placeholder='Enter Reason'
                                onChange={(e) =>
                                  setReasonOtp({
                                    ...reasonOtp,
                                    reason: e.target.value,
                                  })
                                }
                              />
                              <button
                                className='form-control'
                                style={{ backgroundColor: 'pink' }}
                                onClick={() =>
                                  sendOtpForOrderCancellation().then().catch()
                                }
                              >
                                Send OTP
                              </button>
                            </td>
                            <td>
                              {/*Put Input box to enter reason for cancelation and send a otp*/}
                              {/*Call the end point to change the status of order /api/order/status/:orderId */}
                              <input
                                className='form-control'
                                name='otp'
                                placeholder='Enter OTP'
                                onChange={(e) => {
                                  if (e.target.value.length === 4) {
                                    verifyOtpForOrderCancellation(
                                      e.target.value
                                    ).then(() =>
                                      changeOrderStatusByOrderId(
                                        order.id,
                                        'Cancelled'
                                      )
                                    )
                                  }
                                }}
                              ></input>
                            </td>

                            <td>{order.status}</td>
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

export default InStoreReturns
