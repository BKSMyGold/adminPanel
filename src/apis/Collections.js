import Axios from "axios";
import { BASE_URL } from "../Constants";






//=====================================================
export const addcollection = (collection) => {

  let formData = new FormData();
  let { collection_name, images, video } = collection;    
  formData.append("collection_name", collection_name);
  for (let i = 0; i < images.length; i++) {
    formData.append("images", images[i]);
  }
  // formData.append("images",  images);
  formData.append("video", video);

  console.log("------>>>>Hello  " ,collection);  
  

   return Axios.post(`${BASE_URL}/api/collection`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  
};
//=====================================================
export const deletecollection = async (collectionID) => {
  await Axios.delete(`${BASE_URL}/api/collection/${collectionID}`);
  window.location.reload(false);
};
//=====================================================
export const updatecollection = async (collection) => {
  await Axios.put(`${BASE_URL}/api/collection/${collection.id}`, collection);
  window.location.reload(false);

};
//=====================================================
