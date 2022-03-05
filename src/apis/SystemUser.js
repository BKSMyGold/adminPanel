import Axios from "axios";
import { BASE_URL } from "../Constants";

export const addSystemUser = (systemUser) =>
  Axios.post(`http://localhost:5000/api/system-user`, systemUser);
