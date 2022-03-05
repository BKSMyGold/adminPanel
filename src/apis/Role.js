import Axios from "axios";
import { BASE_URL, ROLE_PERMISSION_BASE_URL } from "../Constants";

export const getAllRoles = () =>
  Axios.get(`${BASE_URL}/api/role/`);

export const addRole = (role) =>
  Axios.post(`${ROLE_PERMISSION_BASE_URL}/api/role/`, {
    ...role,
    permissions: [...role.permissions],
  });
