import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertType: "none",
  msg: "",
  id: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alertType = action.payload.type;
      state.msg = action.payload.msg;
      state.id = action.payload.id;
    },
    removeAlert: (state) => {
      state.alertType = "none";
      state.msg = "";
      state.id = "";
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
