import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidCyclePeriod } from "../Validator";
import { addCyclePeriod, updateCyclePeriod } from "../apis/CyclePeriod";
import AddUpdateSpinner from "../AddUpdateSpinner";
import { getAllItems } from "../apis/items";
import { getAllDiamonds } from "../apis/Diamonds";
import axios from "axios";
import { BASE_URL } from "../Constants";
import { additemdetails } from "../apis/itemdetails";
// import Select from "react-select";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
//================================================================================================================================
const ItemDetailsForm = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  //================================================================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);

  const [selectedValue, setSelectedValue] = useState([]);

  const [itemDetails, setItemDetails] = useState(
    location?.state ?? {
      item: "",
      composition: [
        {
          diamond: "",
          metalGroup: "",
          weight: "",
        },
      ],
      collections: "",
      category: "",
      variety: "",
      product: "",
      grossweight: "",
      description: "",
      SKU: "",
      units: "",
      ringsize: "",
      measurements: "",
    //   charge: [],
    }
  );

  const [item, setItem] = useState([]);
  const [diamond, setDiamond] = useState([]);
  const [metalGroup, setMetalGroup] = useState([]);
  const [collections, setCollections] = useState([]);
  const [category, setCategory] = useState([]);
  const [variety, setVariety] = useState([]);
  const [product, setProduct] = useState([]);
  const [charges, setCharges] = useState([]);
  
  let  charge= []

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  //================================================================================================================================
  useEffect(() => {
    const fetchItem = () => {
      getAllItems().then((res) => setItem(res.data));
    };
    fetchItem();
  }, []);
  //   console.log("Item====>", item);

  //================================================================================================================================
  useEffect(() => {
    const fetchDiamond = () => {
      getAllDiamonds().then((res) => setDiamond(res.data));
    };
    fetchDiamond();
  }, []);
  //   console.log("Diamond====>", diamond);

  //================================================================================================================================
  useEffect(() => {
    const fetchMetalGroup = () => {
      axios
        .get(`${BASE_URL}/api/metal-group`)
        .then((res) => setMetalGroup(res.data));
    };
    fetchMetalGroup();
  }, []);
  //   console.log("metalGroup ====>", metalGroup);

  //================================================================================================================================
  useEffect(() => {
    const fetchCollection = () => {
      axios
        .get(`${BASE_URL}/api/collection`)
        .then((res) => setCollections(res.data));
    };
    fetchCollection();
  }, []);
  //   console.log("collections====>", collections);

  //================================================================================================================================
  useEffect(() => {
    const fetchCategory = () => {
      axios
        .get(`${BASE_URL}/api/category`)
        .then((res) => setCategory(res.data));
    };
    fetchCategory();
  }, []);
  //   console.log("category====>", category);

  //================================================================================================================================
  useEffect(() => {
    const fetchVariety = () => {
      axios.get(`${BASE_URL}/api/variety`).then((res) => setVariety(res.data));
    };
    fetchVariety();
  }, []);
  //   console.log("variety====>", variety);

  //================================================================================================================================
  useEffect(() => {
    const fetchProduct = () => {
      axios.get(`${BASE_URL}/api/product`).then((res) => setProduct(res.data));
    };
    fetchProduct();
  }, []);
  //   console.log("product  ====>", product);

  //================================================================================================================================
  useEffect(() => {
    const fetchCharges = () => {
      axios
        .get(`${BASE_URL}/api/calculation`)
        .then((res) => setCharges(res.data.data));
    };
    fetchCharges();
  }, []);
