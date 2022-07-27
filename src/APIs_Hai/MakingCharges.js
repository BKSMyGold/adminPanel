import axios from "axios";
import { ADMIN_API } from "../Constants";
import MakingCharges from "../screens/MakingCharges";
//=====================================================

export const addMakingCharges = async (makingCharges) => {
  await axios.post(`${ADMIN_API}/admin/makingcharge/create/`, makingCharges);
};

export const getMakingCharges = async () => {
  return await axios.post(`${ADMIN_API}/admin/makingcharge/list`, {
    options: {
      populate: [
        "supplier",
        "productType",
        {
          path: "metalGroup",
          populate: "metal",
        },
      ],
    },
  }); // GET
};

export const updateMakingCharges = async (makingCharges) => {
  return await axios.put(
    `${ADMIN_API}/admin/makingcharge/update/${makingCharges.id}`,
    {
      ...makingCharges,
      supplier: makingCharges.supplier?._id,
      productType:makingCharges.productType?._id || makingCharges.productType ,
      metalGroup: makingCharges.metalGroup?._id || makingCharges.metalGroup,
    }
  ); // PUT
};

export const deleteMakingCharges = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/makingcharge/delete/${id}`); // DELETE
  window.location.reload(false);
};
