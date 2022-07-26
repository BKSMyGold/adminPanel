import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addPolicy = async (policy) => {  
    // let {title,description,consignmentRequired} = policy 
    // let data = {title, description,consignmentRequired:Boolean(consignmentRequired)} 
    await axios.post(`${ADMIN_API}/admin/policy/create/`,{...policy});
};

export const getPolicy = async () => {
  return await axios.post(`${ADMIN_API}/admin/policy/list`);   // GET
  
};

export const updatePolicy = async (policy) => {
  return await axios.put(`${ADMIN_API}/admin/policy/update/${policy.id}`, {...policy}); // PUT
};

export const deletePolicy = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/policy/delete/${id}`); // DELETE
  window.location.reload(false);
};