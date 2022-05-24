  import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addoffer = (offer) => {
  let formData = new FormData();
  let { name, images, typeId, type } = offer;
  formData.append("name", name);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  formData.append("typeId", typeId);
  formData.append("type", type);

  return Axios.post(`${BASE_URL}/api/offer/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteoffer = (offerID) =>
  Axios.delete(`${BASE_URL}/api/offer/${offerID}`);

export const updateoffer = (offer) =>
  Axios.put(`${BASE_URL}/api/offer/${offer.id}`, offer);

export const getAllOffers = () => Axios.get(`${BASE_URL}/api/offer/`);

export const getOfferByID = (offerID) =>
  Axios.get(`${BASE_URL}/api/offer/${offerID}`);
