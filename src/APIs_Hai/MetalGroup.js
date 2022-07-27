import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addMetalGroup = async (metalGroup) => {
    await axios.post(`${ADMIN_API}/admin/metalgroup/create/`, metalGroup);
};

export const getMetalGroup = async () => {
    return await axios.post(`${ADMIN_API}/admin/metalgroup/list`,{
        options:{
            populate:["metal","unit"]
        }
    });   // GET

};

export const updateMetalGroup = async (metalGroup) => {
    return await axios.put(`${ADMIN_API}/admin/metalgroup/update/${metalGroup.id}`, {...metalGroup}); // PUT
};

export const deleteMetalGroup = async (id) => {
    await axios.delete(`${ADMIN_API}/admin/metalgroup/delete/${id}`); // DELETE
    window.location.reload(false);
};