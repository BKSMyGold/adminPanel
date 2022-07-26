import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addOffer = async (offer) => {
    let formData = new FormData();
    let {name,type,typeId,value,valueType,image} = offer;
    // let data = {value:Number(value), name,type,typeId,valueType,image}


    formData.append("name", name)
    formData.append("type", type)
    formData.append("typeId", typeId)
    formData.append("value", value)
    formData.append("valueType", valueType)
    if (image instanceof File) {
        formData.append("image", image);
    } 
    console.log(formData)
    await axios.post(`${ADMIN_API}/admin/offer/create/`, formData);
};

export const getOffer = async () => {
    return await axios.post(`${ADMIN_API}/admin/offer/list`);   // GET

};

export const updateOffer = async (offer) => {
    return await axios.put(`${ADMIN_API}/admin/offer/update/${offer.id}`, {...offer}); // PUT
};

export const deleteOffer = async (id) => {
    await axios.delete(`${ADMIN_API}/admin/offer/delete/${id}`); // DELETE
    window.location.reload(false);
};