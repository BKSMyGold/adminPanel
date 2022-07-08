import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addColour = async (colour) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/colour/create/`,{...colour});
};

export const getColour = async () => {
  return await axios.post(`${ADMIN_API}/admin/colour/list`);   // GET
  
};

export const updateColour = async (colour) => {
  return await axios.put(`${ADMIN_API}/admin/colour/update/${colour.id}`, {...colour}); // PUT
};

export const deleteColour = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/colour/delete/${id}`); // DELETE
  window.location.reload(false);
};