//   console.log("Charges  ====>", charges);

  //================================================================================================================================
  function handleSubmit(e) {
    e.preventDefault();
    let {
      item,
      diamond,
      metalGroup,
      weight,
      collections,
      category,
      variety,
      product,
      grossweight,
      description,
      SKU,
      units,
      ringsize,
      measurements,
    //   charge,
    } = itemDetails;
    let obj = {};
    obj = {
      item: item,
      composition: [
        {
          diamond: diamond,
          metalGroup: metalGroup,
          weight: weight,
        },
      ],
      collections: collections,
      category: category,
      variety: variety,
      product: product,
      grossweight: grossweight,
      description: description,
      SKU: SKU,
      units: units,
      ringsize: ringsize,
      measurements: measurements,
      charges: charge,
    };
    //   axios.post(`${BASE_URL}/api/itemdetails`,obj).then(navigate("/transaction/products/ItemDetails/"))
    console.log("payload would be  ==>", obj);
  }

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
                      {isUpdate ? "Update Items Details" : "Add Item Details"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate ? "Update Items Details" : "Add Items Details"}
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
                          <span class="required">Item</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) => {
                            setItemDetails({
                              ...itemDetails,
                              item: e.target.value,
                            });
                          }}
                        >
                          <option className="form-control">____</option>
                          {item &&
                            item.map((da) => (
                              <option value={da.id} className="form-control">
                                {da.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">diamond</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              diamond: e.target.value,
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {diamond &&
                            diamond.map((da) => (
                              <option value={da.id} className="form-control">
                                {da.shape}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">metalGroup</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              metalGroup: e.target.value,
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {metalGroup &&
                            metalGroup.map((da) => (
                              <option value={da.id} className="form-control">
                                {da.shortName}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">collections</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              collections: e.target.value,
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {collections &&
                            collections.map((da) => (
                              <option value={da.id} className="form-control">
                                {da.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">category</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              category: e.target.value,
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {category &&
                            category.map((da) => (
                              <option value={da.id} className="form-control">
                                {da.category_name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">variety</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              variety: e.target.value,
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {variety &&
                            variety.map((da) => (
                              <option value={da.id} className="form-control">
                                {da.name}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">product</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <select
                          type="select"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              product: e.target.value,
                            })
                          }
                        >
                          <option className="form-control">____</option>
                          {product &&
                            product.map((da) => (
                              <option value={da.id} className="form-control">
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
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Cycle Period Name"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              grossweight: Number(e.target.value),
                            })
                          }
                          value={itemDetails.grossweight}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Item Description</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="graceperiod"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Grace Period in Hours"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              description: e.target.value,
                            })
                          }
                          value={itemDetails.description}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">SKU</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="minValue"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Minimum Value in INR"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              SKU: e.target.value,
                            })
                          }
                          value={itemDetails.SKU}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Units</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="minWeight"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Minimum Weight in GRAM"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              units: Number(e.target.value),
                            })
                          }
                          value={itemDetails.units}
                        />
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Ring Size</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="shortName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Short Name"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              ringsize: e.target.value,
                            })
                          }
                          value={itemDetails.ringsize}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Weight</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>
                        <input
                          type="text"
                          name="shortName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter Short Name"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              weight: e.target.value,
                            })
                          }
                          value={itemDetails.weight}
                        />
                      </div>
                      <div>
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
                          placeholder="Enter the minimum Recurring Cycle"
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              measurements: e.target.value,
                            })
                          }
                          value={itemDetails.measurements}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Charges</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify your unique app name"
                          ></i>
                        </label>

                        <select
                          multiple
                          size={4}
                        
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Select Item"
                          onChange={(e) =>{

                            
                                  
                                charge.push(e.target.value)
                       
                        // console.log(e.target.value)
                        }
                           
                            } 
                        // onChange={(e)=>{

                        //     setCharge([
                        //         ...charge,
                        //              e.target.value
                        //      ] )
                        //     }
                                    
                                    // setCharge(charge:e.target.value)
                                    // console.log(e.target.value)
                                
                                
                                
                        
                          
                        >
                          {charges &&
                            charges.map((da) => (
                              <option name ='mult' value={da.id} className="form-control">
                                {da.Type}
                              </option>
                            ))}
                        </select>

                        {/* <Autocomplete
                          multiple
                          options={charges.map((da) => da.Type)}
                          value = {chargeValue}
                          defaultValue={charges.find(v => v.label[0])} 
                          style={{ width: 500 }}
                          // defaultValue={[myOptions[3]]}
                          getOptionLabel={(option) => option}
                          onChange={(e) =>
                            setItemDetails({
                              ...itemDetails,
                              charge: e.target.value,
                            })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Choose Multiple values"
                              variant="standard"
                              placeholder="Your Favourites"
                            />
                          )}
                        /> */}
                      </div>

                      <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={
                            // e.preventDefault();
                            // if (isValidCyclePeriod({ ...CyclePeriod })) {
                            //   isUpdate
                            //     ? updateCyclePeriod({ ...CyclePeriod }).then(
                            //         () => {
                            //           navigate(
                            //             "/master/plans/cycle-periods"
                            //           );
                            //         }
                            //       )
                            //     : addCyclePeriod({ ...CyclePeriod }).then(() => {
                            //         navigate(
                            //           "/master/plans/cycle-periods"
                            //         );
                            //       });
                            // }
                            handleSubmit
                          }
                        >
                          {isUpdate
                            ? "Update Cycle Periods"
                            : "Add Cycle Periods"}
                        </button>
                      </div>
                      {/* 
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={itemDetails}
                        adding={addCyclePeriod}
                        updating={updateCyclePeriod}
                        url={"/master/plans/cycle-periods"}
                      /> */}
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
