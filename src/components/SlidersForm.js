import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidSlider } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { getCollection } from "../APIs_Hai/Collection"
import { getCategory } from "../APIs_Hai/Category"
import { getVariety } from "../APIs_Hai/Variety"
import { getItem } from "../APIs_Hai/Item"
import { addSlider, updateSlider } from "../APIs_Hai/Slider";
//======================================================================
const SlidersForm = (props) => {
  //======================================================================
  let location = useLocation();
  let navigate = useNavigate();
  //======================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  const [Slider, setSlider] = useState(
    location?.state ?? {
      name: "",
      type: "",
      subType: "",
      image: []
    }
  );
  //======================================================================
  const [collection, setCollection] = useState([])
  useEffect(() => {
    getCollection().then(res => setCollection(res.data.data.data))

  }, []);
  let collectionName = []
  collectionName = collection.map(x => {
    return (x.name)
  })
  //======================================================================
  const [category, setCategory] = useState([])
  useEffect(() => {

    getCategory().then(res => setCategory(res.data.data.data))

  }, []);
  let categoryName = []
  categoryName = category.map(x => {
    return (x.name)
  })
  //======================================================================
  const [variety, setVariety] = useState([])
  useEffect(() => {

    getVariety().then(res => setVariety(res.data.data.data))

  }, []);
  let varietyName = []
  varietyName = variety.map(x => {
    return (x.name)
  })
  //======================================================================
  const [item, setItem] = useState([])
  useEffect(() => {
    getItem().then(res => setItem(res.data.data.data))


  }, []);
  let itemName = []
  itemName = item.map(x => {
    return (x.name)
  })
  //======================================================================
  console.log(collectionName)
  console.log(categoryName)

  console.log(varietyName)
  console.log(itemName)
  //======================================================================

  let type = [
    {
      name: "collection",
      value: collectionName
    },
    {
      name: "category",
      value: categoryName
    },
    {
      name: "variety",
      value: varietyName
    },
    {
      name: "item",
      value: itemName
    },
  ]
  //======================================================================
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
                            setSlider({
                              ...Slider,
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
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
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
                            setSlider({
                              ...Slider,
                              subType: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {collectionName.map((x) => {
                            if(Slider.type === "collection"){

                              return (
                                <option class="form-control" value={x.name}>
                                  {x}
                                </option>
                              );
                            }
                          })}
                            {categoryName.map((x) => {
                            if(Slider.type === "category"){

                              return (
                                <option class="form-control" value={x.name}>
                                  {x}
                                </option>
                              );
                            }
                          })}
                            {varietyName.map((x) => {
                            if(Slider.type === "variety"){

                              return (
                                <option class="form-control" value={x.name}>
                                  {x}
                                </option>
                              );
                            }
                          })}
                            {itemName.map((x) => {
                            if(Slider.type === "item"){

                              return (
                                <option class="form-control" value={x.name}>
                                  {x}
                                </option>
                              );
                            }
                          })}
                        </select>
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

                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Slider Image</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="image"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose File"
                          onChange={(e) =>
                            setSlider({
                              ...Slider,
                              image: e.target.value,
                            })
                          }
                        />
                      </div> */}

                      {/* <button
                      onClick={(e)=>{
                        e.preventDefault();
                        console.log(Slider)}}
                      >Click me </button> */}

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={Slider}
                        adding={addSlider}
                        updating={updateSlider}
                        url={"/master/settings/sliders/"}
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

export default SlidersForm;
