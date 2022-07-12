import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================


export const getReport = async () => {
  return await axios.get(`${ADMIN_API}/admin/reports/`); 
};

