import Axios from "axios";
import { BASE_URL, ROLE_PERMISSION_BASE_URL } from "../Constants";

export const addSystemUser = async(systemUser) =>{

  await Axios.post(`${ROLE_PERMISSION_BASE_URL}/api/system-user`, systemUser);
}
