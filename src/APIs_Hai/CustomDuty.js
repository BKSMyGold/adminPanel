import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCustomDuty = async (customduty) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/customduty/create/`,{...customduty});
};

export const getCustomDuty = async () => {
  return await axios.post(`${ADMIN_API}/admin/customduty/list`);   // GET
  
};

export const updateCustomDuty = async (customduty) => {
  return await axios.put(`${ADMIN_API}/admin/customduty/update/${customduty.id}`, {...customduty}); // PUT
};

export const deleteCustomDuty = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/customduty/delete/${id}`); // DELETE
  window.location.reload(false);
};