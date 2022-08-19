import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import modalContentSlice from "./modal-content-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modalContent: modalContentSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
