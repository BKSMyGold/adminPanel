import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addDiamond = (diamond) =>
  Axios.post(`${BASE_URL}/api/diamond/`, {
    ...diamond,
  });

export const deleteDiamond = (diamondID) =>
  Axios.delete(`${BASE_URL}/api/diamond/${diamondID}`);

export const updateDiamond = (diamond) =>
  Axios.put(`${BASE_URL}/api/diamond/${diamond.id}`, diamond);

export const getAllDiamonds = () => Axios.get(`${BASE_URL}/api/diamond`);
