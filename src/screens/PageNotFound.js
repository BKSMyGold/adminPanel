import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
import EmailCreate from "./EmailCreate";
import { logo } from "../";

//======================================================================================
const PageNotFound = () => {
  //======================================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper">
          <Header />
          <img src="../public/assets/error.png" />
          <h1>Page Not Found- 404</h1>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
