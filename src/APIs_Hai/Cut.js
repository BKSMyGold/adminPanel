import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCutShape = async (cutShape) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/shape/create/`,{...cutShape});
};

export const getCutShape = async () => {
  return await axios.post(`${ADMIN_API}/admin/shape/list`);   // GET
  
};

export const updateCutShape = async (cutShape) => {
 
  return await axios.put(`${ADMIN_API}/admin/shape/update/${cutShape.id}`, {...cutShape}); // PUT
};

export const deleteCutShape = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/shape/delete/${id}`); // DELETE
  window.location.reload(false);
};