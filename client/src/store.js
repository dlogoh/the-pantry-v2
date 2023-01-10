import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alert/alertSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
});
