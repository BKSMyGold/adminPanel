import React, { useEffect, useState } from "react";
import { getUserById } from "../apis/User";
import { getPlanById } from "../apis/Plan";
import { getInstallmentById } from "../apis/Installment";
import { currencyFormatter } from "../Constants";

const InStoreCashCollectionRow = ({ subscription }) => {
  const [user, setUser] = useState({});
  const [plan, setPlan] = useState({});
  const [installment, setInstallment] = useState({});

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
    if (subscription.installment?.length) {
      getInstallmentById(
        subscription.installment[subscription.installment.length - 1].id
      ).then(({ data: foundInstallment }) => {
        setInstallment(foundInstallment);
      });
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
      <td>{currencyFormatter(installment.amount)}</td>

      <td>
        {/*Put Enter OTP and onChange change status of Subscription to running */}
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

export default InStoreCashCollectionRow;
