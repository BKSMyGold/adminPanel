import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addCyclePeriod  = (cyclePeriod) =>
  Axios.post(`${BASE_URL}/api/cycle-period/`, {
    ...cyclePeriod,
  });

export const deleteCyclePeriod  = async(cyclePeriodID) =>{
 await Axios.delete(`${BASE_URL}/api/cycle-period/${cyclePeriodID}`);
 window.location.reload(false);
}

export const updateCyclePeriod = (cyclePeriod) =>
  Axios.put(`${BASE_URL}/api/cycle-period/${cyclePeriod.id}`, cyclePeriod);
