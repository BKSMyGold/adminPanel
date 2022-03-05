import Axios from "axios";
import { BASE_URL } from "../Constants";

export const getUserById = async (id) =>
  Axios.get(`${BASE_URL}/api/user/${id}`);
