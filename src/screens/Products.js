import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Dashboard from "./dashboard";
import axios from "axios";
import { getProduct, deleteProduct } from "../APIs_Hai/Product";
import { Link } from "react-router-dom";
import DeleteSpinner from "../delete";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

//===========================================================================================================
const ItemDetails = (props) => {
  //===========================================================================================================
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(false);
  let perma = new Set(props.user.role.permissions.map((x) => x));

  //===========================================================================================================
  useEffect(() => {
    setLoader(true);
    getProduct().then((res) => {
      return setProduct(res.data.data.data), setLoader(false);
    });
  }, []);
  console.log(product);

  //====================================================================
  const [open, setOpen] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: "-3px 0px 10px black",
    p: 4,
  };

  //====================================================================

  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <Header />
          <Dashboard createLink="/master/product-data/products/add" />
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
                    <span class="card-label fw-bolder fs-3 mb-1">Product</span>
                    <span class="text-muted mt-1 fw-bold fs-7">
                      Define a Product
                    </span>
                  </h3>
                </div>
                {/*end::Header*/}
                {/*begin::Body*/}
                <div class="card-body py-3">
                  {/*begin::Table container*/}
                  <div class="table-responsive">
                    {/*begin::Table*/}
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      {/*begin::Table head*/}
                      <thead>
                        <tr class="fw-bolder text-muted text-center">
                          <th class="min-w-150px" colspan="1">
                            Product ID
                          </th>
                          <th class="min-w-120px">Collection</th>
                          <th class="min-w-120px">Category</th>
                          <th class="min-w-120px">Variety</th>
                          <th class="min-w-120px">Item</th>
                          <th class="min-w-120px">Gross Weight</th>
                          <th class="min-w-120px">SKU</th>
                          <th class="min-w-120px">HLI</th>
                          <th class="min-w-120px">Width</th>
                          <th class="min-w-120px">Height</th>
                          <th class="min-w-120px" scope="colgroup">
                            Style Composition
                          </th>
                          <th class="min-w-120px">Purity Composition</th>
                          <th class="min-w-120px">Description</th>
                          <th class="min-w-120px">Video</th>
                          <th class="min-w-120px">Image</th>

                          <th class="min-w-100px text-center">Actions</th>
                        </tr>
                        {/* <tr class="fw-bolder text-muted text-center">
                          <th class="min-w-150px">1</th>
                          <th class="min-w-150px">2</th>
                          <th class="min-w-120px">3</th>
                          <th class="min-w-120px">4</th>
                          <th class="min-w-120px">5</th>
                          <th class="min-w-120px">6</th>
                          <th class="min-w-120px">7</th>
                          <th class="min-w-120px">8</th>
                          <th class="min-w-120px">9</th>
                          <th class="min-w-120px">10</th>
                          <th >Clarity</th>
                          <th >Colour</th>
                          <th >Cut</th>
                          <th >shape</th>
                          <th >Style</th>
                          <th >Weight</th>
                          <th >Purity Composition</th>
                        </tr> */}
                      </thead>

                      <tbody>
                        {loader ? (
                          <Box
                            sx={{
                              display: "flex",
                           
                            }}
                          >
                            <CircularProgress />
                          </Box>
                        ) : (
                          product?.map((itemDetail) => (
                            <tr class="fw-bolder text-center">
                              <td>{itemDetail.id}</td>
                              <td>
                                {itemDetail.collections.map((x) => (
                                  <td>{x},</td>
                                ))}
                              </td>
                              <td>
                                {itemDetail.category.map((x) => {
                                  return <td>{x}</td>;
                                })}
                              </td>
                              <td>
                                {itemDetail.variety.map((x) => {
                                  return <td>{x},</td>;
                                })}
                              </td>
                              <td>{itemDetail.item}</td>
                              <td>{itemDetail.grossWeight} gm</td>
                              <td>{itemDetail.sku}</td>
                              <td>{itemDetail.hli}</td>
                              <td>{itemDetail.width} mm</td>
                              <td>{itemDetail.height} mm</td>
                              <td class="bg-dark text-light">
                                {itemDetail.styleComposition.map((x) => {
                                  return (
                                    <tr>
                                      CLarity:
                                      <td> {x.clarity}</td>
                                      Colour:
                                      <td>{x.colour}</td>
                                      Cut:
                                      <td>{x.cut}</td>
                                      Shape:
                                      <td>{x.shape}</td>
                                      Style:
                                      <td>{x.style}</td>
                                      Weight:
                                      <td>{x.weight} gm</td>
                                    </tr>
                                  );
                                })}
                              </td>
                              <td class="bg-dark text-light">
                                {itemDetail.purityComposition.map((x) => {
                                  return (
                                    <tr>
                                      Metal_Group:
                                      <td>{x.metalGroup}</td>
                                      Weight :<td>{x.weight}gm</td>
                                    </tr>
                                  );
                                })}
                              </td>
                              <td>
                                <Button
                                  onClick={() =>
                                    setOpen(itemDetail.description)
                                  }
                                >
                                  Product Description
                                </Button>
                              </td>
                              <td>
                                <a target="_blank" href={itemDetail.video}>
                                  video
                                </a>
                              </td>
                              <td>
                                {itemDetail.images.map((x) => (
                                  <img class="h-100px w-100px" src={x} />
                                ))}
                              </td>

                              <td>
                                <Link
                                  to={"/master/product-data/products/edit"}
                                  state={itemDetail}
                                >
                                  <span class="svg-icon svg-icon-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        opacity="0.3"
                                        d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                </Link>

                                {perma.has("delete_product") ? (
                                  <DeleteSpinner
                                    collection={itemDetail}
                                    deleting={deleteProduct}
                                    url={"/master/product-data/products/"}
                                  />
                                ) : null}
                              </td>
                            </tr>
                          ))
                        )}
                        <Modal
                          open={!!open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Description
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              {open}
                            </Typography>
                          </Box>
                        </Modal>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                    {/*end::Table*/}
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

export default ItemDetails;
