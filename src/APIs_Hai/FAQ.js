import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addFAQ = async (faq) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/faq/create/`,{...faq});
};

export const getFAQ = async () => {
  return await axios.post(`${ADMIN_API}/admin/faq/list`);   // GET

};

export const updateFAQ = async (faq) => {
  return await axios.put(`${ADMIN_API}/admin/faq/update/${faq.id}`, {...faq}); // PUT
};

export const deleteFAQ = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/faq/delete/${id}`); // DELETE
  window.location.reload(false);
};