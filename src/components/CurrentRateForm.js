import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidbuySell } from "../Validator";
import { addBuySell, updateBuySell } from "../apis/CurrentRate";

const CurrentRateForm = (props) => {
  let location = useLocation();

  let navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [buySell, setbuySell] = useState(
    location?.state ?? {
      buy: "",
      sell: "",
    }
  );

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard />
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
                    {isUpdate ? "Update Buy Sell Prices" : "Add Buy Sell Prices"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                    {isUpdate ? "Update Buy Sell Prices" : "Add Buy Sell Prices"}
                    </span>
                  </h3>
                  
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    <form>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Buy Price</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="text"
                          name="buy"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Buy Price"
                          onChange={(e) =>
                            setbuySell({
                              ...buySell,
                              buy: Number(e.target.value),
                            })
                          }
                          value={buySell.buy}
                        />
                      </div>
                      <div>
                      <label class="d-flex align-items-center fs-5 fw-bold mb-2">
																		<span class="required">Sell Price</span>
																		<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
																	</label>
                        <input
                          type="text"
                          name="sell"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Short Name"
                          onChange={(e) =>
                            setbuySell({
                              ...buySell,
                              sell: Number(e.target.value),
                            })
                          }
                          value={buySell.sell}
                        />
                      </div>
                    
                      
                      <div>
                        <br/>
                        <button className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidbuySell({ ...buySell })) {
                              isUpdate
                                ? updateBuySell({ ...buySell }).then(
                                    () => {
                                      navigate(
                                        "/master/buysell"
                                      );
                                    }
                                  )
                                : addBuySell({ ...buySell }).then(() => {
                                    navigate(
                                      "/master/buysell"
                                    );
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Buy Sell Prices" : "Add Buy Sell Prices"}
                        </button>
                      </div>
                    </form>
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

export default CurrentRateForm;
