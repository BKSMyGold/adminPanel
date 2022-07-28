import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Dashboard from "../screens/dashboard";
import { isValidMetalGroup } from "../Validator";
import AddUpdateSpinner from "../AddUpdateSpinner";
import MakingCharges from "../screens/MakingCharges";
import {
  addMakingCharges,
  updateMakingCharges,
} from "../APIs_Hai/MakingCharges";
import { getAllMetal } from "../APIs_Hai/Metal";
import { getItem } from "../APIs_Hai/Item";
import { getVariety } from "../APIs_Hai/Variety";
import { getSupplier } from "../APIs_Hai/Supplier";
import { getProductType } from "../APIs_Hai/ProductType";
import { getMetalGroup } from "../APIs_Hai/MetalGroup";
//===================================================================================
const MakingChargesForm = (props) => {
  //===================================================================================
  let location = useLocation();
  console.log(location.state);
  let navigate = useNavigate();
  //===================================================================================
  const [isUpdate, setIsUpdate] = useState(location?.state ? true : false);
  //===================================================================================

  const [rates, setRates] = useState([
    {
      fromWeight: 0,
      toWeight: 0,
      rateType: "",
      rate: 0,
    },
  ]);

  const handleRates = (index, event) => {
    console.log(event.target.name);
    let data = makingCharges.rates;
    data[index][event.target.name] = event.target.value;
    console.log(data[index]);
    setMakingCharges({ ...makingCharges, rates: data });
    // setStyleComposition(data);
  };

  const addFields = (e) => {
    e.preventDefault();
    let newfield = {
      fromWeight: 0,
      toWeight: 0,
      rateType: "",
      rate: 0,
    };
    setMakingCharges({
      ...makingCharges,
      rates: makingCharges.rates.concat([newfield]),
    });
  };

  const removeFields = (e, index) => {
    e.preventDefault();
    let data = makingCharges.rates;
    data.splice(index, 1);
    setMakingCharges({ ...makingCharges, rates: data });
  };
  //======================================================================

  //===================================================================================
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem().then((res) => setItem(res.data.data.data));
  }, []);
  //===================================================================================
  const [variety, setVariety] = useState([]);
  useEffect(() => {
    getVariety().then((res) => setVariety(res.data.data.data));
  }, []);

  //===================================================================================
  const [supplier, setSupplier] = useState([]);
  useEffect(() => {
    getSupplier().then((res) => setSupplier(res.data.data.data));
  }, []);
  //===================================================================================
  const [product_Type, setProductType] = useState([]);
  useEffect(() => {
    getProductType().then((res) => setProductType(res.data.data.data));
  }, []);
  //===================================================================================
  const [metal_Group, setMetalGroup] = useState([]);
  useEffect(() => {
    getMetalGroup().then((res) => setMetalGroup(res.data.data.data));
  }, []);
  console.log(metal_Group);
  //===================================================================================
  const [makingCharges, setMakingCharges] = useState(
    location?.state ?? {
      supplier: "",
      variety: "",
      item: "",
      productType: "",
      metalGroup: "",
      rates: [],
    }
  );
  useEffect(() => {
    if (location.state) {
      setMakingCharges(location.state);
    }
  }, []);
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
                      {isUpdate
                        ? "Update Making Charges"
                        : "Add Making Charges"}
                    </span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      {isUpdate
                        ? "Update Making Charges"
                        : "Add Making Charges"}
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
                          <span class="required">Supplier Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Name of the Supplier"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          name="supplier"
                          value={makingCharges.supplier.id}
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              supplier: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {supplier.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Variety Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Variety"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          name="variety"
                          value={makingCharges.variety}
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              variety: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {variety.map((x) => {
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
                          <span class="required">Item Name</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Item"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          value={makingCharges.item}
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              item: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {item.map((x) => {
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
                          <span class="required">Product Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Product Type"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                    
                          value={makingCharges.productType._id}
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              productType: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {product_Type.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                                {x.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Metal Group ID</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Choose the Metal Group ID"
                          ></i>
                        </label>
                        <select
                          class="form-control"
                          value={makingCharges.metalGroup._id}
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              metalGroup: e.target.value,
                            })
                          }
                        >
                          <option class="form-control">Select option</option>;
                          {metal_Group.map((x) => {
                            return (
                              <option class="form-control" value={x.id}>
                                {x.shortName} {x.metal.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {/* --------------------------------------- Rates ----------------------------------------------  */}
                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                          <span class="required">Rates</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Specify Rates"
                          ></i>
                        </label>
                        {makingCharges.rates.map((x, index) => {
                          return (
                            <>
                              <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                                <span class="required">From Weight</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The From Weight"
                                ></i>
                              </label>
                              <input
                                class="form-control"
                                type="number"
                                value={x.fromWeight}

                                name="fromWeight"
                                onChange={(event) => handleRates(index, event)}
                              />

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                                <span class="required">To Weight</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify The From Weight"
                                ></i>
                              </label>
                              <input
                                class="form-control"
                                type="number"
                                value={x.toWeight}

                                name="toWeight"
                                onChange={(event) => handleRates(index, event)}
                              />

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                                <span class="required">Rate</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify Purity Composition's Weight"
                                ></i>
                              </label>
                              <input
                                type="number"
                                name="rate"
                                value={x.rate}
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Rate"
                                onChange={(event) => handleRates(index, event)}
                              />

                              <label class="d-flex align-items-center fs-5 fw-bold mb-2 mt-5">
                                <span class="required">Rate Type</span>
                                <i
                                  class="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Enter the Name of the type of  rate type"
                                ></i>
                              </label>
                              <select
                                class="form-control mb-5"
                                name="rateType"
                                value={x.rateType}
                                onChange={(event) => handleRates(index, event)}
                              >
                                <option class="form-control">
                                  Select option
                                </option>
                                ;
                                <option class="form-control" value="net_weight">
                                  Net Weight
                                </option>
                                ;
                                <option
                                  class="form-control"
                                  value="gross_weight"
                                >
                                  Gross Weight
                                </option>
                                ;
                                <option class="form-control" value="per_piece">
                                  Per Piece
                                </option>
                                ;
                                <option class="form-control" value="fixed">
                                  Fixed
                                </option>
                                ;
                                <option
                                  class="form-control"
                                  value="net_weight_percentage"
                                >
                                  Net Weight Percentage
                                </option>
                                ;
                                <option
                                  class="form-control"
                                  value="gross_weight_percentage"
                                >
                                  Gross Weight Percentage
                                </option>
                                ;
                              </select>

                              <button
                                class="btn btn-warning mb-5 mx-3"
                                onClick={removeFields}
                              >
                                Remove
                              </button>
                            </>
                          );
                        })}
                        <button class="btn btn-success mb-5" onClick={addFields}>
                          Add More..
                        </button>
                      </div>

                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">From Weight</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Supplier"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="fromWeight"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter from weight"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              rates: [
                                ...makingCharges.rates,
                                {
                                  fromWeight: e.target.value,
                                },
                              ],
                            })
                          }
                          value={makingCharges.fromWeight}
                        />
                      </div>

                      <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">To Weight</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the Name of the Supplier"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="toWeight"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter from weight"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              rates: [
                                {
                                  toWeight: e.target.value,
                                },
                              ],
                            })
                          }
                          value={makingCharges.toWeight}
                        />
                      </div> */}

                      {/* <div>
                        <label class="d-flex align-items-center fs-5 fw-bold mb-2">
                          <span class="required">Value of Rate Type</span>
                          <i
                            class="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            title="Enter the rate type"
                          ></i>
                        </label>
                        <input
                          type="number"
                          name="rate"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Enter the value of Rate Type"
                          onChange={(e) =>
                            setMakingCharges({
                              ...makingCharges,
                              rates: [
                                {
                                  rate: e.target.value,
                                },
                              ],
                            })
                          }
                          value={makingCharges.rate}
                        />
                      </div> */}

                      {/* <div>
                        <br />
                        <button
                          className="btn btn-lg btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            isUpdate
                              ? console.log({ ...makingCharges })
                              : console.log({ ...makingCharges });
                          }}
                        >
                          {isUpdate
                            ? "Update Making charges"
                            : "Add Making charges"}
                        </button>
                      </div> */}
                      <AddUpdateSpinner
                        update={isUpdate ? true : false}
                        collection={makingCharges}
                        adding={addMakingCharges}
                        updating={updateMakingCharges}
                        url={"/master/product-data/making-charges/"}
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

export default MakingChargesForm;
