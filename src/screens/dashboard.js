import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  console.log(props);
  return (
    <div className="toolbar py-5 py-lg-15">
      {/*begin::Container*/}
      <div
      
        className="container-xxl d-flex flex-stack flex-wrap"
      >
        {/*begin::Page title*/}
        <div className="page-title d-flex flex-column me-3">
          {/*begin::Title*/}
          <h1 className="d-flex text-white fw-bolder my-1 fs-3">Dashboard</h1>
          {/*end::Title*/}
          {/*begin::Breadcrumb*/}   
          <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
            {/*begin::Item*/}
            <li className="breadcrumb-item text-white opacity-75">
              <a
                href="../../demo2/dist/index.html"
                className="text-white text-hover-primary"
              >
                Home
              </a>
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item">
              <span className="bullet bg-white opacity-75 w-5px h-2px"></span>
            </li>
            {/*end::Item*/}
            {/*begin::Item*/}
            <li className="breadcrumb-item text-white opacity-75">Dashboard</li>
            {/*end::Item*/}
          </ul>
          {/*end::Breadcrumb*/}
        </div>
        {/*end::Page title*/}
        {/*begin::Actions*/}
        {/* <div className="d-flex align-items-center py-3 py-md-1">
         
          <div className="me-4">
           
            <a
              href="#"
              className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
             
              <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                    fill="black"
                  />
                </svg>
              </span>
           Filter
            </a>
           
            <div
              className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
              data-kt-menu="true"
              id="kt_menu_618d387089331"
            >
            
              <div className="px-7 py-5">
                <div className="fs-5 text-dark fw-bolder">Filter Options</div>
              </div>
              
              <div className="separator border-gray-200"></div>
             
              
              <div className="px-7 py-5">
                
                <div className="mb-10">
                 
                  <label className="form-label fw-bold">Status:</label>
                  
                  <div>
                    <select
                      className="form-select form-select-solid"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-dropdown-parent="#kt_menu_618d387089331"
                      data-allow-clear="true"
                    >
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select>
                  </div>
                  
                </div>
               
                <div className="mb-10">
                  
                  <label className="form-label fw-bold">Member Type:</label>
                 
                  <div className="d-flex">
                    
                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                      <span className="form-check-label">Author</span>
                    </label>
                   
                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="2"
                        checked="checked"
                      />
                      <span className="form-check-label">Customer</span>
                    </label>
                   
                  </div>
                  
                </div>
                
                <div className="mb-10">
                 
                  <label className="form-label fw-bold">Notifications:</label>
                 
                  <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      name="notifications"
                        checked="checked"
                    />
                    <label className="form-check-label">Enabled</label>
                  </div>
                
                </div>
                
                <div className="d-flex justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-sm btn-light btn-active-light-primary me-2"
                   
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary"
                   
                  >
                    Apply
                  </button>
                </div>
               
              </div>
             
            </div>
            
          </div>
          
         
        </div> */}
          <Link
            className="btn btn-bg-white btn-active-color-primary"
           
            to={props.createLink}
          >
            Create
          </Link>
        {/*end::Actions*/}
      </div>
      {/*end::Container*/}
    </div>
  );
};

Dashboard.defaultProps = {
  createLink: "#",
};

export default Dashboard;
