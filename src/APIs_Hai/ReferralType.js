import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addReferralType = async (referral) => {
  // let { userType, referredBonus, min, max, criteria } = referral;
  // let data = {
  //   userType,
  //   referredBonus,
  //   joiningBonus: {
  //     min,
  //     max,
  //   },
  //   criteria,
  // };
  await axios.post(`${ADMIN_API}/admin/referraltype/create/`, referral);
};

export const getReferralType = async () => {
  const response = await axios.post(`${ADMIN_API}/admin/referralType/list`); // GET
  return response;
};

export const updateReferralType = async (referral) => {
  // let { userType, referredBonus, min, max, criteria } = referral;
  // let data = {
  //   userType,
  //   referredBonus,
  //   joiningBonus: {
  //     min,
  //     max,
  //   },
  //   criteria,
  // };
  return await axios.put(
    `${ADMIN_API}/admin/referralType/update/${referral.id}`,
    referral
  ); // PUT
};

export const deleteReferralType = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/referralType/delete/${id}`); // DELETE
  window.location.reload(false);
};
