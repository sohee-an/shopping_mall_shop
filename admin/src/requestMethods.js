import axios from "axios";

export const BASE_URL = "http://localhost:5000/api/";

const admin = JSON.parse(localStorage.getItem("persist:root"))?.admin;

const currentUser = admin && JSON.parse(admin).currentUser;

const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
