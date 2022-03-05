import Axios from "axios";
import { BASE_URL } from "../Constants";

export const getAllSubscriptions = () =>
  Axios.get(`${BASE_URL}/api/subscription`);
