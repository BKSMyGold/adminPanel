import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCollection = async (colllection) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/collection/create/`,{...colllection});
};

export const getCollection = async () => {
  return await axios.post(`${ADMIN_API}/admin/collection/list`);   // GET
  
};

export const updateCollection = async (colllection) => {
  return await axios.put(`${ADMIN_API}/admin/collection/update/${colllection.id}`, {...colllection}); // PUT
};

export const deleteCollection = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/collection/delete/${id}`); // DELETE
  window.location.reload(false);
};