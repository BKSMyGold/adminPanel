import Axios from "axios";
import { ROLE_PERMISSION_BASE_URL } from "../Constants";

export const getAllPermissions = () =>
  Axios.get(`${ROLE_PERMISSION_BASE_URL}/api/permission`);

  export const addPermission = (Permission) =>
  Axios.post(`${ROLE_PERMISSION_BASE_URL}/api/permission/`, {
    ...Permission,
  });

export const deletePermission = (PermissionID) =>
  Axios.delete(`${ROLE_PERMISSION_BASE_URL}/api/permission/${PermissionID}`);

export const updatePermission = (Permission) =>
  Axios.put(`${ROLE_PERMISSION_BASE_URL}/api/permission/${Permission._id}`, Permission);
