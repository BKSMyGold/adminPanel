import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { useNavigate } from "react-router-dom";
import mon from "../public/images/mon.jpg";
import { loginUser } from "../APIs_Hai/Login";
import CircularProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import swal from "sweetalert";
import { ADMIN_API } from "../Constants";
import axios from "axios";
//================================================================================
export default function LoginScreen() {
  let navigate = useNavigate();
  //================================================================================
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [isShown, setIsSHown] = useState(false);

  //================================================================================

  const onCredentialsModify = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  //================================================================================
  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    loginUser({ ...credentials })
      .then(({ data: loggedInUser }) => {
        localStorage.setItem("user", JSON.stringify(loggedInUser.data));
        localStorage.setItem("token", loggedInUser.data.token);
        axios.defaults.headers.common = {
          Authorization: `Bearer ${loggedInUser.data.token}`,
        };
        console.log(loggedInUser.data);
        if (loggedInUser.data.role !== null) {
          swal("Logged In!", "Welcome To BKS My Gold Admin Panel", "success");
          setLoader(false);
          navigate("/");
        } else {
          setLoader(false);
          swal("Oops!", "The User Has not been assigned to any Role!", "error");
          localStorage.clear();
          navigate("/login");
        }
      })
      .catch((error) => {
        setLoader(false);
        swal("Oops!", `${error.response.data.message}`, "error");

        setError(error.response.data.message);
        // setError(error.response.data);
      });
  };
  //================================================================================
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };
  //================================================================================
  return (
    <>
      {/* {error ? (
        <>
          <div class="user_not_exist">
            <h1 class="text-white">{error}</h1>
          </div>
          <div class="text-center">
            <button
              class="btn btn-primary mt-5"
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Login Again
            </button>
          </div>
        </>
      ) : ( */}
        <div class="login_container">
          <img src={mon} id="login_image" />

          <div class="login_input">
            {loader ? (
              <>
                <h3>Logging in ...</h3>
                <Box>
                  <CircularProgress />
                </Box>
              </>
            ) : (
              <>
                <h1>Log in</h1>
                <p class="text-muted mb-10">Sign in to continue to BksMyGold</p>
                <form onSubmit={handleSubmit}>
                  <label class="fw-bolder">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="username"
                    class="form-control"
                    onChange={onCredentialsModify}
                  ></input>
                  <label class="fw-bolder">Password</label>
                  <input
                    placeholder="Enter Password"
                    type={isShown ? "text" : "password"}
                    name={"password"}
                    class="form-control"
                    onChange={onCredentialsModify}
                  />
                  <div className="checkbox-container">
                    <label htmlFor="checkbox">Show password?</label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      checked={isShown}
                      onChange={togglePassword}
                    />
                  </div>
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
