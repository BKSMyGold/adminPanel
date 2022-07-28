import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidOffer } from "../Validator";
import { getAllProducts } from "../apis/products";
import { getAllVarieties } from "../apis/Varieties";
import { getAllItems } from "../apis/items";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { getCollection } from "../APIs_Hai/Collection";
import { getCategory } from "../APIs_Hai/Category";
import { getVariety } from "../APIs_Hai/Variety";
import { getItem } from "../APIs_Hai/Item";
import { addSlider, updateSlider } from "../APIs_Hai/Slider";
import { addOffer, updateOffer } from "../APIs_Hai/Offer";
//==================================================================
const OffersForm = (props) => {
  //==================================================================
  let location = useLocation();
  let navigate = useNavigate();
  //==================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [offer, setOffer] = useState(
    location?.state ?? {
      name: "",
      type: "",
      typeId: "",
      value: 0,
      valueType: "",
      image: [],
    }
  );

  //======================================================================
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    getCollection().then((res) => setCollection(res.data.data.data));
  }, []);
  let collectionName = [];
  collectionName = collection.map((x) => {
    return x.name;
  });
  //======================================================================
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory().then((res) => setCategory(res.data.data.data));
  }, []);
  let categoryName = [];
  categoryName = category.map((x) => {
    return x.name;
  });
  //======================================================================
  const [variety, setVariety] = useState([]);
  useEffect(() => {
    getVariety().then((res) => setVariety(res.data.data.data));
  }, []);
  let varietyName = [];
  varietyName = variety.map((x) => {
    return x.name;
  });
  //======================================================================
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem().then((res) => setItem(res.data.data.data));
  }, []);
  let itemName = [];
  itemName = item.map((x) => {
    return x.name;
  });

  //==================================================================
  let type = [
    {
      name: "collection",
      value: collectionName,
    },
    {
      name: "category",
      value: categoryName,
    },
    {
      name: "variety",
      value: varietyName,
    },
    {
      name: "item",
      value: itemName,
    },
  ];
  //==================================================================
  // const [items, setItems] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [varieties, setVarieties] = useState([]);

  // useEffect(() => {
  //   switch (offer.type) {
  //     case "product":
  //       getAllProducts().then(({ data: foundProducts }) =>
  //         setProducts(foundProducts)
  //       );
  //       break;
  //     case "variety":
  //       getAllVarieties().then(({ data: { varieties: foundVarieties } }) =>
  //         setVarieties(foundVarieties)
  //       );
  //       break;
  //     case "item":
  //       getAllItems().then(({ data: foundItems }) => setItems(foundItems));
  //       break;
  //     default:
  //       break;
  //   }
  // }, [offer.type]);
  //==================================================================
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          {/* <Dashboard /> */}
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
                      {isUpdate ? "Update Offers" : "Add Offers"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Offers" : "Add Offers"}
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
                          <span class="required">Offer Name</span>
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
                          placeholder="Enter Offer Name"
                          onChange={(e) =>
                            setOffer({
                              ...offer,
                              name: e.target.value,
                            })
                          }
                          value={offer.name}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Type"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setOffer({
                              ...offer,
                              type: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {type.map((x) => {
                            return (
                              <option class="form-control" value={x.name}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Type ID</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Type"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setOffer({
                              ...offer,
                              typeId: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {collection.map((x) => {
                            if (offer.type === "collection") {
                              return (
                                <option class="form-control" value={x.id}>
                                  {x.name}
                                </option>
                              );
                            }
                          })}
                          {category.map((x) => {
                            if (offer.type === "category") {
                              return (
                                <option class="form-control" value={x.id}>
                                  {x.name}
                                </option>
                              );
                            }
                          })}
                          {variety.map((x) => {
                            if (offer.type === "variety") {
                              return (
                                <option class="form-control" value={x.id}>
                                  {x.name}
                                </option>
                              );
                            }
                          })}
                          {item.map((x) => {
                            if (offer.type === "item") {
                              return (
                                <option class="form-control" value={x.id}>
                                  {x.name}
                                </option>
                              );
                            }
                          })}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Value </span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="value"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter value Name"
                          onChange={(e) =>
                            setOffer({
                              ...offer,
                              value: Number(e.target.value),
                            })
                          }
                          value={offer.value}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Value Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="valueType"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter valueType"
                          onChange={(e) =>
                            setOffer({
                              ...offer,
                              valueType: e.target.value,
                            })
                          }
                          value={offer.valueType}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Offer Image</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="image"
                          className="form-control form-control-lg form-control-solid mb-5"
                          placeholder="Choose File"
                          onChange={(e) => {
                            setOffer({
                              ...offer,
                              image: e.target.files,
                            });
                          }}
                        />
                      </div>

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={offer}
                        adding={addOffer}
                        updating={updateOffer}
                        url={"/master/product-data/offers"}
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

export default OffersForm;
