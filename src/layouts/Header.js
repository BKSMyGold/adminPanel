import axios from "axios";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROLE_PERMISSION_BASE_URL } from "../Constants";

// export class Header extends Component {
//   constructor(props){
//     super(props);
//     this.state = {user: []};

//     this.handleLogout = this.handleLogout.bind(this);
//     axios.get(`${ROLE_PERMISSION_BASE_URL}/api/system-user`).then(res => this.setState({user :res.data}));
//     console.log('users =>',user)
//   }

//   handleLogout() {

//    localStorage.clear();
//    window.location.reload(false);
//  };
export default function Header() {
  let navigate = useNavigate;
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    let localStorageUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setName(localStorageUser ? localStorageUser.name : "Name");
  }, []);

  let localStorageUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // console.log('logged user ==>', localStorageUser)

  // const [users, setUsers] = React.useState([{}]);

  // React.useEffect(async () => {
  //   let u = await axios
  //     .get(`${ROLE_PERMISSION_BASE_URL}/api/system-user`)
  //     .then((res) => console.log(res.data));
  //     setUsers(u);
  //   }, []);
  //   console.log("users =>", users);

  function handleLogout() {
    localStorage.clear();
    window.location.reload(false);
  }

  // {
  //   users?.map((user) => {
  //     if (user.name === localStorageUser.name) {
  //       setName(user.name);
  //     }
  //   });
  // }
  return (
    <div
      id="kt_header"
      className="header align-items-stretch"
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <div className="container-xxl d-flex align-items-center">
        <div
          className="d-flex topbar align-items-center d-lg-none ms-n2 me-3"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
            id="kt_header_menu_mobile_toggle"
          >
            <span className="svg-icon svg-icon-2x">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="black"
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
        </div>
        {/*end::Heaeder menu toggle*/}
        {/*begin::Header Logo*/}

        <img
          alt="Logo"
          src="assets/media/logos/logo-demo2-sticky.png"
          class="logo"
        />

        {/* <img
              alt="Logo"
              src="assets/media/logos/logo-demo2-sticky.png"
              className="logo-sticky h-50px"
            /> */}

        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          <div className="d-flex align-items-stretch" id="kt_header_nav">
            <div
              className="header-menu align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="start"
              data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
            >
              <div
                className="menu menu-lg-rounded menu-column menu-lg-row menu- -bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
                id="#kt_header_menu"
                data-kt-menu="true"
              >
                <div
                  data-kt-menu-trigger="hover"
                  className="menu-item here show  me-lg-1"
                >
                  <a className="menu-link active py-3" href="/">
                    <span className="menu-title">Dashboard</span>
                  </a>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">Master</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/* begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                                fill="black"
                              />
                              <path
                                d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Products</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/metal"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Metal</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/metal_groups"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Metal Group</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/units"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Units</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/ornament"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Ornaments</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/shape"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Shape</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/cut"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Cut</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/clarity"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Clarity</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/colour"
                            >
                  
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Colour</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/style"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Style</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/making-charges"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Making Charges</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/collections"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Collections</span>
                            </a>
                          </div>
                          {/* <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/diamonds"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">
                                Diamonds &amp; Gems
                              </span>
                            </a>
                          </div> */}
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/categories"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Categories</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/varieties"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Varieties</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/products"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Products</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/items"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Items</span>
                            </a>
                          </div>
                          {/* <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/items_details"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Items Details</span>
                            </a>
                          </div> */}
                          <div className="menu-item">
                            <a
                              className="menu-link py-3"
                              href="/master/product-data/offers"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Offers</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/communication/com013.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                fill="black"
                              />
                              <path
                                d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Security</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/security/permissions"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Permissions</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/security/all_roles"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">All Roles</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/security/role_right"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Role Rights</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/security/masterUserRights"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Master User and rights
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/security/userpasswords"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              User and Passwords linking to master user
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/technology/teh004.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                fill="black"
                              />
                              <path
                                d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Settings</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              App/Web Front End Settings
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/master/settings/sliders"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Sliders</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/master/settings/how-to-videos"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Videos</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/buysell">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Current Rate</span>
                      </a>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      {/* <span className='menu-link py-3'>
                          <span className='menu-icon'>
                            <span className='svg-icon svg-icon-2'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  opacity='0.3'
                                  d='M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z'
                                  fill='black'
                                />
                                <path
                                  d='M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                          </span>
                          <span className='menu-title'>Reference Data</span>
                          <span className='menu-arrow'></span>
                        </span> */}
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/reference/gbplevels"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">GBP Levels</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/reference/reference"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Referal Commission
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/technology/teh004.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                fill="black"
                              />
                              <path
                                d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Plans</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/plans/plan-bonus"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Plan Bonus</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/plans/cycle-periods"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Cycle Periods</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/plans/standard-plans"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Standard Plans</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/taxes">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Duties and Taxes</span>
                      </a>
                    </div>

                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/badla">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Badla</span>
                      </a>
                    </div>


                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/loan_intrest_rates">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Loan Intrest Rates</span>
                      </a>
                    </div>




                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/calculation">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Calculations</span>
                      </a>
                    </div>




                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/faq">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">FAQ</span>
                      </a>
                    </div>


                    
                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/policy">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Policy</span>
                      </a>
                    </div>


                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/sell_request">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Sell Request</span>
                      </a>
                    </div>


                    <div className="menu-item">
                      <a className="menu-link py-3" href="/master/return_reason">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Return Reason</span>
                      </a>
                    </div>






                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/technology/teh004.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                                fill="black"
                              />
                              <path
                                d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Instant Gold, buy save , sell and reserve</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/skip_count"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Skip Count/Unpaid Skip</span>
                          </a>
                        </div>
                        {/* <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/plans/cycle-periods"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title"></span>
                          </a>
                        </div> */}
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/master/unpaid_skip_count"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Unpaid skip count</span>
                          </a>
                        </div>
                      </div>
                    </div>



                    <div className="menu-item">
                      {/* <a
                          className='menu-link py-3'
                          href='/master/sellReasons'
                        >
                          <span className='menu-icon'>
                            <span className='svg-icon svg-icon-2'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  opacity='0.3'
                                  d='M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z'
                                  fill='black'
                                />
                                <path
                                  d='M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                          </span>
                          <span className='menu-title'>
                            Sales Returns Reasons
                          </span>
                        </a> */}
                    </div>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">Transactions</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                fill="black"
                              />
                              <path
                                d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Financial</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/ZohoBooks"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Zoho Books</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/InStoreReturns"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">In store Returns</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/InStoreRedeem"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              In Store Redeem with OTP confirmation
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/InStoreCashCollection"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              In store Cash Collections With OTP Confirmation
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/InStoreTokenRefund"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              In strore token Refund Entry with OTP confirmation
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/SubmissionOfGoldEntry"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Submission of Old gold Entry by Verifier
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/BankPaymentEntries"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Bank Payment Entries with OTP confrimation
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/financials/GoldAdjustments"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Gold Adjustment Entry with OTP confirmation
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path d="M22 7H2V11H22V7Z" fill="black" />
                              <path
                                opacity="0.3"
                                d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Order</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/order/Shipping"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Order Shipping Entry
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/order/Tracking"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Order Tracking Entry
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Data Entry</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/data-entry/reference-data"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Reference Data Entry{" "}
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/data-entry/gbp-entry"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Enter GBP Details
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/data-entry/enter-master-details"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Enter User Master Details{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                fill="black"
                              />
                              <path
                                d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Status Updates</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/status-updates/collector"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Allocation to Collectors{" "}
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/status-updates/delivery"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Allocation to Delivery Boy
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/status-updates/security"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Allocation of security
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/status-updates/appointmenttime"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Allot Apointment time
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/status-updates/updateappoinments"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Update status of old gold appointments
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Products</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/products/ItemDetails"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Enter Item Details
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/transaction/products/OfferDetails"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Enter Offers Details
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1">
                  <span className="menu-link py-3">
                    <span className="menu-title">Reports</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                fill="black"
                              />
                              <path
                                d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Daily Report</span>
                        <span className="menu-arrow"></span>
                      </span>

                      
                      
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/daily-reports/DailyActivity"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Daily Activity Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/daily-reports/DailyStatement"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Daily Satement </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/daily-reports/NewuserData"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              New User Data Report{" "}
                            </span>
                          </a>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Payment Report</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/daily-reports/CompletedPayment"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Completed</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/daily-reports/PendingPayment"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Pending</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="menu-item">
                      <a className="menu-link py-3" href="/report/reports">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: /icons/duotune/general/gen002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
                                fill="black"
                              />
                              <path
                                d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Report Hai</span>
                      </a>
                    </div>


                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path d="M22 7H2V11H22V7Z" fill="black" />
                              <path
                                opacity="0.3"
                                d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Accounts Reports</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/accounts-reports/Metal-Currency-Userbased"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Metal and Currency ledger based on user data only
                              by customer
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/accounts-reports/Metal-Currency-Systembas"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Metal and Currency Ledger as per system roles
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/accounts-reports/Metal-Currency-Summary"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Metal and currency Summary{" "}
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/accounts-reports/Ledger"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Ledger -(charges, taxes, duties, others, etc)
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Buy and Save Reports</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              {" "}
                              All User Data Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/userdata/plan"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Plan wise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/userdata/cycle"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Cyclewise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/userdata/full"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Full User Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Fixed Value plan Report{" "}
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/fixedPlanValue/cycle"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Cyclewise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/fixedPlanValue/maturity"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Maturity Reports
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/fixedPlanValue/full"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Full User Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Fixed Weight plan Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/fixedPlanWeight/cycle"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Cyclewise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/fixedPlanWeight/maturity"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Maturity Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/fixedPlanWeight/full"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Full User Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Standard Plan Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/StandardPlan/cycle"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Cyclewise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/StandardPlan/maturity"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Maturity Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/StandardPlan/full"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Full User Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Plans Converted to Normal Investment Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/converted-normal/user"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  User wise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/converted-normal/plan"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Plan wise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/converted-normal/full"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Full Summary Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              {" "}
                              Skip Now Report{" "}
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/skipnow/user"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  User wise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/skipnow/plan"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Plan wise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/skipnow/full"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Full Summary Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Redeem Report</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/redeem/user"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  User wise data Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/redeem/completed"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Completed Redeem Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/redeem/pending"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Pending Delivery Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Sell Report</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/sell/user"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  User wise Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/sell/completed"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Completed Payment Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/sell/pending"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Pending Payments Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              {" "}
                              Plan Bonus Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/planBonus/Accrued"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Accrued Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/planBonus/Due"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Due Report</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/planBonus/Forfieted"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Forfieted Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              User Bonus summary
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/userBonus/fromReferals"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Bonus earned from referals Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/userBonus/fromInvestments"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Bonus earned from investments Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Referral Bonus Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/ReferalBonus/Accrued"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Accrued Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/ReferalBonus/Due"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Due Report</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/ReferalBonus/Forfieted"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Forfieted Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Referred/ joining Bonus Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/ReferedBonus/Accrued"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Accrued Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/ReferedBonus/Due"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Due Report</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/ReferedBonus/Forfieted"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Forfieted Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Referral &amp; Referred Data Summary Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/Referal-Refered-Summary/category"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  As per Category
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/buy-save/Referal-Refered-Summary/user"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">As per user</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                fill="black"
                              />
                              <path
                                d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Sell Ur Gold Report</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">User Data</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/sell-old-gold/userdata/customerquery"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Customer Query Generated Report
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/sell-old-gold/userdata/detailed"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Customerwise Detailed Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Appointment Report
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div
                              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                              data-kt-menu-placement="right-start"
                              className="menu-item menu-lg-down-accordion"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  In -Store Appointments Report
                                </span>
                                <span className="menu-arrow"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/appointment/in-store/due"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Due Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/appointment/in-store/fixed"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Fixed Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/appointment/in-store/canceled"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Cancelled Report
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                              data-kt-menu-placement="right-start"
                              className="menu-item menu-lg-down-accordion"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Home Visit Appointments Report
                                </span>
                                <span className="menu-arrow"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/appointment/home-visit/due"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Due Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/appointment/home-visit/fixed"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Fixed Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/appointment/home-visit/canceled"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Cancelled Report
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Verifier Reports</span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div
                              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                              data-kt-menu-placement="right-start"
                              className="menu-item menu-lg-down-accordion"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Customer Related Report
                                </span>
                                <span className="menu-arrow"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/verfier/CustomerRelated/CustomerAllotment"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Customer Allotment Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/verfier/CustomerRelated/OnSiteCustomer"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      On Site Customer Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/sell-old-gold/verfier/CustomerRelated/CustomerValuation"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Customer Valuation Report{" "}
                                    </span>
                                  </a>
                                </div>
                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Payments Report
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a
                                        className="menu-link py-3"
                                        href="/reports/sell-old-gold/verfier/CustomerRelated/PaymentReportWithMetals"
                                      >
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Pending Payment Report with Metal
                                          Details
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a
                                        className="menu-link py-3"
                                        href="/reports/sell-old-gold/verfier/CustomerRelated/Completed"
                                      >
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Completed Payment Report
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                  data-kt-menu-placement="right-start"
                                  className="menu-item menu-lg-down-accordion"
                                >
                                  <span className="menu-link py-3">
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Metals Report
                                    </span>
                                    <span className="menu-arrow"></span>
                                  </span>
                                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                    <div className="menu-item">
                                      <a
                                        className="menu-link py-3"
                                        href="/reports/sell-old-gold/verfier/CustomerRelated/CustmerWise"
                                      >
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Customer Wise
                                        </span>
                                      </a>
                                    </div>
                                    <div className="menu-item">
                                      <a
                                        className="menu-link py-3"
                                        href="/reports/sell-old-gold/verfier/CustomerRelated/VerifierWise"
                                      >
                                        <span className="menu-bullet">
                                          <span className="bullet bullet-dot"></span>
                                        </span>
                                        <span className="menu-title">
                                          Verifier Wise
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/sell-old-gold/verfier/TamperProof"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Tamper Proof Security Envelope Report ( In
                                  Stock, Used and Due)
                                </span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/sell-old-gold/verfier/SecuirtyGuard"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  Security Guard Report
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">E-Shop Reports</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/eshop/orderSummary"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Order Summary Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/eshop/orderPending"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Orders Pending Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/eshop/orderShippingEntry"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Order Shipping Entry Summary Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/eshop/orderInTransit"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Orders In- Transit Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/eshop/orderTrackingEntry"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Order tracking entry summary Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/eshop/orderCompleted"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Order Completed Summary Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/eshop/CustomeOrderTracking"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Custom Order Tracking Reportt
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                fill="black"
                              />
                              <path
                                d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Stock Report</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/stock/Summary"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Sales Summary</span>
                          </a>
                        </div>
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Accumalated Gold Summary
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/stock/AccumalatedGoldSummary/Due"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">Due</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/stock/AccumalatedGoldSummary/InPlan"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">In-Plan</span>
                              </a>
                            </div>
                            <div className="menu-item">
                              <a
                                className="menu-link py-3"
                                href="/reports/stock/AccumalatedGoldSummary/Summary"
                              >
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  From Investments Summary
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                          data-kt-menu-placement="right-start"
                          className="menu-item menu-lg-down-accordion"
                        >
                          <span className="menu-link py-3">
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Accumalated Bonus Summary
                            </span>
                            <span className="menu-arrow"></span>
                          </span>
                          <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                            <div
                              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                              data-kt-menu-placement="right-start"
                              className="menu-item menu-lg-down-accordion"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">From Plans</span>
                                <span className="menu-arrow"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/stock/AccumalatedBonusSummary/FromPlans/Accrued"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Accrued Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/stock/AccumalatedBonusSummary/FromPlans/Due"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Due Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/stock/AccumalatedBonusSummary/FromPlans/Forfieted"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Forfieted Report
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                              data-kt-menu-placement="right-start"
                              className="menu-item menu-lg-down-accordion"
                            >
                              <span className="menu-link py-3">
                                <span className="menu-bullet">
                                  <span className="bullet bullet-dot"></span>
                                </span>
                                <span className="menu-title">
                                  From Referral
                                </span>
                                <span className="menu-arrow"></span>
                              </span>
                              <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/stock/AccumalatedBonusSummary/FromReferals/Accrued"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Accrued Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/stock/AccumalatedBonusSummary/FromReferals/Due"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Due Report
                                    </span>
                                  </a>
                                </div>
                                <div className="menu-item">
                                  <a
                                    className="menu-link py-3"
                                    href="/reports/stock/AccumalatedBonusSummary/FromReferals/Forfieted"
                                  >
                                    <span className="menu-bullet">
                                      <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">
                                      Forfieted Report
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Delivery Boy Report</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/delivery/summary"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Delivery Boy Summary Report
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/delivery/userwise"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Delivery Boy Userwise Detailed Report
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Collection Report</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/collector/summary"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Collectors Summary Report{" "}
                            </span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/reports/collector/userwise"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">
                              Collectors Userwise Detailed Report
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title">Customer Relations</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">SMS</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/customer-relations/sms/send"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Send</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Whatsapp</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/customer-relations/whatsapp/send"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Send</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Email</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/customer-relations/email/send"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Send</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">Push</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/customer-relations/push/send"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Send</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                      data-kt-menu-placement="right-start"
                      className="menu-item menu-lg-down-accordion"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-icon">
                          {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                          <span className="svg-icon svg-icon-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                                fill="black"
                              />
                              <path
                                opacity="0.3"
                                d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                        <span className="menu-title">FAQs</span>
                        <span className="menu-arrow"></span>
                      </span>
                      <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg py-lg-4 w-lg-225px">
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/customer-relations/faq/create"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">Create</span>
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link py-3"
                            href="/customer-relations/faq/all"
                          >
                            <span className="menu-bullet">
                              <span className="bullet bullet-dot"></span>
                            </span>
                            <span className="menu-title">ALL FAQs</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/register">
                  <span className="menu-link  register">
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item py-5 ms-4"
                    >
                      <span className="menu-title">Register a User</span>
                    </div>
                  </span>
                </Link>
              </div>

              {/*end::Menu*/}
            </div>
            {/*end::Menu wrapper*/}
          </div>
          {/*end::Navbar*/}
          {/*begin::Topbar*/}
          <div className="d-flex align-items-stretch flex-shrink-0">
            {/*begin::Toolbar wrapper*/}
            <div className="topbar d-flex align-items-stretch flex-shrink-0">
              {/*begin::Search*/}
              <div className="d-flex align-items-stretch ms-1 ms-lg-3">
                {/*begin::Search*/}
              </div>
              {/*end::Search*/}
              {/*begin::Activities*/}
              <div className="d-flex align-items-center ms-1 ms-lg-3"></div>
              {/*end::Activities*/}

              {/*begin::User*/}
              <div
                className="d-flex align-items-center me-n3 ms-1 ms-lg-3"
                id="kt_header_user_menu_toggle"
              >
                {/*begin::Menu wrapper*/}
                <div
                  className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                  data-kt-menu-trigger="click"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <img
                    className="h-30px w-30px rounded"
                    src="assets/media/avatars/150-2.jpg"
                    alt=""
                  />
                </div>
                {/*begin::Menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src="assets/media/avatars/150-2.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Username*/}
                      <div className="d-flex flex-column">
                        <div className="fw-bolder d-flex align-items-center fs-5">
                          {name ? name : "Name"}
                          <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                            Pro
                          </span>
                        </div>
                        <a
                          href="#"
                          className="fw-bold text-muted text-hover-primary fs-7"
                        >
                          {name}@myBksGold.com
                        </a>
                      </div>
                      {/*end::Username*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2"></div>
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a href="/system_user_detail" className="menu-link px-5">
                      My Profile
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  {/* <div className="menu-item px-5">
                    <a
                      href="../../demo2/dist/pages/projects/list.html"
                      className="menu-link px-5"
                    >
                      <span className="menu-text">My Projects</span>
                      <span className="menu-badge">
                        <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
                          3
                        </span>
                      </span>
                    </a>
                  </div> */}
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  {/* <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="left-start">
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title">My Subscription</span>
                      <span className="menu-arrow"></span>
                    </a>
                    
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      <div className="menu-item px-3">
                        <a
                          href="../../demo2/dist/account/referrals.html"
                          className="menu-link px-5"
                        >
                          Referrals
                        </a>
                      </div>
                      <div className="menu-item px-3">
                        <a
                          href="../../demo2/dist/account/billing.html"
                          className="menu-link px-5"
                        >
                          Billing
                        </a>
                      </div>
                      <div className="menu-item px-3">
                        <a
                          href="../../demo2/dist/account/statements.html"
                          className="menu-link px-5"
                        >
                          Payments
                        </a>
                      </div>
                      <div className="menu-item px-3">
                        <a
                          href="../../demo2/dist/account/statements.html"
                          className="menu-link d-flex flex-stack px-5"
                        >
                          Statements
                          <i
                            className="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="View your statements"
                          ></i>
                        </a>
                      </div>
                      <div className="separator my-2"></div>
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input w-30px h-20px"
                              type="checkbox"
                              value="1"
                              checked="checked"
                              name="notifications"
                            />
                            <span className="form-check-label text-muted fs-7">
                              Notifications
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="menu-item px-5">
                    <a
                      href="../../demo2/dist/account/statements.html"
                      className="menu-link px-5"
                    >
                      My Statements
                    </a>
                  </div> */}
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2"></div>
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  {/* <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="left-start">
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title position-relative">
                        Language
                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                          English
                          <img
                            className="w-15px h-15px rounded-1 ms-2"
                            src="assets/media/flags/united-states.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      <div className="menu-item px-3">
                        <a href="/" className="menu-link d-flex px-5 active">
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/united-states.svg"
                              alt=""
                            />
                          </span>
                          English
                        </a>
                      </div>
                    
                      <div className="menu-item px-3">
                        <a href="/" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/spain.svg"
                              alt=""
                            />
                          </span>
                          Spanish
                        </a>
                      </div>
                   
                      <div className="menu-item px-3">
                        <a href="/" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/germany.svg"
                              alt=""
                            />
                          </span>
                          German
                        </a>
                      </div>
                     
                      <div className="menu-item px-3">
                        <a href="/" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/japan.svg"
                              alt=""
                            />
                          </span>
                          Japanese
                        </a>
                      </div>
              
                      <div className="menu-item px-3">
                        <a href="/" className="menu-link d-flex px-5">
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/france.svg"
                              alt=""
                            />
                          </span>
                          French
                        </a>
                      </div>
                     
                    </div>
                   
                  </div> */}
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  {/* <div className="menu-item px-5 my-1">
                    <a href="/" className="menu-link px-5">
                      Account Settings
                    </a>
                  </div> */}
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <button
                      onClick={() => handleLogout()}
                      type="button"
                      class="btn btn-danger"
                    >
                      Logout
                    </button>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2"></div>

                  {/* <div className="menu-item px-5">
                    <div className="menu-content px-5">
                      <label
                        className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
                        for="kt_user_menu_dark_mode_toggle"
                      >
                        <input
                          className="form-check-input w-30px h-20px"
                          type="checkbox"
                          value="1"
                          name="mode"
                          id="kt_user_menu_dark_mode_toggle"
                          data-kt-url="../../demo2/dist/index.html"
                        />
                        <span className="pulse-ring ms-n1"></span>
                        <span className="form-check-label text-gray-600 fs-7">
                          Dark Mode
                        </span>
                      </label>
                    </div>
                  </div> */}
                </div>
                {/*end::Menu*/}
                {/*end::Menu wrapper*/}
              </div>
              {/*end::User */}
              {/*begin::Aside mobile toggle*/}
              {/*end::Aside mobile toggle*/}
            </div>
            {/*end::Toolbar wrapper*/}
          </div>
          {/*end::Topbar*/}
        </div>
        {/*end::Wrapper*/}
      </div>
      {/*end::Container*/}
    </div>
  );
} 
