import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addItem = (item) => {
  let formData = new FormData();
  let { name, images, video } = item;
  formData.append("name", name);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  formData.append("video", video);
  return Axios.post(`${BASE_URL}/api/item/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteItem = async (itemID) => {
  await Axios.delete(`${BASE_URL}/api/item/${itemID}`);
  window.location.reload(false);
};
export const updateItem = (item) =>
  Axios.put(`${BASE_URL}/api/item/${item.id}`, item);

export const getAllItems = () => Axios.get(`${BASE_URL}/api/item/`);
