import { configureStore } from "@reduxjs/toolkit";
import cardItemsReducer from "@/redux/reducer/cardItemsReducer";

export const store = configureStore({
  reducer: {
    cardsKey: cardItemsReducer,
  },
});
