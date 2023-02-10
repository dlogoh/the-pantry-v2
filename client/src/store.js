import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alert/alertSlice";
import authReducer from "./features/auth/authSlice";
import profileReducer from "./features/profile/profileSlice";
import recipeModalReducer from "./features/recipeModal/recipeModalSlice";
import postReducer from "./features/post/postSlice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    profile: profileReducer,
    recipeModal: recipeModalReducer,
    post: postReducer,
  },
});
