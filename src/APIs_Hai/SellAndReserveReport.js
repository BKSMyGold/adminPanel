import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================


export const getSellAndReserveReport = async (filter,page,pageSize,sort) => {
  return await axios.post(`${ADMIN_API}/admin/sell_and_reserve_report/list`,{
    filter,
    page,
    pageSize,
    sort
  });   // GET  
  
};

