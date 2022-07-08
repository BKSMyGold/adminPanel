import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addItem = async (item) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/item/create/`,{...item});
};

export const getItem = async () => {
  return await axios.post(`${ADMIN_API}/admin/item/list`);   // GET
  
};

export const updateItem = async (item) => {
  return await axios.put(`${ADMIN_API}/admin/item/update/${item.id}`, {...item}); // PUT
};

export const deleteItem = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/item/delete/${id}`); // DELETE
  window.location.reload(false);
};