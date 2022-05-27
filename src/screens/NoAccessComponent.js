// import React, { useState, useEffect } from "react";
// import Footer from "../layouts/Footer";
// import Header from "../layouts/Header";
// import Dashboard from "./dashboard";
// import { Link, useNavigate } from "react-router-dom";

// export default function NoAccessComponent({ user }) {
//   let navigate = useNavigate();
//   console.log(user);
//   let [userName, setRoleName] = useState("");
//   useEffect(() => {
//     setRoleName(user.name);
//   }, [userName]);

//   return (
//     <div
//       style={{
//         color: "white",
//         height: "50vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h1 style={{ color: "white" }}>
//         You dont have the Access Mr."{userName}"
//       </h1>

//       {/* <Link to="/">
//         <button className="btn btn-warning mt-20">Go Back</button>
//       </Link> */}
//       <button
//         className="btn btn-warning mt-20"
//         onClick={() => {
//           navigate("/");
//           window.location.reload(false);
//         }}
//       >
//         Go Back
//       </button>
//     </div>
//   );
// }
import React from "react";
import "./NoAccessComponent.css"

export default function NoAccessComponent({ user }) {
  return (
    <>
      <div class="gandalf">
        <div class="fireball"></div>
        <div class="skirt"></div>
        <div class="sleeves"></div>
        <div class="shoulders">
          <div class="hand left"></div>
          <div class="hand right"></div>
        </div>
        <div class="head">
          <div class="hair"></div>
          <div class="beard"></div>
        </div>
      </div>
      <div class="message">
        <h1 class ="text">You Shall Not Pass Mr. {user.name}</h1>
        <p class = "text para">
          Uh oh, Gandalf has denied you permission !
          <br />
         
        </p>
      </div>
    </>
  );
}
