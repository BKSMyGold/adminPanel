import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addUnit = async (unit) => {                           // POST
    let {conversionFactor, name} = unit
    let data = {conversionFactor:Number(conversionFactor), name}

    await axios.post(`${ADMIN_API}/admin/unit/create/`,data);
};

export const getAllUnit = async () => {
  const response = await axios.post(`${ADMIN_API}/admin/unit/list`);   // GET
  return response;
};

export const updateUnit = async (unit) => {
    let {conversionFactor, name} = unit
    let data = {conversionFactor:Number(conversionFactor), name}

  return await axios.put(`${ADMIN_API}/admin/unit/update/${unit.id}`, data); // PUT
};

export const deleteUnit = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/unit/delete/${id}`); // DELETE
  window.location.reload(false);
};
