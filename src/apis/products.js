import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addProduct = (product) => {
  let formData = new FormData();
  let { name, images, video } = product;
  formData.append("name", name);
  formData.append("images", images);
  formData.append("video", video);
  return Axios.post(`${BASE_URL}/api/product/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProduct = (productID) =>
  Axios.delete(`${BASE_URL}/api/product/${productID}`);

export const updateProduct = (product) =>
  Axios.put(`${BASE_URL}/api/product/${product.id}`, product);

export const getAllProducts = () => Axios.get(`${BASE_URL}/api/product`);
