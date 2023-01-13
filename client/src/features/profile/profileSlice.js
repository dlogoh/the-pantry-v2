import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, { payload }) => {
      state.profile = payload;
      state.loading = false;
    },
    profileError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { getProfile, profileError } = profileSlice.actions;

export default profileSlice.reducer;
