import axios from "axios";

const paymentApi = {
  userPayment: function userPayment(body) {
    console.log(body);
    return axios.post("/api/checkout/payment", body);
  },
};
export default paymentApi;
