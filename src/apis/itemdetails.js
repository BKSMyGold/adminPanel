import Axios from "axios";
import { BASE_URL } from "../Constants";

export const additemdetails = (itemdetails) =>
  Axios.post(`${BASE_URL}/api/itemdetails/`, {
    ...itemdetails,
  });

export const deleteitemdetails = (itemdetailsID) =>
  Axios.delete(`${BASE_URL}/api/itemdetails/${itemdetailsID}`);

export const updateitemdetails= (itemdetails) =>
  Axios.put(`${BASE_URL}/api/itemdetails/${itemdetails.id}`, itemdetails);
