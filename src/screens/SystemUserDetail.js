import React from "react";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";

export default function SystemUserDetail() {
  let localStorageUser = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log("logged user ==>", localStorageUser);

  const[permissions, setPermission] = React.useState([]);

  React.useEffect(()=>{
      Object.keys(localStorageUser.role).map(obj =>(
          console.log(localStorageUser.role[obj].permission_name)
      ))
  },[])

  console.log("permissions hai yeh sab ===>",permissions)
  return (
    <>
      <Header />

      <Dashboard />

      {/* <div class="page"> */}
      <div class="">
        <div class="card" style={{ width: "100rem" }}>
          <img
            className="h-150px w-150px rounded"
            src="assets/media/avatars/150-2.jpg"
            alt=""
          />

          <div class="card-body">
            <h5 class="card-title">{localStorageUser.name ?localStorageUser.name : "Name" }</h5>
            <p class="badge text-dark bg-light">Email :</p>
            <span> {localStorageUser.email}</span>
            <br />
            <p class="badge text-dark bg-light">Phone : </p>
            <span> {localStorageUser.phoneNumber}</span>
            <br />
            <p class="badge text-dark bg-light">PAN </p>
            <span> {localStorageUser.panNumber}</span>
            <br />
            <p class="badge text-dark bg-light">Addhaar </p>
            <span> {localStorageUser.aadharNumber}</span>
            <br />
            <p class="badge text-dark bg-light">Address </p>
            <span> {localStorageUser.address}</span>
            <br />
            <p class="badge text-dark bg-light">Role </p>
            <span> {localStorageUser.role.role_name}</span>
            <br />
            {/* <p class="badge text-dark bg-light">Permissions</p>
            {localStorageUser.role.permissions.map((per) => {
              return (
                <>
                  <span>{per}</span>
                  <br />
                </>
              );
            })} */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
