import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addMetalGroup = (metalGroup) =>
  Axios.post(`${BASE_URL}/api/metal-group`, {
    ...metalGroup,
    metals: ["61b3a54cea31faacc7b3785f"],
  });

export const deleteMetalGroup = (metalGroupId) =>
  Axios.delete(`${BASE_URL}/api/metal-group/${metalGroupId}`);

export const updateMetalGroup = (metalGroup) =>
  Axios.put(`${BASE_URL}/api/metal-group/${metalGroup.id}`, metalGroup);
