import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess: (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginSuccess: (state, { payload }) => {
      console.log(payload.token);
      localStorage.setItem("token", payload.token);
      state.token = payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    registerFail: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    userLoaded: (state, { payload }) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = payload;
    },
    authFail: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    loginFail: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const {
  registerFail,
  registerSuccess,
  userLoaded,
  authFail,
  loginFail,
  loginSuccess,
} = authSlice.actions;

export default authSlice.reducer;
