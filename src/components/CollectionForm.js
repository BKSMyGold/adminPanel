import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidCollection } from "../Validator";
import { addcollection, updatecollection } from "../apis/Collections";
import AddUpdateSpinner from "../AddUpdateSpinner";

const CollectionForm = (props) => {
  //==========================================================
  let location = useLocation();
  let navigate = useNavigate();
  //==========================================================
  // const [open, setOpen] = React.useState(false);
  
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  // const [isUpdate, setIsUpdate] = useState(true );

  const [Collection, setCollection] = useState(
    location?.state ?? {
      category_name: "",
      images: [],
      video: "",
    }
  );
  //==========================================================
  // const spinn = () => {
  //   setOpen((prev) => ({
  //     ...prev,
  //     open: !prev.open,
  //   }));
  //   console.log('===> hi',open)
  // };
  //==========================================================

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
                      {isUpdate ? "Update Collection" : "Add Collection"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Collection" : "Add Collection"}
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
                        {/* {isUpdate ? __ : __} */}
                        <input
                          type="text"
                          name="category_name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Collection Name"
                          onChange={(e) =>
                            setCollection({
                              ...Collection,
                              name: e.target.value,
                            })
                          }
                          value={Collection.name}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Collection Images</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="images"
                          multiple="multiple"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) => {
                            setCollection({
                              ...Collection,
                              images: e.target.files,
                            });
                          }}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Collection Video</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="video"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) => {
                            setCollection({
                              ...Collection,
                              video: e.target.files[0],
                            });
                          }}
                        />
                      </div>

                      <div>
                        <br />
                        {/* <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();

                            

                            isUpdate
                              ? updatecollection({ ...Collection }).then(() => {
                                  navigate("/master/product-data/collections");
                                })
                              :
                               addcollection({ ...Collection })
                              .then(
                                  () => {
                                   console.log('====> adding')
                                    navigate(
                                      "/master/product-data/collections"
                                    );
                                  }
                                );
                          }}
                        >
                          {isUpdate ? "Update Collection" : "Add Collection"}
                        </button> */}
                        
                        <AddUpdateSpinner 
                        update = {isUpdate ? true : false}
                        collection = {Collection}
                        adding = {addcollection}
                        updating = {updatecollection}
                        url = {"/master/product-data/collections"}
                        />
                       
                        
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

export default CollectionForm;
