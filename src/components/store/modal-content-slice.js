import { createSlice } from "@reduxjs/toolkit";
const initialModalContentState = {
  hasOrdered: false,
  hasConfirm: false,
  isLoading: false,
};
const modalContentSlice = createSlice({
  name: "modal-content",
  initialState: initialModalContentState,
  reducers: {
    confirmOrder(state, action) {
      const newContent = action.payload;
      state.hasOrdered = newContent;
    },
    confirmCheckout(state, action) {
      const newContent = action.payload;
      state.hasConfirm = newContent;
    },
    isLoading(state, action) {
      const newContent = action.payload;
      state.isLoading = newContent;
    },
  },
});

export const modalContentActions = modalContentSlice.actions;
export default modalContentSlice;
