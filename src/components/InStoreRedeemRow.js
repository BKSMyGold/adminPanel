import React, { useEffect, useState } from "react";
import { getUserById } from "../apis/User";
import { getPlanById } from "../apis/Plan";
import { dateFormatter } from "../Constants";
import { getBalanceBySubscriptionIdAndUserId } from "../apis/Balance";

const InStoreRedeemRow = ({ subscription, handlingCharge }) => {
  const [user, setUser] = useState({});
  const [plan, setPlan] = useState({});
  const [balance, setBalance] = useState({});

  useEffect(() => {
    getUserById(subscription.user).then(({ data: foundUser }) => {
      setUser(foundUser);
    });
  }, [subscription.user]);

  useEffect(() => {
    getPlanById(subscription.plan).then(({ data: foundPlan }) => {
      setPlan(foundPlan);
    });
  }, [subscription.plan]);

  useEffect(() => {
    if (user.id && subscription.id) {
      getBalanceBySubscriptionIdAndUserId(user.id, subscription.id)
        .then(({ data: foundBalance }) => setBalance(foundBalance))
        .catch();
    }
  });

  return (
    <tr>
      <td>
        <div class="form-check form-check-sm form-check-custom form-check-solid">
          <input
            class="form-check-input widget-13-check"
            type="checkbox"
            value="1"
          />
        </div>
      </td>
      <td>{subscription.id}</td>
      <td>{user.fname ?? "No User found"}</td>
      <td>{user.mobile ?? "No User found"}</td>
      <td>{plan.name}</td>
      <td>
        {subscription.maturityDate &&
          dateFormatter(Date.parse(subscription.maturityDate))}
      </td>
      <td>{subscription.status}</td>
      <td>
        {balance.totalGold * (1 - handlingCharge?.data?.[0].Percentage * 0.01)}{" "}
        GRAM{" "}
      </td>

      <td width="150px">
        {/*Put Input box to enter OTP For Confirmation and update transaction satatus = Canceled*/}
        <input
          className="form-control"
          name="reason"
          placeholder="Enter MAX"
        ></input>
      </td>
      <td>
        {/*Put Input box to enter reason for cancelation and send a otp*/}
        <input
          className="form-control"
          name="otp"
          placeholder="Enter OTP"
        ></input>
      </td>

      <td>{subscription.status}</td>
    </tr>
  );
};

export default InStoreRedeemRow;
