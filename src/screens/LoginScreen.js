import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
// import { loginUser } from "../apis/Auth";
import { useNavigate } from "react-router-dom";
import mon from "../public/images/mon.jpg";
import {loginUser} from "../APIs_Hai/Login"
import axios from "axios";

import CircularProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
//================================================================================
export default function LoginScreen() {
  let navigate = useNavigate();
  //================================================================================
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loader, setLoader] = useState(false);

  //================================================================================
  const onCredentialsModify = (e) => {

    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  };
  //================================================================================
  const handleSubmit = (e) => {

      // console.log(credentials)
   
      setLoader(true);

      e.preventDefault();

      
      loginUser({ ...credentials }).then(({ data: loggedInUser }) => {
        localStorage.setItem("user", JSON.stringify(loggedInUser.data));
        localStorage.setItem("token",loggedInUser.data.token)
        axios.defaults.headers.common= {Authorization: `Bearer ${loggedInUser.data.token}`}
        console.log(loggedInUser)
        setLoader(false);

        navigate("/");
        // window.location.reload(false);
    })
  
  };
  //================================================================================
  return (
    <>
      <div class="login_container">
        <img src={mon} id="login_image" />

        <div class="login_input">
          <h1>Log in</h1>
          {loader ? (
            <Box >
            <CircularProgress />
          </Box>
          ):(
            <>
            <p class="text-muted mb-10">Sign in to continue to BksMyGold</p>
            <form onSubmit={handleSubmit}>
              <label class="fw-bolder">Email address</label>
              <input
                placeholder="Enter Email"
                name="username"
                class="form-control"
                onChange={onCredentialsModify}
              ></input>
              <label class="fw-bolder">Password</label>
              <input
                placeholder="Enter Password"
                type="password"
                name={"password"}
                class="form-control"
                onChange={onCredentialsModify}
              />
              <button type="submit" class="btn btn-danger mt-3">
                Login
              </button>
              <Link to="/forgot_password">
                <p class="forgot_pwd mt-3">Forgot Password ? </p>
              </Link>
            </form>
            </>
          )}
        
        </div>
      </div>
      <Footer />
     
    </>
  );
}
