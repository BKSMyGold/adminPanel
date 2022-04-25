import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addMetalGroup = async (metalGroup) =>
  await Axios.post(`${BASE_URL}/api/metal-group`, {
    ...metalGroup,
    metals: ["61b3a54cea31faacc7b3785f"],
  });

export const deleteMetalGroup = async (metalGroupId) => {
  await Axios.delete(`${BASE_URL}/api/metal-group/${metalGroupId}`);
  window.location.reload(false);
};

export const updateMetalGroup = async (metalGroup) =>{
  await Axios.put(`${BASE_URL}/api/metal-group/${metalGroup.id}`, metalGroup);
};
