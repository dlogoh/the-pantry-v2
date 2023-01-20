import setAuthToken from "../../utils/setAuthToken";
import axios from "axios";
import { authCheck, authFail } from "./authSlice";
import { userLoaded, loginFail, loginSuccess } from "./authSlice";

// Load user
export const loadUser = () => async (dispatch) => {
  setTimeout(async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);

      try {
        const res = await axios.get("/api/auth");

        dispatch(userLoaded(res.data));
      } catch (error) {
        console.error(error);
        dispatch(authFail());
      }
    } else {
      console.log("object");
      dispatch(authCheck());
    }
  }, 500);
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

    localStorage.setItem("token", `${res.data.token}`);
    dispatch(loginSuccess(res.data));
    return res.data.token;
  } catch (error) {
    console.error(error.msg);
    dispatch(loginFail());
  }
};
