export const CLIENT_ROUTE = "http://localhost:3000";
export const SERVER_ROUTE = "http://localhost:5000";
export const PAYPAL_ROUTE = SERVER_ROUTE + "/paypal";

export const paypalRoutes = {
  createOrder: PAYPAL_ROUTE + "/create-order",
  captureOrder: PAYPAL_ROUTE + "/capture-order",
  paymentSuccessURL: CLIENT_ROUTE + "/payment/success",
  paymentCancelURL: CLIENT_ROUTE + "/payment/cancel",
}
// export const CREATE_ORDER = "https://api-m.paypal.com/v2/checkout/orders";