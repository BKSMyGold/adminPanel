import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================


export const getEcommerceReport = async (filter,page,pageSize,sort) => {
  return await axios.post(`${ADMIN_API}/admin/ecommerce_report/list`,{
    filter,
    page,
    pageSize,
    sort
  });   // GET
  
};

