import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const registerUser = async (systemUser) => {
    return await axios.post(`${ADMIN_API}/admin/auth/register`, { ...systemUser })
};
