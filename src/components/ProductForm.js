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
import { getClarity } from "../APIs_Hai/Clarity";
import { getColour } from "../APIs_Hai/Colour";
import { getCut } from "../APIs_Hai/Cut";
import { getShape } from "../APIs_Hai/Shape";
import Select from "react-select";
import { getCertificate } from "../APIs_Hai/Certificate";

//================================================================================================================================
const ItemDetailsForm = (props) => {
  let location = useLocation();
  // console.log(location.state);
  let navigate = useNavigate();
  //================================================================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [selectedValue, setSelectedValue] = useState([]);

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
  // console.log("-------->", style);
  //======================================================================
  const [clarity, setClarity] = useState([]);
  useEffect(() => {
    getClarity().then((res) => setClarity(res.data.data.data));
  }, []);
  // console.log("-------->", clarity);
  //======================================================================
  const [colour, setColour] = useState([]);
  useEffect(() => {
    getColour().then((res) => setColour(res.data.data.data));
  }, []);
  // console.log("-------->", colour);
  //======================================================================
  const [cut, setCut] = useState([]);
  useEffect(() => {
    getCut().then((res) => setCut(res.data.data.data));
  }, []);
  // console.log("-------->", cut);
  //======================================================================
  const [shape, setShape] = useState([]);
  useEffect(() => {
    getShape().then((res) => setShape(res.data.data.data));
  }, []);
  // console.log("-------->", shape);
  //======================================================================
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    getCertificate().then((res) => setCertificates(res.data.data.data));
  }, []);
  // console.log("-------->", certificates);
  //======================================================================
  const [purityComposition, setPurityComposition] = useState([
    {
      metalGroup: "",
      weight: "",
    },
  ]);

  const handleFormChange = (index, event) => {
    console.log(event.target.name);
    let data = product.purityComposition;
    data[index][event.target.name] = event.target.value;
    console.log(data[index]);
    setProduct({ ...product, purityComposition: data });
  };

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { metalGroup: "", weight: "" };

    setProduct({
      ...product,
      purityComposition: product.purityComposition.concat([newfield]),
    });
  };

  const removeFields = (e, index) => {
    e.preventDefault();
    let data = product.purityComposition;
    data.splice(index, 1);
    setProduct({ ...product, purityComposition: data });
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
    console.log(event.target.name);
    let data = product.styleComposition;
    data[index][event.target.name] = event.target.value;
    console.log(data[index]);
    setProduct({ ...product, styleComposition: data });
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
    setProduct({
      ...product,
      styleComposition: product.styleComposition.concat([newfield]),
    });

    // setStyleComposition([...styleComposition, newfield]);
  };

  const removeFields1 = (e, index) => {
    e.preventDefault();
    let data = product.styleComposition;
    data.splice(index, 1);
    setProduct({ ...product, styleComposition: data });
  };
  //======================================================================
  const [product, setProduct] = useState(
    location?.state ?? {
      metalGroup: "",
      collections: [],
      category: [],
      variety: [],
      item: "",
      video: "",
      images: "",
      grossWeight: 0,
      sku: "",
      hli: "",
      width: "",
      height: "",
      purityComposition: [],
      styleComposition: [],
    }
  );
  //======================================================================
  const categoryOtions = category.map((x) => {
    return {
      value: x.name,
      label: x.name,
    };
  });
  //---------------------------------------------------------
  const handleCategory = (e) => {
    let arr = [...e.target.selectedOptions].map((x) => {
      return x.value;
    });
    setProduct({
      ...product,
      category: arr,
    });
  };

  //======================================================================
  const varietiesOptions = variety.map((x) => {
    return {
      value: x.name,
      label: x.name,
    };
  });
  //---------------------------------------------------------
  const handleVariety = (e) => {
    let arr = [...e.target.selectedOptions].map((x) => {
      return x.value;
    });
    console.log(arr);
    setProduct({
      ...product,
      variety: arr,
    });
  };

  //======================================================================
  const itemOptions = item.map((x) => {
    return {
      value: x.name,
      label: x.name,
    };
  });
  //---------------------------------------------------------
  const handleItem = (e) => {
    // let arr = [...e.target.selectedOptions].map((x) => {
    //   return x.value;
    // });
    setProduct({
      ...product,
      item: e.target.value,
    });
  };

  //======================================================================
  const collectionNameOptions = collection.map((x) => {
    return {
      value: x.name,
      label: x.name,
    };
  });
  //---------------------------------------------------------
  const handleCollectionName = (e) => {
    let arr = [...e.target.selectedOptions].map((x) => {
   
         return x.value;
    });
    setProduct({
      ...product,
      collections: arr,
    });
  };

  //======================================================================
  // useEffect(() => {
  //   if (location.state) setProduct(location.state);
  // }, [location.state]);
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
                            title="Specify the Metal Group"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          value={product.metalGroup}
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
                            title="Specify The Purity Composition"
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
                                  title="Specify The Purity Composition's Metal Group"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                value={x.metalGroup}
                                name="metalGroup"
                                onChange={(event) =>
                                  handleFormChange(index, event)
                                }
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

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">Weight</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify Purity Composition's Weight"
                                ></i>
                              </label>
                              <input
                                type="number"
                                name="weight"
                                value={x.weight}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter weight"
                                // value={x.weight}
                                onChange={(event) =>
                                  handleFormChange(index, event)
                                }
                              />
                              <button
                                class="btn btn-warning"
                                onClick={removeFields}
                              >
                                Remove
                              </button>
                            </>
                          );
                        })}
                        <button class="btn btn-success" onClick={addFields}>
                          Add More..
                        </button>
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
                                value={x.style}
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
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
                                value={x.weight}
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
                                value={x.clarity}
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {clarity.map((x) => {
                                  return (
                                    <option class="form-control" value={x.name}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                              

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
                                value={x.colour}
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {colour.map((x) => {
                                  return (
                                    <option class="form-control" value={x.name}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>

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
                                name="cut"
                                value={x.cut}
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {cut.map((x) => {
                                  return (
                                    <option class="form-control" value={x.name}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">Certificate</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The Certificate"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                name="certificate"
                                value={x.certificates}
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {certificates.map((x) => {
                                  return (
                                    <option class="form-control" value={x.name}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                                <span class="required">Shape</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The Shape"
                                ></i>
                              </label>
                              <select
                                class="form-control"
                                name="shape"
                                value={x.shape}
                                onChange={(event) =>
                                  handleFormChange1(index, event)
                                }
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                {shape.map((x) => {
                                  return (
                                    <option class="form-control" value={x.name}>
                                      {x.name}
                                    </option>
                                  );
                                })}
                              </select>
                            
                              <button
                                class="btn btn-warning"
                                onClick={removeFields1}
                              >
                                Remove
                              </button>
                            </>
                          );
                        })}
                        <button class="btn btn-success" onClick={addFields1}>
                          Add More..
                        </button>
                      </div>
                      {/* -------------------------------------------=================================================================================== */}
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Collection Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify collection's Name"
                          ></i>
                        </label>
                       
                         <select
                          value={product.collections}
                          multiple
                          name="collections"
                          class="form-control"
                          onChange={handleCollectionName}
                        >
                          {collection.map((x) => (
                            <option
                              selected={product.collections?.includes(x.name)}
                              value={x.name}
                            >
                              {x.name}
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
                            title="Specify the Category"
                          ></i>
                        </label>
                        <select
                          value={product.category}
                          multiple
                          class="form-control"
                          onChange={handleCategory}
                        >
                          {category.map((x) => (
                            <option
                              selected={product.category.includes(x.name)}
                              value={x.name}
                            >
                              {x.name}
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
                          value={product.variety}
                          multiple
                          class="form-control"
                          onChange={handleVariety}
                        >
                          {variety.map((x) => (
                            <option
                              selected={product.variety.includes(x.name)}
                              value={x.name}
                            >
                              {x.name}
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
                          value={product.item}
                          class="form-control"
                          onChange={handleItem}
                        >
                          {item.map((x) => (
                            <option
                              selected={product.item.includes(x.name)}
                              value={x.name}
                            >
                              {x.name}
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
                            title="Specify the Gross Weight"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="grossWeight"
                          value={product.grossWeight}
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Gross Weight"
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
                            title="Specify the Width"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="width"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the Width"
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
                          placeholder="Enter the Height"
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

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Images</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify the Images"
                          ></i>
                        </label>
                        <input
                          type="file"
                          name="images"
                          multiple
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Choose Images"
                          onChange={(e) =>
                            setProduct({
                              ...product,
                              images: e.target.files,
                            })
                          }
                        />
                      </div>

                      {/* <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            console.log(product);
                          }}
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
                </div>
            
              </div>
             
            </div>
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsForm;
