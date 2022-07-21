import axios from "axios";
import { ADMIN_API } from "../Constants";
import { omitBy, isNil } from "lodash";
//=====================================================

export const getEcommerceReport = async (filter, page, pageSize, sort) => {
  return await axios.post(
    `${ADMIN_API}/admin/reports/ecom`,
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


