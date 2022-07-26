import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { getRole } from "../APIs_Hai/Role";
import { registerUser } from "../APIs_Hai/Register";
import swal from "sweetalert";
import { getReferralType } from "../APIs_Hai/ReferralType";
import { ADMIN_API } from "../Constants";
//=====================================================

export default function AddUserForm() {
  const navigate = useNavigate();
  //=====================================================
  const [roles, setRoles] = React.useState([]);
  const [referralUserType, setReferralUserType] = React.useState([]);
  useEffect(() => {
    getReferralType().then((res) => setReferralUserType(res.data.data.data));
  }, []);
  console.log(referralUserType);

  const [userSigning, setUserSigning] = React.useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassowrd: "",
    mobile: "",
    role: "",
    userType: null,
    referral: {
      type: "",
      code: "",
      downloads: "",
      subscriptions: "",
    },
  });
  //=====================================================
  React.useEffect(() => {
    getRole().then((res) => setRoles(res.data.data.data));
  }, []);

  const isVip =
    referralUserType.find((item) => item.id === userSigning.referral?.type)
      ?.userType === "vip";
  //=====================================================
  const handleSubmit = async () => {
    if (userSigning.password !== userSigning.confirmPassowrd) {
      swal("Oops", "Password Didn't Matched", "error");
    } else {
      axios.post(`${ADMIN_API}/admin/user/create`, userSigning).then(() => {
        swal("Hurrah !", "New User Created !", "success");
        navigate("/");
      });
    }
  };
  //=====================================================
  return (
    <>
      <Header />
      <form className="registeredUser">
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Name</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Enter the User's Name"
            ></i>
          </label>
          <input
            type="text"
            name="fullName"
            className="form-control form-control-lg form-control-solid "
            placeholder="User's Name"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                fullName: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Email</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Enter the User's Email"
            ></i>
          </label>
          <input
            type="text"
            name="email"
            className="form-control form-control-lg form-control-solid"
            placeholder="Email"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Password</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Enter the Password"
            ></i>
          </label>
          <input
            type="password"
            name="password"
            className="form-control form-control-lg form-control-solid"
            placeholder="Password"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                password: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Confirm Password</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Enter the Confirm Password"
            ></i>
          </label>
          <input
            type="password"
            name="confirmPassowrd"
            className="form-control form-control-lg form-control-solid"
            placeholder="Confirm Password"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                confirmPassowrd: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">UserName</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Enter the User Name"
            ></i>
          </label>
          <input
            type="text"
            name="username"
            className="form-control form-control-lg form-control-solid"
            placeholder="User Name"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                username: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Phone Number</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Enter the Phone Nummber"
            ></i>
          </label>
          <input
            type="text"
            name="phoneNumber"
            multiple
            className="form-control form-control-lg form-control-solid"
            placeholder="Phone number"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                mobile: e.target.value,
              });
            }}
          />
        </div>

        
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Role</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Enter the Role"
            ></i>
          </label>
          <select
            onChange={(e) => {
              setUserSigning({ ...userSigning, role: e.target.value });
            }}
            className="form-control form-control-lg form-control-solid"
          >
            <option className="form-control ">__________</option>
            {roles.map((role) => (
              <option className="form-control" value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">User Type</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <select
            onChange={(e) => {
              setUserSigning({ ...userSigning, userType: e.target.value });
            }}
            className="form-control form-control-lg form-control-solid"
          >
            <option>__________</option>
            <option value="1">System User</option>
            <option value="2">App User</option>
          </select>
        </div>
        {/* {userSigning.userType ===2 ? (
          <>
          
          </>
        ):(
          null
        )} */}

        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Referral Types</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <select
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                referral: {
                  ...userSigning.referral,
                  type: e.target.value,
                },
              });
            }}
            className="form-control form-control-lg form-control-solid"
          >
            <option>__________</option>
            {referralUserType.map((x) => (
              <option value={x.id}>{x.userType}</option>
            ))}
          </select>
        </div>
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Referral Code</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <input
            type="text"
            name=""
            className="form-control form-control-lg form-control-solid"
            placeholder="Referral Code"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                referral: {
                  ...userSigning.referral,
                  code: e.target.value,
                },
              });
            }}
          />
        </div>
        {isVip ? (
          <>
            <div>
              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                <span class="required">Downloads</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify your unique app name"
                ></i>
              </label>
              <input
                type="number"
                name="userSigning.referral.downloads"
                className="form-control form-control-lg form-control-solid"
                placeholder="Download"
                onChange={(e) => {
                  setUserSigning({
                    ...userSigning,
                    referral: {
                      ...userSigning.referral,
                      downloads: e.target.value,
                    },
                  });
                }}
              />
            </div>

            <div>
              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                <span class="required">Subscriptions</span>
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title="Specify your unique app name"
                ></i>
              </label>
              <input
                type="number"
                name="userSigning.referral.subscriptions"
                className="form-control form-control-lg form-control-solid"
                placeholder="Subscriptions"
                onChange={(e) => {
                  setUserSigning({
                    ...userSigning,
                    referral: {
                      ...userSigning.referral,
                      subscriptions: e.target.value,
                    },
                  });
                }}
              />
            </div>
          </>
        ) : null}

        <button
          class="btn btn-danger my-5"
          type="button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
        {/* </Link> */}
      </form>
      <Footer />
    </>
  );
}
