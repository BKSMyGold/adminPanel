import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addOrnament = async (ornament) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/ornament/create/`,{...ornament});
};

export const getOrnament = async () => {
  return await axios.post(`${ADMIN_API}/admin/ornament/list`);   // GET
  
};

export const updateOrnament = async (ornament) => {
 
  return await axios.put(`${ADMIN_API}/admin/ornament/update/${ornament.id}`, {...ornament}); // PUT
};

export const deleteOrnament = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/ornament/delete/${id}`); // DELETE
  window.location.reload(false);
};
