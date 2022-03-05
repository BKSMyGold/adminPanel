import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addItem = (item) =>
  Axios.post(`${BASE_URL}/api/item/`, {
    ...item,
  });

export const deleteItem = (itemID) =>
  Axios.delete(`${BASE_URL}/api/item/${itemID}`);

export const updateItem = (item) =>
  Axios.put(`${BASE_URL}/api/item/${item.id}`, item);

export const getAllItems = () => Axios.get(`${BASE_URL}/api/item/`);
