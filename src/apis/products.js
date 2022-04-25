import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addProduct = (product) => {
  let formData = new FormData();
  let { name, images, video } = product;
  formData.append("name", name);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  formData.append("video", video);
  return Axios.post(`${BASE_URL}/api/product/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProduct = async (productID) => {
  await Axios.delete(`${BASE_URL}/api/product/${productID}`);
  window.location.reload(false);
};

export const updateProduct = (product) =>
  Axios.put(`${BASE_URL}/api/product/${product.id}`, product);

export const getAllProducts = () => Axios.get(`${BASE_URL}/api/product`);
