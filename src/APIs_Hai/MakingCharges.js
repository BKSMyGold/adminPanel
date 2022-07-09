import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addMakingCharges = async (makingCharges) => {
  let { supplierName,
    variety,
    item,
    metalId,
    fromWeight,
    toWeight,
    rateType,
    rate } = makingCharges 
    
    let data = { supplierName,
      variety,
      item,
      metalId,
      fromWeight:Number(fromWeight),
      toWeight: Number(toWeight),
      rateType,
      rate: Number(rate) }
  await axios.post(`${ADMIN_API}/admin/makingcharge/create/`, data);
};

export const getMakingCharges = async () => {
  return await axios.post(`${ADMIN_API}/admin/makingcharge/list`);   // GET

};

export const updateMakingCharges = async (makingCharges) => {
  return await axios.put(`${ADMIN_API}/admin/makingcharge/update/${makingCharges.id}`, { ...makingCharges }); // PUT
};

export const deleteMakingCharges = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/makingcharge/delete/${id}`); // DELETE
  window.location.reload(false);
};