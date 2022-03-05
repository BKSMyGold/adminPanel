import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidSlider } from "../Validator";
import { addSlider, updateSlider } from "../apis/sliders";
import { getAllOffers } from "../apis/offer";

const SlidersForm = (props) => {
  let location = useLocation();

  let navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [Slider, setSlider] = useState(
    location?.state ?? {
      name: "",
      image: "",
      offerId: "",
    }
  );
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const { data: foundOffers } = await getAllOffers();
      setOffers(foundOffers);
    };
    fetchOffers();
  }, []);

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
                      {isUpdate ? "Update Sliders" : "Add Sliders"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Sliders" : "Add Sliders"}
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
                          <span class="required">Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Slider Name"
                          onChange={(e) =>
                            setSlider({
                              ...Slider,
                              name: e.target.value,
                            })
                          }
                          value={Slider.name}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Slider Image</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="image"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) =>
                            setSlider({
                              ...Slider,
                              image: e.target.files[0],
                            })
                          }
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Select Offer</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          name="offerId"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Sleect Offer Applicable"
                          onChange={(e) =>
                            setSlider({
                              ...Slider,
                              offerId: e.target.value,
                            })
                          }
                        >
                          <option value={""}>Select Offer</option>
                          {offers.map((offer) => (
                            <option value={offer.id}>{offer.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidSlider({ ...Slider })) {
                              isUpdate
                                ? updateSlider({ ...Slider }).then(() => {
                                    navigate("/master/settings/sliders");
                                  })
                                : addSlider({ ...Slider }).then(() => {
                                    navigate("/master/settings/sliders");
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Sliders" : "Add Sliders"}
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

export default SlidersForm;
