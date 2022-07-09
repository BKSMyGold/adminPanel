import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addStyle = async (style) => {
    await axios.post(`${ADMIN_API}/admin/style/create/`, style);
};

export const getStyle = async () => {
    return await axios.post(`${ADMIN_API}/admin/style/list`);   // GET

};

export const updateStyle = async (style) => {
    return await axios.put(`${ADMIN_API}/admin/style/update/${style.id}`, {...style}); // PUT
};

export const deleteStyle = async (id) => {
    await axios.delete(`${ADMIN_API}/admin/style/delete/${id}`); // DELETE
    window.location.reload(false);
};