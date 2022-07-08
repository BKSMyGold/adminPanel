import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addClarity = async (clarity) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/clarity/create/`,{...clarity});
};

export const getClarity = async () => {
  return await axios.post(`${ADMIN_API}/admin/clarity/list`);   // GET
  
};

export const updateClarity = async (clarity) => {
  return await axios.put(`${ADMIN_API}/admin/clarity/update/${clarity.id}`, {...clarity}); // PUT
};

export const deleteClarity = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/clarity/delete/${id}`); // DELETE
  window.location.reload(false);
};