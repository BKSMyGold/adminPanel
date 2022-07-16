import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { BASE_URL } from "../Constants";
import { Link } from "react-router-dom";
import { deletecollection } from "../apis/Collections";
import { CSVLink } from "react-csv";
import DeleteSpinner from "../delete";
import { getPolicy, deletePolicy } from "../APIs_Hai/Policy";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//=====================================================
const Policy = (props) => {
  //============================================================================
  const [policy, setPolicy] = useState([]);
  //============================================================================
  useEffect(() => {
    getPolicy().then((res) => setPolicy(res.data.data.data));
  }, []);

  console.log("--->", policy);

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard createLink={"/master/policy/add"} />
          <div
            id="kt_content_container"
            class="d-flex flex-column-fluid align-items-start container-xxl"
          >
            <div class="content flex-row-fluid" id="kt_content">
              <div class="card mb-5 mb-xl-8">
                <div class="card-header border-0 pt-5">
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder fs-3 mb-1">Policy</span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Define Policy
                    </span>
                  </h3>
                </div>

                <div class="card-body py-3">
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
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
                          <th class="min-w-150px">Id</th>
                          <th class="min-w-140px">Policy Title</th>
                          <th class="min-w-140px">Description</th>
                          <th class="min-w-140px">Consignment</th>
                          <th class="min-w-100px">Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {policy.map((policy) => {
                          return (
                            <tr class="text-center fw-bolder">
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary fs-6"
                                >
                                  {policy.id}
                                </a>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary fs-6"
                                >
                                  {policy.title}
                                </a>
                              </td>
                              <td class = "policy">
                                <div>{policy.description.substring(0, 25)} ...</div>
                                <Popup
                                  trigger={
                                    <button class="btn btn-success">
                                      {" "}
                                      Show More
                                    </button>
                                  }
                                  position="right center"
                                >
                                  <div>{policy.description}</div>
                                </Popup>
                              </td>
                              {/* <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary fs-6"
                                >
                                  
                                </a>
                              </td> */}

                              <td>
                                <a
                                  href="#"
                                  class="text-dark fw-bolder text-hover-primary fs-6"
                                >
                                  {policy.consignmentRequired == true
                                    ? "Yes"
                                    : "No"}
                                </a>
                              </td>

                              <td class="text-center">
                                <a
                                  href="#"
                                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                >
                                  <Link
                                    to={"/master/policy/edit"}
                                    state={policy}
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
                                {/* {userPermissions.has("delete_collections") ? ( */}
                                <DeleteSpinner
                                  collection={policy}
                                  deleting={deletePolicy}
                                  url={"/master/policy"}
                                />
                                {/* ) : null} */}
                              </td>
                            </tr>
                          );
                        })}
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

export default Policy;