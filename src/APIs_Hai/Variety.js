import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addVariety = async (variety) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/variety/create/`,{...variety});
};

export const getVariety = async () => {
  return await axios.post(`${ADMIN_API}/admin/variety/list`);   // GET
  
};

export const updateVariety = async (variety) => {
  return await axios.put(`${ADMIN_API}/admin/variety/update/${variety.id}`, {...variety}); // PUT
};

export const deleteVariety = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/variety/delete/${id}`); // DELETE
  window.location.reload(false);
};