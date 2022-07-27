import axios from "axios";
import { ADMIN_API } from "../Constants";
//=====================================================

export const addSupplier = async (supplier) => {
    await axios.post(`${ADMIN_API}/admin/supplier/create/`, supplier);
};

export const getSupplier = async () => {
    return await axios.post(`${ADMIN_API}/admin/supplier/list`);   // GET

};

export const updateSupplier = async (supplier) => {
    return await axios.put(`${ADMIN_API}/admin/supplier/update/${supplier.id}`, {...supplier}); // PUT
};

export const deleteSupplier = async (id) => {
    await axios.delete(`${ADMIN_API}/admin/supplier/delete/${id}`); // DELETE
    window.location.reload(false);
};