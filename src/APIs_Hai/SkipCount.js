import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addSkipCount = async (skipCount) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/skipCount/create/`,{...skipCount});
};

export const getSkipCount = async () => {
  return await axios.post(`${ADMIN_API}/admin/skipCount/list`);   // GET
  
};

export const updateSkipCount = async (skipCount) => {
  return await axios.put(`${ADMIN_API}/admin/skipCount/update/${skipCount.id}`, {...skipCount}); // PUT
};

export const deleteSkipCount = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/skipCount/delete/${id}`); // DELETE
  window.location.reload(false);
};