import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const forgotPassword = async (email) => {                           // POST
    await axios.post(`${ADMIN_API}/admin/auth/forgot-password/`,{...email});
};

