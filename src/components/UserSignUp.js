import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { addSystemUser } from "../apis/SystemUser";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function UserSignUp() {
  const navigate = useNavigate();
  //=====================================================
  const [roles, setRoles] = React.useState([]);
  const [userSigning, setUserSigning] = React.useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    panNumber: "",
    aadharNumber: "",
    address: "",
    role: "",
    upperRole: "",
  });
  //=====================================================
  React.useEffect(() => {
    axios.get("http://13.59.57.74:5000/api/role").then((res) => {
      setRoles(res.data.roles);
      console.log(res.data.roles);
    });
  }, []);
  //=====================================================
  const Roles = [
    "Super Admin",
    "Admin",
    "Accountant",
    "Sales",
    "IT",
    "Marketing",
    "CRM",
  ];

  const handleSubmit = async () => {
    console.log("--->", userSigning);

    {
      roles.map((role) => {
        if (userSigning.role === role.role_name) {
          userSigning.role = role._id;
        }
      });
    }

    let {
      name,
      email,
      password,
      phoneNumber,
      panNumber,
      aadharNumber,
      address,
      role,
      upperRole,
    } = userSigning;

    let data = {
      name,
      email,
      password,
      phoneNumber,
      panNumber,
      aadharNumber,
      address,
      role,
      upperRole,
    };

    // await axios
    //   .post("https://goldv2.herokuapp.com/api/system-user", data)
    //   .then(() => {
    //     navigate("/registered_User");
    //     console.log("user generated: ==>", data);
    //   });
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
              title="Specify your unique app name"
            ></i>
          </label>
          <input
            type="text"
            name="name"
            className="form-control form-control-lg form-control-solid "
            placeholder="Name"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                name: e.target.value,
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
              title="Specify your unique app name"
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
              title="Specify your unique app name"
            ></i>
          </label>
          <input
            type="password"
            name="password"
            multiple
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
            <span class="required">Phone Number</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
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
                phoneNumber: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">PAN Number</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <input
            type="text"
            name="panNumber"
            multiple
            className="form-control form-control-lg form-control-solid"
            placeholder="type panNumber"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                panNumber: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Aadhar Number</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <input
            type="text"
            name="aadharNumber"
            multiple
            className="form-control form-control-lg form-control-solid"
            placeholder="Aaddhar Number"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                aadharNumber: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Address</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <input
            type="text"
            name="address"
            multiple
            className="form-control form-control-lg form-control-solid"
            placeholder="Address"
            onChange={(e) => {
              setUserSigning({
                ...userSigning,
                address: e.target.value,
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
              title="Specify your unique app name"
            ></i>
          </label>
          <select
            onChange={(e) => {
              setUserSigning({ ...userSigning, role: e.target.value });
            }}
            className="form-control form-control-lg form-control-solid"
          >
            {roles.map((role) => (
              <option className="form-control ">{role.role_name}</option>
            ))}
          </select>
        </div>
        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Under Role</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>

          <select
            onChange={(e) => {
              setUserSigning({ ...userSigning, upperRole: e.target.value });
            }}
            className="form-control form-control-lg form-control-solid"
          >
            {Roles.map((role) => (
              <option className="form-control ">{role}</option>
            ))}
          </select>
        </div>

        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Parent Role</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <input
          
            name="name"
            className="form-control form-control-lg form-control-solid"
            
            
          />
        </div>

        <div>
          <label class="d-flex align-items-center fs-5 fw-bold mb-2">
            <span class="required">Allowed Login</span>
            <i
              class="fas fa-exclamation-circle ms-2 fs-7"
              data-bs-toggle="tooltip"
              title="Specify your unique app name"
            ></i>
          </label>
          <input
            type="number"
            name="name"
            className="form-control form-control-lg form-control-solid"
            placeholder="Number of times allowed to login"
            defaultValue={0}
          />
        </div>
        {/* <Link to="/registered_User"> */}
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
