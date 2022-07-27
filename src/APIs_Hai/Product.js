import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addProduct = async (product) => {
  let formData = new FormData();

  let {
    metalGroup,
    collections,
    category,
    variety,
    item,
    video,
    grossWeight,
    sku,
    hli,
    width,
    height,
    images,
    purityComposition,
    styleComposition,
    description,
    pieceCount,
    type
  } = product;
  formData.append("metalGroup", metalGroup);
  formData.append("collections", JSON.stringify(collections)  );
  formData.append("category", JSON.stringify(category));
  formData.append("variety", JSON.stringify(variety));
  formData.append("item", item);
  formData.append("sku", sku);
  formData.append("hli", hli);
  formData.append("grossWeight", grossWeight);
  formData.append("width", width);
  formData.append("height", height);
  formData.append("description", description);
  formData.append("pieceCount", pieceCount);
  formData.append("type", type);


  formData.append("purityComposition", JSON.stringify(purityComposition));
  formData.append("styleComposition", JSON.stringify(styleComposition));
  if (video[0] instanceof File) {
    formData.append("video", video[0]);
  }
 
  for (const image of images) {
      if (image instanceof File) {
      formData.append("images", image);
    }

  }
  console.log(formData)
  
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
    collections,
    category,
    variety,
    item,
    video,
    grossWeight,
    sku,
    hli,
    width,
    height,
    images,
    purityComposition,
    styleComposition,
    description,
    pieceCount,
    type
  } = product;
  
  formData.append("metalGroup", metalGroup);
  formData.append("collections", JSON.stringify(collections));
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
  formData.append("description", description);
  formData.append("pieceCount", pieceCount);
  formData.append("type", type);

  if (video[0] instanceof File) {
    formData.append("video", video[0]);
  }
  console.log(images)
  for (const image of images) {
    console.log(image)
      if (image instanceof File) {
      formData.append("images", image);
    }
  }
  
  return await axios.put(
    `${ADMIN_API}/admin/product/update/${product.id}`,
    formData
  ); // PUT
};
//=====================================================
export const deleteProduct = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/product/delete/${id}`); // DELETE
  window.location.reload(false);
};
