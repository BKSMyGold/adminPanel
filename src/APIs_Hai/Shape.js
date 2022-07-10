import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addShape = async (shape) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/shape/create/`,{...shape});
};

export const getShape = async () => {
  return await axios.post(`${ADMIN_API}/admin/shape/list`);   // GET
  
};

export const updateShape = async (shape) => {
 
  return await axios.put(`${ADMIN_API}/admin/shape/update/${shape.id}`, {...shape}); // PUT
};

export const deleteShape = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/shape/delete/${id}`); // DELETE
  window.location.reload(false);
};