import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addCategory = (category) => {
  let formData = new FormData();
  let { category_name, images, video } = category;
  formData.append("category_name", category_name);
  formData.append("images", images);
  formData.append("video", video);
  return Axios.post(`${BASE_URL}/api/category/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteCategory = (categoryID) =>
  Axios.delete(`${BASE_URL}/api/category/${categoryID}`);

export const updateCategory = (category) =>
  Axios.put(`${BASE_URL}/api/category/${category.id}`, category);
