import { createSlice } from "@reduxjs/toolkit";

initialState = {
  profile: {
    name: '',
    job_title: '',
    summary: '',
    paternal_name: '',
    maternal_name: '',
    sex: '',
    date_of_birth: '',
  },

  profileAvatar: ''
}

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: initialState,
  reducers: {
    updateProfile(state, action){
      state.profile = action.payload;
    },

    updateAvatar(state, action){
      state.profileAvatar = action.payload.avatar;
    }
  }
})


export const profileActions = profileSlice.actions;
