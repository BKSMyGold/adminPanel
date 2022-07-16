import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addUnpaidSkipCount = async (UnpaidSkipCount) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/UnpaidSkipCount/create/`,{...UnpaidSkipCount});
};

export const getUnpaidSkipCount = async () => {
  return await axios.post(`${ADMIN_API}/admin/skipCount/list`);   // GET
  
};

export const updateUnpaidSkipCount = async (UnpaidSkipCount) => {
  return await axios.put(`${ADMIN_API}/admin/UnpaidSkipCount/update/${UnpaidSkipCount.id}`, {...UnpaidSkipCount}); // PUT
};

export const deleteUnpaidSkipCount = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/UnpaidSkipCount/delete/${id}`); // DELETE
  window.location.reload(false);
};