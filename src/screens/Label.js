import React, { useState, useEffect } from "react";
import { getAllItems } from "../apis/items";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import { Link } from "react-router-dom";
import DeleteSpinner from "../delete";
import { CSVLink } from "react-csv";
import {getLabel,deleteLabel} from "../APIs_Hai/Label" 
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
//==============================================================
const Label = (props) => {
  //==============================================================
  const [label, setLabel] = useState([]);
  const [loader, setLoader] = useState(false);
  let perma = new Set(props.user.role.permissions.map((x) => x));

  //==============================================================
  useEffect(() => {
    setLoader(true);
    getLabel().then((res) => {
      return setLabel(res.data.data.data), setLoader(false);
    });
  }, []);
  console.log("label", label)
  //==============================================================

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard createLink={"/master/label/add"} />
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
                    <span class="card-label fw-bolder fs-3 mb-1">Label</span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Define Label
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
                        <tr class="fw-bolder text-muted text-center" >
                          <th class="min-w-150px"> Id</th>
                          <th class="min-w-140px">Label Name</th>
                          <th class="min-w-140px">Mode</th>
                          <th class="min-w-140px">Piece</th>
                          <th class="min-w-140px">Style</th>
                          <th class="min-w-100px">Actions</th>
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
                          label?.map((label) => (
                            <tr class="text-center">
                              <td>{label.id}</td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                                >
                                  {label.name}
                                </a>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                                >
                                  {label.mode}
                                </a>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                                >
                                  {label.piece}
                                </a>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                                >
                                  {label.style.name}
                                </a>
                              </td>
                             
                              <td class="text-end">
                                <a
                                  href="#"
                                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                >
                                  <Link
                                    to={"/master/label/edit"}
                                    state={label}
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
                                      {/*end::Svg Icon*/}
                                    </button>
                                  </Link>
                                </a>
                                {perma.has("delete_items") ? (
                                  <DeleteSpinner
                                    collection={label}
                                    deleting={deleteLabel}
                                    url={"/master/label/"}
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

export default Label;
