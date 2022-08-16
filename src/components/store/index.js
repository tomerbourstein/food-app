import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import modalContentSlice from "./modal-content-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, modalContent: modalContentSlice.reducer },
});

export default store;
