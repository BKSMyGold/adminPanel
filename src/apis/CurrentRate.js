import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addBuySell = (buySell) =>
  Axios.post(`${BASE_URL}/api/buy-sell-price/`, {
    ...buySell,
  });

export const deleteBuySell = (buySellID) =>
  Axios.delete(`${BASE_URL}/api/buy-sell-price/${buySellID}`);

export const updateBuySell = (buySell) =>
  Axios.put(`${BASE_URL}/api/buy-sell-price/${buySell.id}`, buySell);
