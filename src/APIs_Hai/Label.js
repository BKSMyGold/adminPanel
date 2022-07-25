import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addLabel = async (label) => {
  // POST
  await axios.post(`${ADMIN_API}/admin/label/create/`, { ...label });
};

export const getLabel = async () => {
  return await axios.post(`${ADMIN_API}/admin/label/list`, {
    options: {
      populate: "style",
    },
  }); // GET
};

export const updateLabel = async (label) => {
  return await axios.put(`${ADMIN_API}/admin/label/update/${label.id}`, {
    ...label,
  }); // PUT
};

export const deleteLabel = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/label/delete/${id}`); // DELETE
  window.location.reload(false);
};
