import { configureStore } from "@reduxjs/toolkit";
import { booleanSlice } from "./booleanSlice";
import { profileSlice } from "./profileSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    profileSlice: profileSlice.reducer,
    booleanSlice: booleanSlice.reducer
  }
});
