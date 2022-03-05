import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addVariety = (variety) => {
  let formData = new FormData();
  let { variety_name, images, video } = variety;
  formData.append("variety_name", variety_name);
  formData.append("images", images);
  formData.append("video", video);
  return Axios.post(`${BASE_URL}/api/variety/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteVariety = (varietyID) =>
  Axios.delete(`${BASE_URL}/api/variety/${varietyID}`);

export const updateVariety = (variety) =>
  Axios.put(`${BASE_URL}/api/variety/${variety.id}`, variety);

export const getAllVarieties = () => Axios.get(`${BASE_URL}/api/variety/`);
