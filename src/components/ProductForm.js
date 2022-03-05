import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidProduct } from "../Validator";
import { addProduct, updateProduct } from "../apis/products";

const ProductForm = (props) => {
  let location = useLocation();

  let navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [product, setProduct] = useState(
    location?.state ?? {
      name: "",
      images: [],
      video: "",
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
                      {isUpdate ? "Update Product" : "Add Product"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Product" : "Add Product"}
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
                          name="category_name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Product Name"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              name: e.target.value,
                            })
                          }
                          value={product.collection_name}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Product Images</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="images"
                          multiple={true}
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              images: e.target.files,
                            })
                          }
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Product Video</span>
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
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              video: e.target.files[0],
                            })
                          }
                        />
                      </div>

                      <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            if (isValidProduct({ ...product })) {
                              isUpdate
                                ? updateProduct({ ...product }).then(() => {
                                    navigate("/master/product-data/products");
                                  })
                                : addProduct({ ...product }).then(() => {
                                    navigate("/master/product-data/products");
                                  });
                            }
                          }}
                        >
                          {isUpdate ? "Update Product" : "Add Product"}
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

export default ProductForm;
