import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addPlan = async (plan) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/plan/create/`,{...plan});
};

export const getPlan = async () => {
  return await axios.post(`${ADMIN_API}/admin/plan/list`);   // GET
  
};

export const updatePlan = async (plan) => {
  return await axios.put(`${ADMIN_API}/admin/plan/update/${plan.id}`, {...plan}); // PUT
};

export const deletePlan = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/plan/delete/${id}`); // DELETE
  window.location.reload(false);
};