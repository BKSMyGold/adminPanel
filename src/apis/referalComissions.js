import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addCategory = (category) =>
  Axios.post(`${BASE_URL}/api/category/`, {
    ...category,
  });

export const deleteCategory = (categoryID) =>
  Axios.delete(`${BASE_URL}/api/category/${categoryID}`);

export const updateCategory= (category) =>
  Axios.put(`${BASE_URL}/api/category/${category.id}`, category);
