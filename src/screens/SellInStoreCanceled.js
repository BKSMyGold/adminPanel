import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Dashboard from './dashboard'
import axios from 'axios'

const formatDate = (date) => {
  date = new Date(date)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return `${year}-${month}-${day}`
}

const SellInStoreCanceled = () => {
  const [sellInStoreCanceled, setSellInStoreCanceled] = useState([])
  useEffect(() => {
    const fetchcategories = async () => {
      const { data: response } = await axios.get('http://13.59.57.74:5000/api/appointment')
      setSellInStoreCanceled(response.data.filter(appointment => appointment.status === 'Offer Declined by User'))
      // setSellInStoreCanceled(response.data) // Uncomment this to get all the data
    }
    fetchcategories()
  }, [])
  console.log("Data:", sellInStoreCanceled)
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
                      SellInStoreCanceled
                    </span>
                    <span class='text-muted mt-1 fw-bold fs-7'>
                      Define SellInStoreCanceled
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
                          <th class='min-w-150px'>Request Id</th>
                          <th class='min-w-140px'>Customer Name</th>
                          <th class='min-w-120px'>Mobile</th>

                          <th class='min-w-120px'>Email</th>

                          <th class='min-w-300px'>Address</th>
                          <th class='min-w-120px'>Weight</th>
                          <th class='min-w-120px'>Karatage</th>
                          <th class='min-w-120px'>Request Placed On</th>

                          <th class='min-w-120px'>Appointment Date</th>
                          <th class='min-w-120px'>Appointment Time</th>

                          <th class='min-w-120px'>Status</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {sellInStoreCanceled.map((appointment) => (
                          <tr>
                            <td>
                              {appointment.id}
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary fs-6'
                              >
                                {appointment.user.fname}
                              </a>
                            </td>
                            <td>
                              <a
                                href='#'
                                class='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'
                              >
                                {appointment.user.mobile}
                              </a>
                            </td>
                            <td>
                                {appointment.user.email}
                            </td>
                            <td class='text-dark fw-bolder text-hover-primary fs-6'>
                                {appointment.user.address.landMark}
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                                {appointment.weight}
                              </span>
                            </td>
                            <td>
                              <span class='badge badge-light-success'>
                                {appointment.metalGroup.karatage}
                              </span>
                            </td>

                            <td class='text-end'>
                              {formatDate(appointment.createdAt)}
                            </td>

                            {/* Appointment date and time */}
                            {appointment.appointmentDate === null && appointment.appointmentTime == null ?
                              (<td colspan={2} class="text-center">Not Yet Scheduled</td>) :
                              (<>
                                <td>{appointment.appointmentDate}</td>
                                <td>{appointment.appointmentTime}</td>
                              </>)
                            }
                            
                            {/* Appointment status */}
                            <td>{appointment.status}</td>
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

export default SellInStoreCanceled
