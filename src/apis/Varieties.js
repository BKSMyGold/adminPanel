import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addVariety = (variety) => {
  let formData = new FormData();
  let { variety_name, images, video } = variety;
  
  formData.append("variety_name", variety_name);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  formData.append("video", video);
  return Axios.post(`${BASE_URL}/api/variety/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteVariety = async (varietyID) => {
  await Axios.delete(`${BASE_URL}/api/variety/${varietyID}`);
  window.location.reload(false);
};

export const updateVariety = (variety) =>
  Axios.put(`${BASE_URL}/api/variety/${variety.id}`, variety);

export const getAllVarieties = () => Axios.get(`${BASE_URL}/api/variety/`);
