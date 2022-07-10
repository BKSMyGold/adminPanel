import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addCut = async (cut) => {
    await axios.post(`${ADMIN_API}/admin/cut/create/`, {...cut});
};

export const getCut = async () => {
    return await axios.post(`${ADMIN_API}/admin/cut/list`);   // GET

};

export const updateCut = async (cut) => {
    return await axios.put(`${ADMIN_API}/admin/cut/update/${cut.id}`, {...cut}); // PUT
};

export const deleteCut = async (id) => {
    await axios.delete(`${ADMIN_API}/admin/cut/delete/${id}`); // DELETE
    window.location.reload(false);
};