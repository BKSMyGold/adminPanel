import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addAllMetal = async (metal) => {   
  let formData = new FormData();
  let {name, icon} = metal
  formData.append("name", name)
  if(icon  instanceof File){
    formData.append("icon", icon)
  } else {
 //   formData.append("icon", null);
}


   await axios.post(`${ADMIN_API}/admin/metal/create`,formData);
};

export const getAllMetal = async () => {
  const response = await axios.post(`${ADMIN_API}/admin/metal/list`);   // GET
  return response;
};

export const updateMetal = async (metal) => {
  let formData = new FormData();
  let {name, icon} = metal
  formData.append("name", name)
  if(icon  instanceof File){
    formData.append("icon", icon)
  } else {
    //formData.append("icon", null);
}

  return await axios.put(`${ADMIN_API}/admin/metal/update/${metal.id}`, formData); // PUT
};

export const deleteMetal = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/metal/delete/${id}`); // DELETE
  window.location.reload(false);
};
