import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addReferralType = async (referral) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/referraltype/create/`,referral);
};

export const getReferralType = async () => {
  const response = await axios.post(`${ADMIN_API}/admin/referraltype/list`);   // GET
  return response;
};

export const updateReferralType = async (referral) => {
  return await axios.put(`${ADMIN_API}/admin/referraltype/update/${referral.id}`, data); // PUT
};

export const deleteReferralType = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/referraltype/delete/${id}`); // DELETE
  window.location.reload(false);
};
