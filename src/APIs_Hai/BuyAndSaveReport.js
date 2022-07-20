import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================


export const getBuyAndSaveReport = async (filter,page,pageSize,sort) => {
  return await axios.post(`${ADMIN_API}/admin/subscription/list`,{
    filter,
    page,
    pageSize,
    sort
  });   // GET
  
};

