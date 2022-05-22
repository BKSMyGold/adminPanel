import Axios from "axios";
import { BASE_URL } from "../Constants";
//=====================================================

export const addMetalGroup = async (metalGroup) =>
  await Axios.post(`${BASE_URL}/api/metal-group`, {
    ...metalGroup,
    metals: ["61b3a54cea31faacc7b3785f"],
  });
//=====================================================

export const deleteMetalGroup = async (metalGroupId) => {
  await Axios.delete(`${BASE_URL}/api/metal-group/${metalGroupId}`);
  window.location.reload(false);
};
//=====================================================

export const updateMetalGroup =  (metalGroup) => {
  console.log("--> metalGroup", metalGroup);
  // let formData = new FormData();
  let { karatage, fineness, shortName, referenceId, id } = metalGroup;


  let data = {
    metals :["60f7175a17e5034f9a64a5ec"],
    karatage,
    fineness,
    shortName,
    referenceId

    
  };
  
  // let data = {
  //   metals :["60f7175a17e5034f9a64a5ec"],
  //   metalGroup
    
  // };
  
  // formData.append("karatage", karatage);
  // formData.append("fineness", fineness);
  // formData.append("referenceId", referenceId);
  // formData.append("shortName", shortName);

  return  Axios.put(`${BASE_URL}/api/metal-group/${metalGroup.id}`, data


  );
};
// =====================================================
