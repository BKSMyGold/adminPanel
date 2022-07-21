// import axios from "axios";
// import { ADMIN_API } from "../Constants";
// //=====================================================

// export const getInstantGoldReport = async (filter,page,pageSize,sort) => {
//   return await axios.post(`${ADMIN_API}/admin//list`,{
//     filter,
//     page,
//     pageSize,
//     sort
//   });   // GET

// };
import axios from "axios";
import { ADMIN_API } from "../Constants";
import { omitBy, isNil } from "lodash";

//=====================================================
export const getInstantGoldReport = async (filter, page, pageSize, sort) => {
  return await axios.post(
    `${ADMIN_API}/admin/reports/instant-gold`,
    omitBy(
      {
        filter,
        page,
        pageSize,
        sort,
      },
      isNil
    )
  );
};
