import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { deleteMetalGroup } from "../apis/MetalGroup";
import DeleteSpinner from "../delete";
import { BASE_URL } from "../Constants";
import { CSVLink } from "react-csv";
import {
  getMakingCharges,
  deleteMakingCharges,
} from "../APIs_Hai/MakingCharges";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
//============================================================================
const MakingCharges = (props) => {
  const [makingCharges, setMakingCharges] = useState([]);
  const [loader, setLoader] = useState(false);
  let perma = new Set(props.user.role.permissions.map((x) => x));


  useEffect(() => {
    setLoader(true);
    getMakingCharges().then((res) => {
      return setMakingCharges(res.data.data.data), setLoader(false);
    });
  }, []);
console.log("||=>",makingCharges)
  //============================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard createLink={"/master/product-data/making-charges/add"} />
          <div
            id="kt_content_container"
            class="d-flex flex-column-fluid align-items-start container-xxl"
          >
            {/*begin::Post*/}
            <div class="content flex-row-fluid" id="kt_content">
              {/*begin::Row*/}

              {/*begin::Tables Widget 13*/}
              <div class="card mb-5 mb-xl-8">
                {/*begin::Header*/}
                <div class="card-header border-0 pt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">
                      Making Charges Name
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Making Charges Name
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    {/*begin::Table*/}
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      {/*begin::Table head*/}
                      <thead>
                        <tr class="fw-bolder text-muted text-center">
                          {/* <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="1"
                                data-kt-check="true"
                                data-kt-check-target=".widget-13-check"
                              />
                            </div>
                          </th> */}
                          <th class="fw-bolder text-muted">Making Charge Id</th>
                          <th class="fw-bolder text-muted">Supplier Name</th>
                          <th class="fw-bolder text-muted">Variety</th>
                          <th class="fw-bolder text-muted">Item</th>
                          <th class="fw-bolder text-muted">Product Type</th>
                          <th class="fw-bolder text-muted">Metal Group ID</th>
                          {/* <th class="fw-bolder text-muted">From Weight</th>
                          <th class="fw-bolder text-muted">To Weight</th>
                          <th class="fw-bolder text-muted">Rate Type</th>
                          <th class="fw-bolder text-muted">
                            Value of Rate Type
                          </th> */}
                          <th class="fw-bolder text-muted">Action</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {loader ? (
                          <Box sx={{ width: "100vw" }}>
                            <LinearProgress />
                          </Box>
                        ) : (
                          makingCharges.map((charges) => ( 
                            <tr class="text-center">
                              <td class="fw-bolder">{charges.id}</td>
                              <td class="fw-bolder">{charges.supplier.name}</td>
                              <td class="fw-bolder">{charges.variety}</td>
                              <td class="fw-bolder">{charges.item}</td>
                              <td class="fw-bolder">{charges.productType.name}</td>
                              <td class="fw-bolder">{charges.metalGroup.shortName} {charges.metalGroup.metal?.name}</td>
                              {/* <td class="fw-bolder">{charges.fromWeight}</td>
                              <td class="fw-bolder">{charges.toWeight}</td>
                              <td class="fw-bolder">{charges.rateType}</td>
                              <td class="fw-bolder">{charges.rate}</td> */}

                              <td class="text-center">
                                <Link
                                  to={
                                    "/master/product-data/making-charges/edit"
                                  }
                                  state={charges}
                                >
                                  <button class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                    {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                    <span class="svg-icon svg-icon-3">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </button>
                                </Link>
                                {perma.has("delete_making_charges") ? (
                                <DeleteSpinner
                                  collection={charges}
                                  deleting={deleteMakingCharges}
                                  url={"/master/product-data//making-charges/"}
                                />
                                ) : null}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
                  </div>
                  {/*end::Table container*/}
                </div>
                {/*begin::Body*/}
              </div>
              {/*end::Tables Widget 13*/}
            </div>
            {/*end::Post*/}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MakingCharges;
