import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  page: 1,
};

const recipeModalSlice = createSlice({
  name: "recipeModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    nextPage: (state) => {
      if (state.page < 4) {
        state.page++;
      }
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page--;
      }
    },
    resetPage: (state) => {
      state.page = 1;
    },
  },
});

export const { openModal, closeModal, nextPage, prevPage, resetPage } =
  recipeModalSlice.actions;

export default recipeModalSlice.reducer;
