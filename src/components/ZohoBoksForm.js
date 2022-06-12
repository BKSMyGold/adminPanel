import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { addCyclePeriod, updateCyclePeriod } from "../apis/CyclePeriod";
import AddUpdateSpinner from "../AddUpdateSpinner";

import axios from "axios";
import { BASE_URL } from "../Constants";

//================================================================================================================================
const ZohoBooksForm = (props) => {

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard />
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ZohoBooksForm;
