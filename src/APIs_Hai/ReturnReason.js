import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addReturnReason = async (returnReason) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/returnreason/create/`,{...returnReason});
};

export const getReturnReason = async () => {
  return await axios.post(`${ADMIN_API}/admin/returnreason/list`);   // GET
  
};

export const updateReturnReason = async (returnReason) => {
  return await axios.put(`${ADMIN_API}/admin/returnreason/update/${returnReason.id}`, {...returnReason}); // PUT
};

export const deleteReturnReason = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/returnreason/delete/${id}`); // DELETE
  window.location.reload(false);
};