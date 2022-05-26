import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import { Link } from "react-router-dom";

export default function NoAccessComponent({ user }) {
  console.log(user);
  let [userName, setRoleName] = useState("");
  useEffect(() => {
    setRoleName(user.name);
  }, [userName]);

  return (
    <div
      style={{
        color: "white",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "white" }}>
        You dont have the Access Mr."{userName}"
      </h1>

      <Link to="/">
        <button className="btn btn-warning mt-20">Go Back</button>
      </Link>
    </div>
  );
}
