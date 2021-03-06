import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  console.log(props);
  return (
    <div className="toolbar py-5 py-lg-15" id="kt_toolbar">
      {/*begin::Container*/}
      <div
        id="kt_toolbar_container"
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
        <div className="d-flex align-items-center py-3 py-md-1">
          {/*begin::Wrapper*/}
          <div className="me-4">
            {/*begin::Menu*/}
            <a
              href="#"
              className="btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-primary fw-bolder"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
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
              {/*end::Svg Icon*/}Filter
            </a>
            {/*begin::Menu 1*/}
            <div
              className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
              data-kt-menu="true"
              id="kt_menu_618d387089331"
            >
              {/*begin::Header*/}
              <div className="px-7 py-5">
                <div className="fs-5 text-dark fw-bolder">Filter Options</div>
              </div>
              {/*end::Header*/}
              {/*begin::Menu separator*/}
              <div className="separator border-gray-200"></div>
              {/*end::Menu separator*/}
              {/*begin::Form*/}
              <div className="px-7 py-5">
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-bold">Status:</label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <div>
                    <select
                      className="form-select form-select-solid"
                      data-kt-select2="true"
                      data-placeholder="Select option"
                      data-dropdown-parent="#kt_menu_618d387089331"
                      data-allow-clear="true"
                    >
                      <option></option>
                      <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="2">In Process</option>
                      <option value="2">Rejected</option>
                    </select>
                  </div>
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-bold">Member Type:</label>
                  {/*end::Label*/}
                  {/*begin::Options*/}
                  <div className="d-flex">
                    {/*begin::Options*/}
                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="1"
                      />
                      <span className="form-check-label">Author</span>
                    </label>
                    {/*end::Options*/}
                    {/*begin::Options*/}
                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="2"
                        checked="checked"
                      />
                      <span className="form-check-label">Customer</span>
                    </label>
                    {/*end::Options*/}
                  </div>
                  {/*end::Options*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="mb-10">
                  {/*begin::Label*/}
                  <label className="form-label fw-bold">Notifications:</label>
                  {/*end::Label*/}
                  {/*begin::Switch*/}
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
                  {/*end::Switch*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Actions*/}
                <div className="d-flex justify-content-end">
                  <button
                    type="reset"
                    className="btn btn-sm btn-light btn-active-light-primary me-2"
                    data-kt-menu-dismiss="true"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-sm btn-primary"
                    data-kt-menu-dismiss="true"
                  >
                    Apply
                  </button>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Form*/}
            </div>
            {/*end::Menu 1*/}
            {/*end::Menu*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Button*/}
          <Link
            className="btn btn-bg-white btn-active-color-primary"
            id="kt_toolbar_primary_button"
            to={props.createLink}
          >
            Create
          </Link>
          {/*end::Button*/}
        </div>
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
