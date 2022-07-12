import axios from "axios";
import { ADMIN_API } from "../Constants";
import { useNavigate } from "react-router-dom";
import { Audio } from "react-loader-spinner";
//=====================================================

export const addRole = async (role) => {
  await axios.post(`${ADMIN_API}/admin/role/create/`, { ...role });
  <Audio height="100" width="100" color="grey" ariaLabel="loading" />;
  window.location.reload(false);
};
//=====================================================
export const getRole = async () => {
  return await axios.post(`${ADMIN_API}/admin/role/list`); // GET
};
//=====================================================
export const updateRole = async (role) => {
  return await axios.put(`${ADMIN_API}/admin/role/update/${role.id}`, {
    ...role,
  }); // PUT
};
//=====================================================
export const deleteRole = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/role/delete/${id}`); // DELETE
  window.location.reload(false);
};
//=====================================================