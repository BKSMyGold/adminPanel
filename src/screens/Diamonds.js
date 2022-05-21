import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import { getAllDiamonds } from "../apis/Diamonds";
import { Link } from "react-router-dom";
import { deleteDiamond } from "../apis/Diamonds";
import DeleteSpinner from "../delete";
import { CSVLink } from "react-csv";

//===========================================================
const Diamonds = () => {
  //===========================================================
  const [diamonds, setDiamonds] = useState([]);
  //===========================================================
  useEffect(() => {
    getAllDiamonds().then(({ data: foundDiamonds }) => {
      setDiamonds(foundDiamonds);
      console.log(foundDiamonds);
    });
  }, []);
  //===========================================================
  //===========================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard createLink={"/master/product-data/diamonds/add"} />
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
                      Diamond &amp; Gems
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Define Diamonds shapes and gem stones, clarity, color and
                      cuts &amp; Certifying authority
                    </span>
                  </h3>
                  <div class="card-toolbar">
                    {/*begin::Menu*/}
                    <button
                      type="button"
                      class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                      <span class="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect
                              x="5"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                            />
                            <rect
                              x="14"
                              y="5"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <rect
                              x="5"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            />
                            <rect
                              x="14"
                              y="14"
                              width="5"
                              height="5"
                              rx="1"
                              fill="#000000"
                              opacity="0.3"
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*begin::Menu 2*/}
                    <CSVLink
                      className="csv"
                      data={diamonds}
                      filename="Reports.csv"
                      target="_blank"
                      //   headers ={headers}
                    >
                      Export
                    </CSVLink>
                    <div
                      class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                      data-kt-menu="true"
                    >
                      {/*begin::Menu item*/}
                      <div class="menu-item px-3">
                        <div class="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                          Quick Actions
                        </div>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div class="separator mb-3 opacity-75"></div>
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">
                          New Ticket
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">
                          New Customer
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div
                        class="menu-item px-3"
                        data-kt-menu-trigger="hover"
                        data-kt-menu-placement="right-start"
                      >
                        {/*begin::Menu item*/}
                        <a href="#" class="menu-link px-3">
                          <span class="menu-title">New Group</span>
                          <span class="menu-arrow"></span>
                        </a>
                        {/*end::Menu item*/}
                        {/*begin::Menu sub*/}
                        <div class="menu-sub menu-sub-dropdown w-175px py-4">
                          {/*begin::Menu item*/}
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Admin Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Staff Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                          {/*begin::Menu item*/}
                          <div class="menu-item px-3">
                            <a href="#" class="menu-link px-3">
                              Member Group
                            </a>
                          </div>
                          {/*end::Menu item*/}
                        </div>
                        {/*end::Menu sub*/}
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div class="menu-item px-3">
                        <a href="#" class="menu-link px-3">
                          New Contact
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div class="separator mt-3 opacity-75"></div>
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div class="menu-item px-3">
                        <div class="menu-content px-3 py-3">
                          <a class="btn btn-primary btn-sm px-4" href="#">
                            Generate Reports
                          </a>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu 2*/}
                    {/*end::Menu*/}
                  </div>
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
                        <tr class="fw-bolder text-muted">
                          <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value="1"
                                data-kt-check="true"
                                data-kt-check-target=".widget-13-check"
                              />
                            </div>
                          </th>
                          <th class="min-w-150px">Diamond Id</th>
                          <th class="min-w-140px">Diamond Shapes</th>
                          <th class="min-w-120px">Gemstones</th>
                          <th class="min-w-120px">Clarity</th>
                          <th class="min-w-120px">Color</th>
                          <th class="min-w-120px">Cut</th>
                          <th class="min-w-120px">Certifiying Authority</th>
                          <th class="min-w-100px text-end">Actions</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        {diamonds.map((diamonds) => (
                          <tr>
                            <td>
                              <div class="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  class="form-check-input widget-13-check"
                                  type="checkbox"
                                  value="1"
                                />
                              </div>
                            </td>
                            <td>
                              <a
                                href="#"
                                class="text-dark fw-bolder text-hover-primary fs-6"
                              >
                                {diamonds.id}
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                              >
                                {diamonds.shape}
                              </a>
                            </td>
                            <td>
                              <a
                                href="#"
                                class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                              >
                                {diamonds.gemstones}
                              </a>
                            </td>
                            <td class="text-dark fw-bolder text-hover-primary fs-6">
                              {diamonds.clarity}
                            </td>
                            <td>
                              <span class="badge badge-light-success">
                                {diamonds.color}
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-light-success">
                                {diamonds.cut}
                              </span>
                            </td>
                            <td>
                              <span class="badge badge-light-success">
                                {diamonds.certify_authority}
                              </span>
                            </td>
                            <td class="text-end">
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              >
                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                {/* <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                      fill="black"
                                    />
                                    <path
                                      opacity="0.3"
                                      d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span> */}
                                {/*end::Svg Icon*/}
                              </a>
                              <a
                                href="#"
                                class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                              >
                                <Link
                                  to={"/master/product-data/diamonds/edit"}
                                  state={diamonds}
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
                              <DeleteSpinner
                                collection={diamonds}
                                deleting={deleteDiamond}
                                url={"/master/product-data/diamonds/"}
                              />
                            </td>
                          </tr>
                        ))}
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

export default Diamonds;
