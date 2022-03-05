const DATE_FORMATTER = Intl.DateTimeFormat("en-IN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const CURRENCY_FORMATTER = Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

export const BASE_URL = "http://13.59.57.74:5000";

export const ROLE_PERMISSION_BASE_URL = "https://goldv2.herokuapp.com";

export const dateFormatter = (date) => DATE_FORMATTER.format(date);

export const currencyFormatter = (amount) => CURRENCY_FORMATTER.format(amount);
