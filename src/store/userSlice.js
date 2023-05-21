import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null }

export const userSlice = createSlice({
  name: 'user-slice',
  initialState: initialState,
  reducers:{
    setUser(state, action){
      state.user = action.payload;
    },
  }
})

export const userActions = userSlice.actions;
