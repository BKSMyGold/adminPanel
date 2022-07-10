import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidCyclePeriod } from "../Validator";
import { addCyclePeriod, updateCyclePeriod } from "../apis/CyclePeriod";
import AddUpdateSpinner from "../AddUpdateSpinner";
// import { getAllItems } from "../apis/items";
// import { getAllDiamonds } from "../apis/Diamonds";
import axios from "axios";
import { BASE_URL } from "../Constants";
// import { additemdetails } from "../apis/itemdetails";
// import Select from "react-select";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getCollection } from "../APIs_Hai/Collection";
import { getCategory } from "../APIs_Hai/Category";
import { getVariety } from "../APIs_Hai/Variety";
import { getItem } from "../APIs_Hai/Item";
import { addProduct, updateProduct } from "../APIs_Hai/Product";
import { getMetalGroup } from "../APIs_Hai/MetalGroup";
import { getStyle } from "../APIs_Hai/Style";
import {getClarity} from "../APIs_Hai/Clarity"
import {getColour} from "../APIs_Hai/Colour"
import {getCut} from "../APIs_Hai/Cut"
import {getShape} from "../APIs_Hai/Shape"
//================================================================================================================================
const ItemDetailsForm = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  //================================================================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  // const [selectedValue, setSelectedValue] = useState([]);

  // const [product, setProduct] = useState(
  //   location?.state ?? {
  //     collectionName: "",
  //     category: [],
  //     variety: [],
  //     item: "",
  //     video: "",
  //     grossWeight: 0,
  //     sku: "",
  //     hli: "",
  //     width: "",
  //     height: "",
  //     purityComposition,
  //     styleComposition
  //   }
  // );

  const [collection, setCollection] = useState([]);
  useEffect(() => {
    getCollection().then((res) => setCollection(res.data.data.data));
  }, []);

  //======================================================================
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory().then((res) => setCategory(res.data.data.data));
  }, []);

  //======================================================================
  const [variety, setVariety] = useState([]);
  useEffect(() => {
    getVariety().then((res) => setVariety(res.data.data.data));
  }, []);

  //======================================================================
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem().then((res) => setItem(res.data.data.data));
  }, []);

  //======================================================================
  const [metalGroup, setMetalGroup] = useState([]);
  useEffect(() => {
    getMetalGroup().then((res) => setMetalGroup(res.data.data.data));
  }, []);
  //======================================================================
  const [style, setStyle] = useState([]);
  useEffect(() => {
    getStyle().then((res) => setStyle(res.data.data.data));
  }, []);
  console.log("-------->",style)
  //======================================================================
  const [clarity, setClarity] = useState([]);
  useEffect(() => {
    getClarity().then((res) => setClarity(res.data.data.data));
  }, []);
  console.log("-------->",clarity)
  //======================================================================
  const [colour, setColour] = useState([]);
  useEffect(() => {
    getColour().then((res) => setColour(res.data.data.data));
  }, []);
  console.log("-------->",colour)
  //======================================================================
  const [cut, setCut] = useState([]);
  useEffect(() => {
    getCut().then((res) => setCut(res.data.data.data));
  }, []);
  console.log("-------->",cut)
  //======================================================================
  const [shape, setShape] = useState([]);
  useEffect(() => {
    getShape().then((res) => setShape(res.data.data.data));
  }, []);
  console.log("-------->",shape)
  //======================================================================
  const [purityComposition, setPurityComposition] = useState([
    {
      metalGroup: "",
      weight: "",
    },
  ]);

  const handleFormChange = (index, event) => {
    console.log(event.target.name)
    let data = product.purityComposition;
    data[index][event.target.name] = event.target.value;
    console.log(data[index])
    setProduct({...product,purityComposition:data});
  };

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { metalGroup: "", weight: "" };

    setProduct({...product, purityComposition:product.purityComposition.concat([newfield])});
  };

  const removeFields = (e, index) => {
    e.preventDefault();
    let data = product.purityComposition;
    data.splice(index, 1);
    setProduct({...product, purityComposition:data});
  };

  //======================================================================
  //======================================================================
  const [styleComposition, setStyleComposition] = useState([
    {
      style: "",
      weight: 0,
      clarity: "",
      colour: "",
      cut: "",
      shape: "",
    },
  ]);

  const handleFormChange1 = (index, event) => {
        console.log(event.target.name)
        let data = product.styleComposition;
    data[index][event.target.name] = event.target.value;
    console.log(data[index])
    setProduct({...product,styleComposition:data});
    // setStyleComposition(data);
  };

  const addFields1 = (e) => {
    e.preventDefault();
    let newfield = {
      style: "",
      weight: 0,
      clarity: "",
      colour: "",
      cut: "",
      shape: "",
    };
    setProduct({...product, styleComposition:product.styleComposition.concat([newfield])});

    // setStyleComposition([...styleComposition, newfield]);
  };

  const removeFields1 = (e, index) => {
    e.preventDefault();
    let data = product.styleComposition;
    data.splice(index, 1);
    setProduct({...product, styleComposition:data});
  };
  //======================================================================
  const [product, setProduct] = useState(
    location?.state ?? {
      metalGroup:"",
      collectionName: "",
      category: [],
      variety: [],
      item: "",
      video: "",
      grossWeight: 0,
      sku: "",
      hli: "",
      width: "",
      height: "",
      purityComposition : [],
      styleComposition : []
    }
  );
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
                      {isUpdate
                        ? "Update Product Details"
                        : "Add Product Details"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate
                        ? "Update Product Details"
                        : "Add Product Details"}
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
                          <span class="required">Metal Group</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Type"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              metalGroup: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {metalGroup.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>


