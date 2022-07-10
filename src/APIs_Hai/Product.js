import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addProduct = async (product) => {
  let formData = new FormData();

  let {
    metalGroup,
    collectionName,
    category,
    variety,
    item,
    video,
    grossWeight,
    sku,
    hli,
    width,
    height,
    purityComposition,
    styleComposition,
  } = product;
  formData.append("metalGroup", metalGroup);
  formData.append("collectionName", collectionName);
  formData.append("category", JSON.stringify(category));
  formData.append("variety", JSON.stringify(variety));
  formData.append("item", item);
  formData.append("sku", sku);
  formData.append("hli", hli);
  formData.append("grossWeight", grossWeight);
  formData.append("width", width);
  formData.append("height", height);
  formData.append("purityComposition", JSON.stringify(purityComposition));
  formData.append("styleComposition", JSON.stringify(styleComposition));
  if (video instanceof File) {
    formData.append("video", video);
  }
  await axios.post(`${ADMIN_API}/admin/product/create/`, formData);
};
//=====================================================
export const getProduct = async () => {
  return await axios.post(`${ADMIN_API}/admin/product/list`); // GET
};
//=====================================================
export const updateProduct = async (product) => {
    let formData = new FormData();

    let {
      metalGroup,
      collectionName,
      category,
      variety,
      item,
      video,
      grossWeight,
      sku,
      hli,
      width,
      height,
      purityComposition,
      styleComposition,
    } = product;
    formData.append("metalGroup", metalGroup);
    formData.append("collectionName", collectionName);
    formData.append("category", JSON.stringify(category));
    formData.append("variety", JSON.stringify(variety));
    formData.append("item", item);
    formData.append("sku", sku);
    formData.append("hli", hli);
    formData.append("grossWeight", grossWeight);
    formData.append("width", width);
    formData.append("height", height);
    formData.append("purityComposition", JSON.stringify(purityComposition));
    formData.append("styleComposition", JSON.stringify(styleComposition));
    if (video instanceof File) {
      formData.append("video", video);
    }
  return await axios.put(`${ADMIN_API}/admin/product/update/${product.id}`,formData); // PUT
};
//=====================================================
export const deleteProduct = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/product/delete/${id}`); // DELETE
  window.location.reload(false);
};
