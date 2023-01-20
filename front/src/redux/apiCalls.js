import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  console.log("user", user);

  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log("res", res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data));
  }
};
