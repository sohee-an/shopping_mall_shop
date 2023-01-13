import axios from "axios";
// export const userRequest = axios.create({
//   header: { token: `Bearer:${TOKEN}` },
// });

const userApi = {
  userPayment: function userPayment(body) {
    console.log(body);
    return axios.post("/api/checkout/payment", body);
  },
  // loginApi: function loginApi(body) {
  //   return axios.post("/api/user/login", body);
  // },
  // registerApi: function registerApi(body) {
  //   return axios.post("/api/user", body);
  // },
  // homeNavApi: function homeNavApi(token) {
  //   return axios.get("/api/user", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // },
};
export default userApi;
