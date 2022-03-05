import React, { useState, useEffect } from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import axios from 'axios'

const SMSsend = () => {
  {
    /*Write a Function to Send SMS to all Mobile numbers of all users with the below context given*/
  }
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
            class='d-flex flex-column-fluid align-items-start container-xxl'
          >
            {/*begin::Post*/}
            <div class='content flex-row-fluid' id='kt_content'>
              {/*begin::Row*/}

              {/*begin::Tables Widget 13*/}
              <div class='card mb-5 mb-xl-8'>
                {/*begin::Header*/} {' '}
                <div class='card-header border-0 pt-5'>
                  <h3 class='card-title align-items-start flex-column'>
                    <span class='card-label fw-bolder fs-3 mb-1 text-center'>
                      Send SMS to All Customers
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class='card'>
                  {/*--begin::Body*/}
                  <div class='card-body p-lg-17'>
                    {/*--begin::Row*/}
                    <div class='row mb-3'>
                      {/*--begin::Col*/}
                      <div class='col-md-12 pe-lg-10'>
                        {/*--begin::Form*/}
                        <form
                          action=''
                          class='form mb-15'
                          method='post'
                          id='kt_contact_form'
                        >
                          <h1 class='fw-bolder text-center text-dark mb-9'>
                            Send SMS to All Customers
                          </h1>
                          {/*--begin::Input group*/}
                          <div class='row mb-5'>
                            {/*--begin::Col*/}
                            <div class='col-md-6 fv-row offset-lg-3'>
                              {/*--begin::Label*/}
                              <label class='fs-5 fw-bold mb-2'>
                                Enter Context of Message
                              </label>
                              {/*--end::Label*/}
                              {/*--begin::Input*/}
                              <input
                                type='text'
                                class='form-control form-control-solid'
                                style={{
                                  border: '1px solid #95203D',
                                  color: '#95203D',
                                }}
                                placeholder=''
                                name='weight'
                              />
                              {/*--end::Input*/}
                            </div>
                            {/*--end::Col*/}
                            {/*--begin::Col*/}

                            {/*--end::Col*/}
                          </div>
                          <div className='text-center'>
                            <button
                              type='submit'
                              class='btn btn-primary'
                              style={{
                                backgroundColor: '#95203D',
                                color: '#ffffff',
                              }}
                              id='kt_contact_submit_button'
                            >
                              {/*--begin::Indicator*/}
                              <span class='indicator-label'>
                                Send SMS to All Customers{' '}
                              </span>
                              <span class='indicator-progress'>
                                Please wait...
                                <span class='spinner-border spinner-border-sm align-middle ms-2'></span>
                              </span>
                              {/*--end::Indicator*/}
                            </button>
                          </div>
                          {/*--end::Submit*/}
                        </form>
                        {/*--end::Form*/}
                      </div>
                      {/*--end::Col*/}
                      {/*--begin::Col*/}

                      {/*--end::Col*/}
                    </div>
                    {/*--end::Row*/}
                    {/*--begin::Row*/}
                    {/*--end::Card*/}
                  </div>
                  {/*--end::Body*/}
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

export default SMSsend
