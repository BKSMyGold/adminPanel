import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addcharge = (charge) =>
  Axios.post(`${BASE_URL}/api/calculation/`, {
    ...charge,
    status: "Active",
  });

export const deletecharge = (chargeID) =>
  Axios.delete(`${BASE_URL}/api/calculation/${chargeID}`);

export const updatecharge= (charge) =>
  Axios.put(`${BASE_URL}/api/calculation/${charge.id}`, charge);
