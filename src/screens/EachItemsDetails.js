import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../Constants";
//===========================================================================================================
const EachItemsDetails = () => {
  //===========================================================================================================
  const [data, setData] = useState([]);

  const location = useLocation();
  const item = location.state;
  console.log("========>", item.name);
  //===========================================================================================================

  useEffect(() => {
    const fetchItemDetails = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/itemdetails`);

      setData(data.data);
    };
    fetchItemDetails();
  }, []);
  console.log("isko karna hai ===>", data);
  //==================================================================================================================================

  let itemData = "";
  itemData = data.map((da) => {
    if (da.item.id == item.id) {
      return da;
    }
  });

  console.log("mil gaya ====:>", itemData);
  //===========================================================================================================

  return (
    <>
      <Header />
      <Dashboard />
      {itemData.map((item) => {
        if (item !== undefined) {
          return (
            <div class="container mb-5">
              <div>
                {item.item.images.map((image) => {
                  image ? (
                    <img class="product-imitation w-200px" src={image} />
                  ) : (
                    <img
                      class="product-imitation w-400px"
                      src="https://4.imimg.com/data4/AJ/WE/MY-23163465/gold-necklace-500x500.jpg"
                    />
                  );
                })}
                {/* <img
                    class="product-imitation w-200px"
                    src="https://4.imimg.com/data4/AJ/WE/MY-23163465/gold-necklace-500x500.jpg"
                  /> */}
              </div>

              <div class="row">
                <div class="col-md-3">
                  <div class="ibox">
                    <div class="ibox-content product-box w-900px">
                      <div class="product-desc">
                        {item.totalAmount ? (
                          <span class="product-price">
                            ₹ {item.totalAmount}
                          </span>
                        ) : (
                          <span class="product-price">₹ 00.00</span>
                        )}
                        <table style={{ width: "75%" }}>
                          <tr>
                            <th class="text-muted">Item Name</th>
                            <td class="badge text-light bg-dark">
                              {item.item.name}
                            </td>
                          </tr>
                          <tr>
                            <th class="text-muted">SKU</th>
                            <td class="badge text-light bg-dark">{item.SKU}</td>
                          </tr>
                          <tr>
                            <th class="text-muted">Description</th>
                            <td class="badge text-light bg-dark">
                              {item.description}
                            </td>
                          </tr>
                          <tr>
                            <th class="text-muted">Gross Weight</th>
                            <td class="badge text-light bg-dark">
                              {item.grossweight} gm
                            </td>
                          </tr>
                          <tr>
                            <th class="text-muted">Measurements</th>
                            <td class="badge text-light bg-dark">
                              {item.measurements}
                            </td>
                          </tr>
                          <tr>
                            <th class="text-muted">Ring Size</th>
                            <td class="badge text-light bg-dark">
                              {item.ringsize}
                            </td>
                          </tr>
                          <tr>
                            <th class="text-muted">Units Left</th>
                            <td class="badge text-light bg-dark">
                              {item.units}
                            </td>
                          </tr>

                          <tr>
                            <th class="text-muted">Charges</th>

                            {item.charges.map((charge) => {
                              return (
                                <td class="badge text-light bg-dark">
                                  {charge.Type}
                                </td>
                              );
                            })}
                          </tr>
                          <tr>
                            <th class="text-muted">Charge Percentage</th>

                            {item.charges.map((charge) => {
                              return (
                                <td class="badge text-light bg-dark">
                                  {charge.Percentage} %
                                </td>
                              );
                            })}
                          </tr>
                          <tr>
                            <th class="text-muted">Certify Authority</th>
                            {item.composition.map((comp) => {
                              return (
                                <td class="badge text-light bg-dark">
                                  {comp.diamond.certify_authority}
                                </td>
                              );
                            })}
                          </tr>
                          <tr>
                            <th class="text-muted">Weight</th>
                            {item.composition.map((comp) => {
                              return (
                                <td class="badge text-light bg-dark">
                                  {comp.weight} gm
                                </td>
                              );
                            })}
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* else (
      <div class="container mb-5">
        <img
          class="product-imitation w-200px"
          src="https://4.imimg.com/data4/AJ/WE/MY-23163465/gold-necklace-500x500.jpg"
        />

        <div class="row">
          <div class="col-md-3">
            <div class="ibox">
              <div class="ibox-content product-box w-900px">
                <div class="product-desc">
                  <span class="product-price">₹ 00.00</span>

                  <table style={{ width: "75%" }}>
                    <tr>
                      <th class="text-muted">Item Name</th>
                      <td class="badge text-light bg-dark"></td>
                    </tr>
                    <tr>
                      <th class="text-muted">SKU</th>
                      <td class="badge text-light bg-dark"></td>
                    </tr>
                    <tr>
                      <th class="text-muted">Description</th>
                      <td class="badge text-light bg-dark"></td>
                    </tr>
                    <tr>
                      <th class="text-muted">Gross Weight</th>
                      <td class="badge text-light bg-dark">gm</td>
                    </tr>
                    <tr>
                      <th class="text-muted">Measurements</th>
                      <td class="badge text-light bg-dark"></td>
                    </tr>
                    <tr>
                      <th class="text-muted">Ring Size</th>
                      <td class="badge text-light bg-dark"></td>
                    </tr>
                    <tr>
                      <th class="text-muted">Units Left</th>
                      <td class="badge text-light bg-dark"></td>
                    </tr>

                    <tr>
                      <th class="text-muted">Charges</th>

                      <td class="badge text-light bg-dark"></td>
                    </tr>
                    <tr>
                      <th class="text-muted">Charge Percentage</th>

                      <td class="badge text-light bg-dark">%</td>
                    </tr>
                    <tr>
                      <th class="text-muted">Certify Authority</th>

                      <td class="badge text-light bg-dark"></td>
                    </tr>
                    <tr>
                      <th class="text-muted">Weight</th>

                      <td class="badge text-light bg-dark">gm</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ); */}
    </>
  );
};

export default EachItemsDetails;
