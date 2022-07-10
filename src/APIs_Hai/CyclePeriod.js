import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCyclePeriod = async (cycleperiod) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/cycleperiod/create/`,{...cycleperiod});
};

export const getCyclePeriod = async () => {
  return await axios.post(`${ADMIN_API}/admin/cycleperiod/list`);   // GET
  
};

export const updateCyclePeriod = async (cycleperiod) => {
  return await axios.put(`${ADMIN_API}/admin/cycleperiod/update/${cycleperiod.id}`, {...cycleperiod}); // PUT
};

export const deleteCyclePeriod = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/cycleperiod/delete/${id}`); // DELETE
  window.location.reload(false);
};