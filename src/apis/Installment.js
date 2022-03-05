import Axios from "axios";
import { BASE_URL } from "../Constants";

export const getInstallmentById = (installmentId) =>
  Axios.get(`${BASE_URL}/api/installment/${installmentId}`);
