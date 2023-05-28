import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profileSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    profileSlice: profileSlice.reducer,
  }
});
