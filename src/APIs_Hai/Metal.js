import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addAllMetal = async (metal) => {                           // POST
   await axios.post(`${ADMIN_API}/admin/metal/create`,{...metal});
};

export const getAllMetal = async () => {
  const response = await axios.post(`${ADMIN_API}/admin/metal/list`);   // GET
  return response;
};

export const updateMetal = async (metal) => {
  return await axios.put(`${ADMIN_API}/admin/metal/update/${metal.id}`, metal); // PUT
};

export const deleteMetal = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/metal/delete/${id}`); // DELETE
  window.location.reload(false);
};
