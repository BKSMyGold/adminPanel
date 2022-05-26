import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Dashboard from './dashboard'
import { loginUser } from '../apis/Auth'

const LoginScreen = () => {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const onCredentialsModify = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

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
                  <form>
                    <div class='row align-items-center'>
                      <input
                        className='form-control'
                        type={'text'}
                        name={'email'}
                        placeholder='Email'
                        onChange={onCredentialsModify}
                      />
                    </div>
                    <div class='row align-items-center'>
                      <input
                      className='form-control mt-2'
                        type={'text'}
                        name={'password'}
                        placeholder='Password'
                        onChange={onCredentialsModify}
                      />
                    </div>
                    <button
                    className='btn btn-danger mt-2'
                      onClick={(e) => {
                        e.preventDefault()
                        loginUser({ ...credentials }).then(
                          ({ data: loggedInUser }) => {
                            localStorage.setItem(
                              'loggedInUser',
                              JSON.stringify(loggedInUser)
                            )
                            navigate('/')
                            window.location.reload(false)
                          }
                        )
                      }}
                    >
                      Login
                    </button>
                  </form>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class='card-body py-3'></div>
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

export default LoginScreen
