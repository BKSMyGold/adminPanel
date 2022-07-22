import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addVideo = async (HowTo) => {       
    let formData = new FormData();
    let {title,language,category,video} = HowTo
    formData.append("title",title);
    formData.append("language",language);
    formData.append("category",category);
    formData.append("video",video);
    await axios.post(`${ADMIN_API}/admin/video/create/`,formData);
};

export const getVideo = async () => {
  return await axios.post(`${ADMIN_API}/admin/video/list`);   // GET
  
};

export const updateVideo = async (HowTo) => {
    let formData = new FormData();
    let {title,language,category,video} = HowTo
    formData.append("title",title);
    formData.append("language",language);
    formData.append("category",category);
    formData.append("video",video);

  return await axios.put(`${ADMIN_API}/admin/video/update/${HowTo.id}`, formData); // PUT
};

export const deleteVideo = async (id) => {
  await axios.delete(`${ADMIN_API}/admin/video/delete/${id}`); // DELETE
  window.location.reload(false);
};
