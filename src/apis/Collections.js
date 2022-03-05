import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addcollection = (collection) => {
  let formData = new FormData();
  let { collection_name, images, video } = collection;
  formData.append("collection_name", collection_name);
  formData.append("images", images);
  formData.append("video", video);
  console.log(formData);
  return Axios.post(`${BASE_URL}/api/collection`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deletecollection = (collectionID) =>
  Axios.delete(`${BASE_URL}/api/collection/${collectionID}`);

export const updatecollection = (collection) =>
  Axios.put(`${BASE_URL}/api/collection/${collection.id}`, collection);
