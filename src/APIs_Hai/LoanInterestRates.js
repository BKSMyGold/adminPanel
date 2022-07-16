import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addLoanInterestRates = async (interest) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/loaninterest/create/`,{...interest});
};

export const getLoanInterestRates = async () => {
  return await axios.post(`${ADMIN_API}/admin/loaninterest/list`);   // GET
  
};

export const updateLoanInterestRates = async (interest) => {
  return await axios.put(`${ADMIN_API}/admin/loaninterest/update/${interest.id}`, {...interest}); // PUT
};

export const deleteLoanInterestRates = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/loaninterest/delete/${id}`); // DELETE
  window.location.reload(false);
};