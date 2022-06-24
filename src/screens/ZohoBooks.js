import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
//===========================================================================================================
const ZohoBooks = () => {
  //=========================================================================================================
  const [zohoContact, setZohoContact] = useState([]);
  const [ItemDetails, setItemDetails] = useState([]);

  //=========================================================================================================
  //   // Create WebSocket connection.
  // const socket = new WebSocket('ws://books.zoho.in/api/v3/contacts?organization_id=60014963586');

  // // Connection opened
  // socket.addEventListener('open', function (event) {
  //     socket.send('Hello Server!');
  // });

  // // Listen for messages
  // socket.addEventListener('message', function (event) {
  //     console.log('Message from server ', event.data);
  // });

  useEffect(() => {
    try {
      console.log("------------> 1");

      axios
        .get(
          "https://books.zoho.in/api/v3/contacts?organization_id=60014963586",
          {
            headers: {
              //  "User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
              Authorization:
                "Zoho-oauthtoken 1000.af4c22a746861d493af2264f9d16db17.57620bda51e00c61704a11ed5f4bbf8f",
            },
          }
        )
        .then((res) => {
          setZohoContact(res.contacts);
          console.log("------------> 3");
        })
        .catch((err) => {
          console.log(err.response);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log("----> here it is", zohoContact);

  // useEffect(()=>{
  //   console.log('===> 1')
  //     const fetchZohoContact = async()=>{
  //         let params = {
  //             method: 'GET',
  //             headers: {
  //               Authorization : "Zoho-oauthtoken 1000.b48b67d8390499ec1e186a43e5c5fc21.6a105ebf99d889745d5d77e27c11fe56",
  //               User-Agent:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"

  //             },
  //             mode:"no-cors"
  //           }
  //           let data = await fetch('https://books.zoho.in/api/v3/contacts?organization_id=60014963586',{params})
  //           console.log('===> 2')
  //          console.log("aaya =============>",data);
  //     }
  //     fetchZohoContact()
  //   },[])

  // const ft = async()=>{
  //   let data = await fetch('https://books.zoho.in/api/v3/contacts?organization_id=60014963586',{ method: 'Get', headers:{"Content-type": "application/x-www-form-urlencoded;charset=UTF-8", "Authorization": "Zoho-oauthtoken 1000.92708fab5d93188490db030ff5d6a4b7.fc11900b1bfa3dfde6b4045d2d4ba705"}})
  //   console.log('===> 2')
  //  console.log("aaya =============>",data);

  // }
  // ft();

  // console.log('================================>', zohoContact)

  // const xhr = new XMLHttpRequest();
  // const url = 'https://books.zoho.in/api/v3/contacts?organization_id=60014963586';
  // let headers = { "Authorization": "Zoho-oauthtoken 1000.064338de523306a2d1a1e1d1ab7bfb11.d7ea1fe7c6bd7333f4d409ea900ac443",
  //                 // "Content-Type"  : "Access-Control-Allow-Headers"
  // }
  // xhr.responseType = 'json';
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === XMLHttpRequest.DONE) {
  //     console.log(xhr.response);
  //   }
  // };

  // xhr.open('GET', url);
  // xhr.setRequestHeader("headers",headers)
  // xhr.send();

  //  useEffect(() => {
  //     const fetchItemDetails = async () => {
  //       const { data } = await axios.get(
  //         "https://books.zoho.in/api/v3/contacts?organization_id=60014963586"
  //       );

  //   setItemDetails(data.data);
  //     };
  //     fetchItemDetails();
  //   }, []);
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard createLink="/transaction/financials/ZohoBooks/add" />
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
                      ItemDetails
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Define ItemDetails
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
                          <th class="min-w-150px">SKU</th>
                          {/* <th class='min-w-140px'>Image</th> */}
                          {/* <th class='min-w-140px'>Item Name</th> */}
                          {/* <th class='min-w-120px'>Collection</th> */}
                          {/* <th class='min-w-120px'>Category</th> */}
                          <th class="min-w-120px">Varieity</th>
                          {/* <th class='min-w-120px'>Product</th> */}

                          {/* <th class="min-w-120px">Composition</th> */}
                          <th class="min-w-120px">Description</th>
                          <th class="min-w-120px">Ring Size</th>
                          <th class="min-w-120px">Measurements</th>
                          <th class="min-w-120px">Gross Weight</th>

                          <th class="min-w-120px">Amount</th>
                          <th class="min-w-100px text-end">Actions</th>
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}

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

export default ZohoBooks;
