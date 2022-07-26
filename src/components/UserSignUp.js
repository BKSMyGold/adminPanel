import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import { addSystemUser } from "../apis/SystemUser";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { getRole } from "../APIs_Hai/Role";
import { registerUser } from "../APIs_Hai/Register";
import swal from "sweetalert";
//=====================================================

export default function UserSignUp() {
  const navigate = useNavigate();
  //=====================================================
  const [roles, setRoles] = React.useState([]);
  const [userSigning, setUserSigning] = React.useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassowrd: "",
    mobile: "",
    // pan: "",
    // address: "",
    role: "",
    userType: 2,
    // upperRole: "",
  });
  //=====================================================
  React.useEffect(() => {
    getRole().then((res) => setRoles(res.data.data.data));
  }, []);
  //=====================================================
  const handleSubmit = async () => {
    if (userSigning.password !== userSigning.confirmPassowrd) {
      swal("Oops", "Password Didn't Matched", "error");
    } else {
      registerUser(userSigning).then(() => {
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
              title="Enter the Name of the User"
            ></i>
          </label>
          <input
            type="text"
            name="fullName"
            className="form-control form-control-lg form-control-solid "
            placeholder="Name"
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
              title="Enter the Email of the User"
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
              title="Enter the Confirmation for the Password"
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
              title="Enter the Phone Number"
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
              title="Specify the User's Role"
            ></i>
          </label>
          <select
            onChange={(e) => {
              setUserSigning({ ...userSigning, role: e.target.value });
            }}
            className="form-control form-control-lg form-control-solid"
          >
            <option className="form-control ">Choose The Role</option>
            {roles.map((role) => (
              <option className="form-control" value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <button
          class="btn btn-danger my-5"
          type="button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <Footer />
    </>
  );
}
