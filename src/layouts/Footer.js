import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
        {/*begin::Container*/}
        <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/*begin::Copyright*/}
          <div className="text-dark order-2 order-md-1">
            <span className="text-muted fw-bold me-1">2022 ©</span>
            <a
              href="#"
              target="_blank"
              className="text-gray-800 text-hover-primary"
            >
              BK Saraf
            </a>
          </div>
          {/*end::Copyright*/}
          {/*begin::Menu*/}
          <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
            <li className="menu-item">
              <a href="#" target="_blank" className="menu-link px-2">
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="#" target="_blank" className="menu-link px-2">
                Privacy
              </a>
            </li>
            <li className="menu-item">
              <a href="#" target="_blank" className="menu-link px-2">
                Policy
              </a>
            </li>
          </ul>
          {/*end::Menu*/}
        </div>
        {/*end::Container*/}
      </div>
    );
  }
}

export default Footer;
