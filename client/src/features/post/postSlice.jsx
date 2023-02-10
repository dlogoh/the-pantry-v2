import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeId: null,
  title: null,
  category: null,
  ingredients: null,
  instructions: null,
  date: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    loadPost: (state, { payload }) => {
      state.recipeId = payload.recipeId;
      state.title = payload.title;
      state.category = payload.category;
      state.ingredients = payload.ingredients;
      state.instructions = payload.instructions;
      state.date = payload.date;
    },
    resetPost: (state) => {
      state.recipeId = null;
      state.title = null;
      state.category = null;
      state.ingredients = null;
      state.instructions = null;
      state.date = null;
    },
  },
});

export const { loadPost, resetPost } = postSlice.actions;

export default postSlice.reducer;
