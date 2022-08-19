import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  notification: { status: "", title: "", message: "" },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showNotification(state, action) {
      state.isShow = true;
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
