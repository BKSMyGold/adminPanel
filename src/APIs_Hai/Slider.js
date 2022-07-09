import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addSlider = async (slider) => {
    let formData = new FormData();
    let { name, type, subType, image, } = slider;
    formData.append("name", name)
    formData.append("type", type)
    formData.append("subType", subType)

    if (image) {

        formData.append("image", image);

    } else {
        formData.append("images", null);
    }


    await axios.post(`${ADMIN_API}/admin/slider/create/`, formData);
};

export const getSlider = async () => {
    return await axios.post(`${ADMIN_API}/admin/slider/list`);   // GET

};

export const updateSlider = async (slider) => {
    let formData = new FormData();
    let { name, type, subType, image, } = slider;
    formData.append("name", name)
    formData.append("type", type)
    formData.append("subType", subType)

    if (image) {

        formData.append("image", image);

    } else {
        formData.append("images", null);
    }
    return await axios.put(`${ADMIN_API}/admin/slider/update/${slider.id}`, formData); // PUT
};

export const deleteSlider = async (id) => {
    await axios.delete(`${ADMIN_API}/admin/slider/delete/${id}`); // DELETE
    window.location.reload(false);
};