import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  booleanState: true
}

export const booleanSlice = createSlice({
  name: 'boolean-slice',
  initialState: intialState,
  reducers:
  {
    updateState(state){
      state.booleanState = !state.booleanState;
    }
  }
})


export const booleanActions = booleanSlice.actions;
