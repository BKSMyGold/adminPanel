import Axios from "axios";
import { BASE_URL } from "../Constants";

export const getPlanById = (planId) =>
  Axios.get(`${BASE_URL}/api/plan/${planId}`);
