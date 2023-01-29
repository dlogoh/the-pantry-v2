import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
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
  },
});

export const { openModal, closeModal } = recipeModalSlice.actions;

export default recipeModalSlice.reducer;
