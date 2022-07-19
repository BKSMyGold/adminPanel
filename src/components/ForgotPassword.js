import {React, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { forgotPassword } from "../APIs_Hai/ForgotPassword";
//=====================================================================
export default function ForgotPassword() {

  const [email, setEmail] = useState("")
  let navigate = useNavigate()
  //=====================================================================
  return (
    <>
      <div class="forgot_container">
        <div class="forgot_page">
          <div class="forgot_img"></div>
          <h2>Forgot Password</h2>
          <p class="text-muted">
            Enter your email and we'll send you a link to reset you password
          </p>
          {/* <span>{""}</span> */}
          <div class="forgot_input_box">
            <div class="input_icon_box mt-10">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABF0lEQVRIie3UrU4DQRSG4adACAkBgWpCL4YECwocDhw4DLeAQCJBgcPhUNhKMCi4gN4A/zCInibb7d9uaRFkv+RkZ+ec+d7N7MyhUqX/rDrukKYUD2jkoevxXEFzCtBmeGdZ4A3bMV7EzQSht1gO7028ZMEJn9iN93lcTQB6jYXw3MFHzHeBE75xGHOzOPsF9AJz4XWAr0yuB9yJ45iv4WQM6ClmwuOoT34guMjiQVHko4eCEy4z27Wf26585H/T+ZDakeB+B+S9T03Zg1kI3LkSS1G7gedM7hVbkSt6FQuDk+4msIYnPMaYcs2nFDhpt71VvarjvoRPaXBCC3vafbcR41ZJD7UM+C9VmxldMx1V4EqVKo2tHyQBI8f7rsAXAAAAAElFTkSuQmCC" />
              <input 
              type="email" 
              class="form-control"
              onChange={(e)=>
              setEmail({email:e.target.value})
              }
              />
            </div>
            <button
              onClick={() => {
                console.log(email);
                // forgotPassword(email).then((e)=>{
                  navigate("/reset_password")
                // })
              }}
              class="btn btn-success mt-5"
            >
              Submit
            </button>
            <Link to="/login">
              <p class="fw-bold mt-5"> Back to Login</p>
            </Link>
          </div>
        </div>
      </div>
      <p class="text-muted text-center p">Venture by Bk Saraff Pvt. Ltd.</p>
    </>
  );
}
