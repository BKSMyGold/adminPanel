import Axios from "axios";
import { BASE_URL } from "../Constants";

export const getBalanceBySubscriptionIdAndUserId = (subscriptionId, userId) =>
  Axios.get(
    `${BASE_URL}/api/subscription/balance/individual/${userId}/${subscriptionId}`
  );
