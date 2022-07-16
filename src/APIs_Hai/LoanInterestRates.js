import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addLoanInterestRates = async (interest) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/badla/create/`,{...interest});
};

export const getLoanInterestRates = async () => {
  return await axios.post(`${ADMIN_API}/admin/badla/list`);   // GET
  
};

export const updateLoanInterestRates = async (interest) => {
  return await axios.put(`${ADMIN_API}/admin/badla/update/${interest.id}`, {...interest}); // PUT
};

export const deleteLoanInterestRates = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/badla/delete/${id}`); // DELETE
  window.location.reload(false);
};