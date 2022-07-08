import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCategory = async (category) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/category/create/`,{...category});
};

export const getCategory = async () => {
  return await axios.post(`${ADMIN_API}/admin/category/list`);   // GET
  
};

export const updateCategory = async (category) => {
  return await axios.put(`${ADMIN_API}/admin/category/update/${category.id}`, {...category}); // PUT
};

export const deleteCategory = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/category/delete/${id}`); // DELETE
  window.location.reload(false);
};