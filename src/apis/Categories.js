import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addCategory = (category) => {
  let formData = new FormData();
  let { category_name, images, video } = category;
  formData.append("category_name", category_name);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  formData.append("video", video);
  return Axios.post(`${BASE_URL}/api/category/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCategory = async (categoryID) => {
  await Axios.delete(`${BASE_URL}/api/category/${categoryID}`);
  window.location.reload(false);
};

export const updateCategory = (category) =>
  Axios.put(`${BASE_URL}/api/category/${category.id}`, category);
