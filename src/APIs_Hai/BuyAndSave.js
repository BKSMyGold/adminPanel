import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================


export const getBuyAndSaveReport = async () => {
  return await axios.post(`${ADMIN_API}/admin/subscription/list`);   // GET
  
};

