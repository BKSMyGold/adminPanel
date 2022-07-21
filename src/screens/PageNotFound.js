import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
import EmailCreate from "./EmailCreate";
// import error from "../error.png ";
import error from "../error.png";
//======================================================================================
const PageNotFound = () => {
  //======================================================================================
  return (
    <>
      <div class="page_not_found">
        <img src={error} />
      </div>

      <h3 class="error_msg">
        Oh ho ! Its look like you have entered wrong URL
      </h3>
    </>
  );
};

export default PageNotFound;
