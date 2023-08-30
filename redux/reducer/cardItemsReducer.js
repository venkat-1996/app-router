import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardsList: [],
};

export const cardItemsSlice = createSlice({
  name: "cardItems",
  initialState,
  reducers: {
    cardsList: (state, action) => {
      state.cardsList = action.payload;
    },
  },
});

export const cardItemsAction = cardItemsSlice.actions;

export default cardItemsSlice.reducer;
