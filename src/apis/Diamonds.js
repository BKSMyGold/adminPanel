import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addDiamond = (diamond) =>
  Axios.post(`${BASE_URL}/api/diamond/`, {
    ...diamond,
  });

export const deleteDiamond = async(diamondID) => {
  await Axios.delete(`${BASE_URL}/api/diamond/${diamondID}`);
  window.location.reload(false);
};

export const updateDiamond = (diamond) =>
  Axios.put(`${BASE_URL}/api/diamond/${diamond.id}`, diamond);

export const getAllDiamonds = () => Axios.get(`${BASE_URL}/api/diamond`);
