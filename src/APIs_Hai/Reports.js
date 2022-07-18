import axios from "axios";
import { ADMIN_API } from "../Constants";
import qs from "qs"
//=====================================================
export const getReport = async (url,query) => {
  return await axios.get(`${ADMIN_API}/admin/${url}&${query}`); 
};

    