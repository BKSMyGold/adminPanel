import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCalculation = async (calculation) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/calculation/create/`,{...calculation});
};

export const getCalculation = async () => {
  return await axios.post(`${ADMIN_API}/admin/calculation/list`);   // GET
  
};

export const updateCalculation = async (calculation) => {
  return await axios.put(`${ADMIN_API}/admin/calculation/update/${calculation.id}`, {...calculation}); // PUT
};

export const deleteCalculation = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/calculation/delete/${id}`); // DELETE
  window.location.reload(false);
};