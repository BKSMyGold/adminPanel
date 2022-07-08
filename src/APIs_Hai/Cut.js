import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCutShape = async (ornament) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/shape/create/`,{...ornament});
};

export const getCutShape = async () => {
  return await axios.post(`${ADMIN_API}/admin/shape/list`);   // GET
  
};

export const updateCutShape = async (ornament) => {
 
  return await axios.put(`${ADMIN_API}/admin/shape/update/${ornament.id}`, {...ornament}); // PUT
};

export const deleteCutShape = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/shape/delete/${id}`); // DELETE
  window.location.reload(false);
};
