import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addoffer = (offer) =>
  Axios.post(`${BASE_URL}/api/offer/`, {
    ...offer,
  });

export const deleteoffer = (offerID) =>
  Axios.delete(`${BASE_URL}/api/offer/${offerID}`);

export const updateoffer = (offer) =>
  Axios.put(`${BASE_URL}/api/offer/${offer.id}`, offer);

export const getAllOffers = () => Axios.get(`${BASE_URL}/api/offer/`);

export const getOfferByID = (offerID) =>
  Axios.get(`${BASE_URL}/api/offer/${offerID}`);
