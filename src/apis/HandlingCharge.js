import Axios from "axios";
import { BASE_URL } from "../Constants";

export const getHandlingChargeById = (calculationId) =>
  Axios.get(`${BASE_URL}/api/calculation/${calculationId}`);
