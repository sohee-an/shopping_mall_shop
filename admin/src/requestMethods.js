import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// let TOKEN = null;
// if (localStorage.getItem("persist:root") !== null) {
//   TOKEN = JSON.parse(
//     JSON.parse(localStorage.getItem("persist:root")).admin
//   ).currentUser;
// }

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
const token = localStorage.getItem("token");

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${token}`,
  },
});
