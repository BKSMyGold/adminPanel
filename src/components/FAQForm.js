import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { addFAQ, updateFAQ } from "../APIs_Hai/FAQ";
//===================================================================================
const FAQForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [faq, setFaq] = useState(
    location?.state ?? {
      answer: "",
      question: "",
    }
  );
  //===================================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* < Dashboard /> */}
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
                      {isUpdate ? "Update FAQ" : "Add FAQ"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update FAQ" : "Add FAQ"}
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
                          <span class="required"> FAQ Question</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the clarity"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="question"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter FAQ Question"
                          onChange={(e) =>
                            setFaq({
                              ...faq,
                              question: e.target.value,
                            })
                          }
                          value={faq.question}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">FAQ Answer</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the FAQ Answer"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="answer"
                          className="form-control form-control-lg form-control-solid mb-5"
                          placeholder="Enter FAQ Answer"
                          onChange={(e) =>
                            setFaq({
                              ...faq,
                              answer: e.target.value,
                            })
                          }
                          value={faq.answer}
                        />
                      </div>
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={faq}
                        adding={addFAQ}
                        updating={updateFAQ}
                        url={"/master/faq/"}
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

export default FAQForm;
