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

  console.log("------>>>>Hello  ", collection);

  return Axios.post(`${BASE_URL}/api/collection`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
//=====================================================
export const deletecollection = async (collection) => {
  if( collection.images){

    await Axios.delete(`${BASE_URL}/api/collection/${collection.id}`);
    console.log('--> deleting')
    window.location.reload(false);
  }else 
  if(!collection.images){
    
    await Axios.delete(`${BASE_URL}/api/collection/${collection.id}`);
    console.log('--> deleting')
    window.location.reload(false);
  }
};
//=====================================================
export const updatecollection = (collection) => {

  let formData = new FormData();
  let { collection_name, images, video, id } = collection;

  formData.append("collection_name", collection_name);

  if (images) {
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
  } else {
    formData.append("images", null);
  }
  formData.append("video", video);

  // await Axios.put(`${BASE_URL}/api/collection/${collection.id}`, collection);
  return Axios.put(`${BASE_URL}/api/collection/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
//=====================================================
