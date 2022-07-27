import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addProductType = async (productType) => {  
    // let {title,description,consignmentRequired} = policy 
    // let data = {title, description,consignmentRequired:Boolean(consignmentRequired)} 
    await axios.post(`${ADMIN_API}/admin/productType/create/`,{...productType});
};

export const getProductType = async () => {
  return await axios.post(`${ADMIN_API}/admin/productType/list`);   // GET
  
};

export const updateProductType = async (productType) => {
  return await axios.put(`${ADMIN_API}/admin/productType/update/${productType.id}`, {...productType}); // PUT
};

export const deleteProductType = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/productType/delete/${id}`); // DELETE
  window.location.reload(false);
};