import axios from "axios";

import { getProfile, profileError } from "./profileSlice";

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatch(getProfile(res.data));
  } catch (error) {
    dispatch(
      profileError({
        msg: error.response.statusText,
        status: error.response.status,
      })
    );
  }
};
