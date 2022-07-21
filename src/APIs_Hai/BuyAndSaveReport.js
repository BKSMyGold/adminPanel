import axios from "axios";
import { ADMIN_API } from "../Constants";
import { omitBy, isNil } from "lodash";
//=====================================================

export const getBuyAndSaveReport = async (filter, page, pageSize, sort) => {
  return await axios.post(
    `${ADMIN_API}/admin/reports/buy-save`,
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