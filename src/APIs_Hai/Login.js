import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const loginUser = async (login) => {
 return await axios.post(`${ADMIN_API}/admin/auth/login`, { ...login });
  
//   window.location.reload(false);
};
