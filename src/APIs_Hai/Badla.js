import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addBadla = async (badla) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/badla/create/`,{...badla});
};

export const getBadla = async () => {
  return await axios.post(`${ADMIN_API}/admin/badla/list`);   // GET
  
};

export const updateBadla = async (badla) => {
  return await axios.put(`${ADMIN_API}/admin/badla/update/${badla.id}`, {...badla}); // PUT
};

export const deleteBadla = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/badla/delete/${id}`); // DELETE
  window.location.reload(false);
};