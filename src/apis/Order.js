import Axios from "axios";
import { BASE_URL } from "../Constants";

export const getAllOrders = () => Axios.get(`${BASE_URL}/api/order`);

export const changeOrderStatusByOrderId = (orderId, status) =>
  Axios.post(`${BASE_URL}/api/order/status/${orderId}`, { status });
