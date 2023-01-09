import axios from "axios";

const userApi = {
  loginApi: function loginApi(body) {
    return axios.post("/api/user/login", body);
  },
  registerApi: function registerApi(body) {
    return axios.post("/api/user", body);
  },
  homeNavApi: function homeNavApi(token) {
    return axios.get("/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
export default userApi;
