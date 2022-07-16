import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addSellRequest = async (sellrequest) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/sellrequest/create/`,{...sellrequest});
};

export const getSellRequest = async () => {
  return await axios.post(`${ADMIN_API}/admin/sellrequest/list`);   // GET
  
};

export const updateSellRequest = async (sellrequest) => {
  return await axios.put(`${ADMIN_API}/admin/sellrequest/update/${sellrequest.id}`, {...sellrequest}); // PUT
};

export const deleteSellRequest = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/sellrequest/delete/${id}`); // DELETE
  window.location.reload(false);
};