import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { authFail } from "./authSlice";
import { userLoaded, loginFail, loginSuccess } from "./authSlice";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.post("/api/auth");

    return dispatch(userLoaded(res.data));
  } catch (error) {
    dispatch(authFail());
  }
};

// Login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch(loginSuccess(res.data));
    // userLoaded
  } catch (error) {
    console.error(error.msg);
    dispatch(loginFail());
  }
};
