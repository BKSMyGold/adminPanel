import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Dashboard from './dashboard'
import axios from 'axios'
import { calculateCharges } from '../apis/allFunctions'

const OrderSummary = () => {
  const [transactions, setTransactions] = useState([])
  const [deliveryCharges, setDeliveryCharges] = useState(null)
  const [totalAmounts, setTotalAmounts] = useState(null)
  useEffect(() => {
    const fetchTransactions = async () => {
      let { data } = await axios.get('http://13.59.57.74:5000/api/order/transactions')
      data = data ? data.filter(transaction => transaction.transactions.status === "Order In Transit" && transaction.consignment) : []

      setTransactions(data)
    }
    fetchTransactions()

    const fetchDeliveryCharges = async () => {
      const { data: response } = await axios.get('http://13.59.57.74:5000/api/calculation/61bf85f0fb887283baaa3cf3')
      let deliveryCharge = 0
      response.data.forEach(order => deliveryCharge = order.Percentage)

      setDeliveryCharges(deliveryCharge)
    }
    fetchDeliveryCharges()

    const getOrderAmount = async () => {
      let amounts = {}
      transactions.forEach(async (transaction) => {
        const orderId = transaction.id
        let amount = 0

        const { data } = await axios.get(`http://13.59.57.74:5000/api/order/${orderId}`)
        data.cart.items.forEach(item => {
          amount += item.itemDetail.amount
        })

        amounts[transaction.id] = amount

      })
      setTotalAmounts(amounts)
    }
    getOrderAmount()
  }, [])
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
                      OrderSummary
                    </span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      Define OrderSummary
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
                          <th class='min-w-120px'>Order Status</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {transactions.map((transaction) => (
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
                                {transaction.id}
                              </a>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                              >
                                {transaction.user.fname}
                              </a>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                              >
                                {transaction.status}
                              </a>
                            </td>
                            <td class='text-dark fw-bolder text-hover-primary fs-6'>
                              {transaction.instantGoldApplied} GRAM
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                                {transaction.redeemGoldApplied} GRAM
                              </span>
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                                <ul>
                                  {transaction.cart.items.map((item, idx) => (
                                    <li key={idx}>
                                      {item.itemDetail.description} X {item.quantity} Nos.
                                    </li>
                                  ))}
                                </ul>
                              </span>
                            </td>

                            <td class='text-end'>
                              INR {calculateCharges(transaction, 'GST')}
                            </td>
                            {/* Calculate Making chanrges */}
                            <td class='text-end'>
                              INR {calculateCharges(transaction, 'Making Charges')}
                            </td>
                            {/* Calculate Melting charges */}
                            <td class='text-end'>
                              INR {calculateCharges(transaction, 'Melting Charges')}
                            </td>
                            <td class='text-end'>
                              INR {deliveryCharges}
                            </td>
                            <td class='text-end'>
                              INR {totalAmounts[transaction.id]}
                            </td>
                            <td class='text-end'>
                              INR {transaction.transactions.amount}
                            </td>
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

export default OrderSummary
