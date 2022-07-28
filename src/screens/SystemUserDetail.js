import React from "react";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import avatar from "../avatar.png"

export default function SystemUserDetail(props) {
  let localStorageUser = JSON.parse(localStorage.getItem("user"));
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


      {/* <div class="page"> */}
      <div class="">
        <div class="SystemUsercard">
          {localStorageUser.image ? (
            <img
            className="h-150px w-150px rounded"
            src={localStorageUser.image}
            alt=""
          />
          ) : (
            <img
            className="h-150px w-150px rounded"
            src={avatar}
            alt=""
          />
          )}
          

          <div class="card-body">
            <h5 class="card-title">{localStorageUser.fullName ?localStorageUser.fullName : "Name" }</h5>
            <p class="badge text-dark bg-light">Email :</p>
            <span> {localStorageUser.email}</span>
            <br />
            <p class="badge text-dark bg-light">Phone : </p>
            <span> {localStorageUser.mobile}</span>
            <br />
            <p class="badge text-dark bg-light">PAN </p>
            <span> {localStorageUser.pan}</span>
            <br />
            <p class="badge text-dark bg-light">Addhaar </p>
            <span> {localStorageUser.aadhar}</span>
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
