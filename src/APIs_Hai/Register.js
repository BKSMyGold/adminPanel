import axios from "axios";
import { ADMIN_API } from "../Constants";
import { useNavigate } from "react-router-dom";
//=====================================================

export const registerUser = async (systemUser) => {
    await axios.post(`${ADMIN_API}/admin/auth/register`, { ...systemUser })
};
