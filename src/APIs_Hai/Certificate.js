import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCertificate = async (certificate) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/certificate/create/`,{...certificate});
};

export const getCertificate = async () => {
  return await axios.post(`${ADMIN_API}/admin/certificate/list`);   // GET
  
};

export const updateCertificate = async (certificate) => {
  return await axios.put(`${ADMIN_API}/admin/certificate/update/${certificate.id}`, {...certificate}); // PUT
};

export const deleteCertificate = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/certificate/delete/${id}`); // DELETE
  window.location.reload(false);
};