{/* --------------------------------------- Purity Composition ----------------------------------------------  */}
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Purity Composition</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify The Metal Group"
                          ></i>
                        </label>
                        {product.purityComposition.map((x, index) => {
                          return (
                            <>
                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">Metal Group</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The Metal Group"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                // value={x.metalGroup}
                                name="metalGroup"
                                onChange={(event) =>
                                  handleFormChange(index, event)}
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {metalGroup.map((x) => {
                                  return (
                                    <option class="form-control" value={x.id}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <input
                                type="text"
                                name="metalGroup"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter MetalGroup"
                                value={x.metalGroup}
                                onChange={(event) =>
                                  handleFormChange(index, event)
                                }
                              /> */}
                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">Weight</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The SKU"
                                ></i>
                              </label>
                              <input
                                type="number"
                                name="weight"
                                value={purityComposition.weight}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter weight"
                                // value={x.weight}
                                onChange={(event) =>
                                  handleFormChange(index, event)
                                }
                              />
                              <button class ="btn btn-warning" onClick={removeFields}>Remove</button>
                            </>
                          );
                        })}
                        <button class="btn btn-success" onClick={addFields}>Add More..</button>
                      </div>
{/* --------------------------------------- Style Composition ----------------------------------------------  */}

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Style Composition</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify The Style composition"
                          ></i>
                        </label>
                        {product.styleComposition.map((x, index) => {
                          return (
                            <>
                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">Style</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The style"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                name="style"
                                onChange={(event) =>
                                  handleFormChange1(index, event)}
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {style.map((x) => {
                                  return (
                                    <option class="form-control" value={x.id}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <input
                                type="text"
                                name="metalGroup"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Style"
                                value={x.style}
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              /> */}
                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">Weight</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The Weight"
                                ></i>
                              </label>
                              <input
                                type="number"
                                name="weight"
                                value={styleComposition.weight}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter weight"
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              />

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">clarity</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The clarity"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                name="clarity"
                                onChange={(event) =>
                                  handleFormChange1(index, event)}
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {clarity.map((x) => {
                                  return (
                                    <option class="form-control" value={x.id}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <input
                                type="text"
                                name="clarity"
                                value={x.clarity}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter clarity"
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              /> */}

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">colour</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The colour"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                name="colour"

                                onChange={(event) =>
                                  handleFormChange1(index, event)}
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {colour.map((x) => {
                                  return (
                                    <option class="form-control" value={x.id}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <input
                                type="text"
                                name="colour"
                                value={x.colour}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter colour"
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              /> */}

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">cut</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The cut"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                name = "cut"
                                onChange={(event) =>
                                  handleFormChange1(index, event)}
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {cut.map((x) => {
                                  return (
                                    <option class="form-control" value={x.id}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <input
                                type="text"
                                name="cut"
                                value={x.cut}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter cut"
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              /> */}

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">shape</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The shape"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                name="shape"
                                onChange={(event) =>
                                  handleFormChange1(index, event)}
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {shape.map((x) => {
                                  return (
                                    <option class="form-control" value={x.id}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                              {/* <input
                                type="text"
                                name="shape"
                                value={x.shape}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter shape"
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              /> */}
                              <button class ="btn btn-warning" onClick={removeFields1}>Remove</button>
                            </>
                          );
                        })}
                        <button class="btn btn-success" onClick={addFields1}>Add More..</button>
                      </div>
{/* -------------------------------------------=================================================================================== */}
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Collection Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify collectionName"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="collectionName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) => {
                            setProduct({
                              ...product,
                              collectionName: e.target.value,
                            });
                          }}
                        >
                          <option className="form-control">____</option>
                          {collection &&
                            collection.map((da) => (
                              <option value={da.name} className="form-control">
                                {da.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Category</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          multiple
                          name="category"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Category"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              category: [e.target.value],
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {category &&
                            category.map((da) => (
                              <option value={da.name} className="form-control">
                                {da.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Variety</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify variety"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="variety"
                          multiple
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Variety"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              variety: [e.target.value],
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {variety &&
                            variety.map((da) => (
                              <option value={da.name} className="form-control">
                                {da.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Item</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Item"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              item: e.target.value,
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {item &&
                            item.map((da) => (
                              <option value={da.name} className="form-control">
                                {da.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Gross Weight</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="grossWeight"
                          value ={product.grossWeight}
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter gross weight"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              grossWeight: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">SKU</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify The SKU"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="sku"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter SKU"
                          value={product.sku}
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              sku: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">HLI</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the HLI"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="hli"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter HLI"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              hli: e.target.value,
                            })
                          }
                          value={product.hli}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Width</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="width"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter width"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              width: e.target.value,
                            })
                          }
                          value={product.width}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Height</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Height"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="height"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Ring Size"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              height: e.target.value,
                            })
                          }
                          value={product.height}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Video</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the video"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="video"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose Video"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              video: e.target.files,
                            })
                          }
                        />
                      </div>

                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Measurements</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="cycle"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Measurements"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              measurements: e.target.value,
                            })
                          }
                          value={itemDetails.measurements}
                        />
                      </div> */}

                      {/* <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e)=>{
                            e.preventDefault()
                            console.log(product)

                          }
                          }
                        >
                          {isUpdate
                            ? "Update Item Details"
                            : "Add Item Details"}
                        </button>
                      </div> */}

                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={product}
                        adding={addProduct}
                        updating={updateProduct}
                        url={"/master/product-data/products"}
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

export default ItemDetailsForm;
