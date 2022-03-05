import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Dashboard from './dashboard'
import axios from 'axios'
import { BASE_URL } from '../Constants'

const Delivery = () => {
  const [ordersData, setOrdersData] = useState([])
  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/order/transactions`)

      setOrdersData(data.filter(order => order.status === 'Order Placed'))
    }
    fetchOrders()
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
                    <span class='card-label fw-bolder fs-3 mb-1'>Delivery</span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      Define Delivery
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

                          <th class='min-w-300px'>Items Purchased</th>

                          <th class='min-w-120px'>Amount To be Collected</th>
                          <th class='min-w-120px'>Assign To</th>
                          <th class='min-w-100px'>Actions</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {ordersData.map((order) => (
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
                                {order.id}
                              </a>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                              >
                                {order.user.fname}
                              </a>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                              >
                                <ul>
                                  {order.cart.items.map((item, idx) => (
                                    <li key={idx}>
                                      {item.itemDetail.description} X {item.quantity} Nos.
                                    </li>
                                  ))}
                                </ul>
                              </a>
                            </td>
                            <td class='text-dark fw-bolder text-hover-primary fs-6'>
                              INR {order.transactions.amount}
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                                <select class='form-control' id='collector'>
                                  <option value=''>Select Delivery Boy</option>
                                </select>
                              </span>
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                               {/* Submit Button here */}
                              </span>
                            </td>

                            <td class='text-end'>
                              <a
                                href='#'
                                class='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                              >
                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                <span class='svg-icon svg-icon-3'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                  >
                                    <path
                                      d='M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z'
                                      fill='black'
                                    />
                                    <path
                                      opacity='0.3'
                                      d='M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z'
                                      fill='black'
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                              <a
                                href='#'
                                class='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                              >
                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                <span class='svg-icon svg-icon-3'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='black'
                                    />
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='black'
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
                              <a
                                href='#'
                                class='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                              >
                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                <span class='svg-icon svg-icon-3'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                  >
                                    <path
                                      d='M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z'
                                      fill='black'
                                    />
                                    <path
                                      opacity='0.5'
                                      d='M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z'
                                      fill='black'
                                    />
                                    <path
                                      opacity='0.5'
                                      d='M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z'
                                      fill='black'
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </a>
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

export default Delivery
