import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addSlider = async (slider) => {
    let formData = new FormData();
    let { name, type, typeId, image, } = slider;
    formData.append("name", name)
    formData.append("type", type)
    formData.append("typeId", typeId)

    if (image instanceof File) {

        formData.append("image", image);

    } 


    await axios.post(`${ADMIN_API}/admin/slider/create/`, formData);
};

export const getSlider = async () => {
    return await axios.post(`${ADMIN_API}/admin/slider/list`);   // GET

};

export const updateSlider = async (slider) => {
    let formData = new FormData();
    let { name, type, typeId, image, } = slider;
    formData.append("name", name)
    formData.append("type", type)
    formData.append("typeId", typeId)

    if (image instanceof File) {

        formData.append("image", image);

    } 
    return await axios.put(`${ADMIN_API}/admin/slider/update/${slider.id}`, formData); // PUT
};

export const deleteSlider = async (id) => {
    await axios.delete(`${ADMIN_API}/admin/slider/delete/${id}`); // DELETE
    window.location.reload(false);
};