import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidCollection } from "../Validator";
import axios from "axios";
import { addVideo, updateVideo } from "../APIs_Hai/Video";
import AddUpdateSpinner from "../AddUpdateSpinner";
//=====================================================================
const HowToForm = (props) => {
  //=====================================================================
  let location = useLocation();
  let navigate = useNavigate();
  //=====================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [howTo, setHowTo] = useState(
    location?.state ?? {
      title: "",
      language: "",
      category: "",
      video: [],
    }
  );
  //=====================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* <Dashboard/> */}
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
                      {isUpdate ? "Update How To" : "Add How To"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update How To" : "Add How To"}
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
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Title</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Title of the Video"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Title of the Video"
                          onChange={(e) =>
                            setHowTo({
                              ...howTo,
                              title: e.target.value,
                            })
                          }
                          value={howTo.title}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Language</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Language of the Video"
                          ></i>
                        </label>

                        <select
                          type="text"
                          name="language"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Language"
                          defaultValue={howTo.language}
                          onChange={(e) =>
                            setHowTo({
                              ...howTo,
                              language: e.target.value,
                            })
                          }
                        >
                          <option>__Choose Language__</option>
                          <option value="hindi">Hindi</option>
                          <option value="english">English</option>
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Category</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Category of the Video"
                          ></i>
                        </label>
                        <select
                          type="text"
                          name="category"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Category"
                          defaultValue={howTo.category}
                          onChange={(e) =>
                            setHowTo({
                              ...howTo,
                              category: e.target.value,
                            })
                          }
                        >
                          <option>__Choose Category__</option>
                          <option value="testimonial">Testimonials</option>
                          <option value="how_to">How To</option>
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">How To Video</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Upload the Video"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="video"
                          className="form-control form-control-lg form-control-solid mb-5"
                          placeholder="Choose File"
                          defaultValue={howTo.video}
                          onChange={(e) => {
                            setHowTo({
                              ...howTo,
                              video: e.target.files[0],
                            });
                          }}
                        />
                      </div>

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={howTo}
                        adding={addVideo}
                        updating={updateVideo}
                        url={"/master/settings/how-to-videos"}
                      />
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

export default HowToForm;
