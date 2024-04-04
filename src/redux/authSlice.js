import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
    },
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.login.currentUser = {
        ...action.payload.data,
        token: action.payload.token,
      };
    },

    registerSuccess: (state, action) => {},

    logOutSuccess: (state, action) => {
      state.login.currentUser = null;
    },

    updateUserSuccess: (state, action) => {
      state.login.currentUser = {
        ...state.login.currentUser,
        ...action.payload,
      };
    },
    getCurrentUserSucess: (state, action) => {
      state.login.currentUser = {
        ...state.login.currentUser,
        hollandEntities: action.payload.currentUser.hollandEntities,
      };
      
    },
    sendOTPSuccess: (state, action) => {
      
      
    },

    resetPasswordSuccess: (state, action) => {
      
      
    },
    
  },
});

export const {
  loginSuccess,

  registerSuccess,

  logOutSuccess,

  updateUserSuccess,
  getCurrentUserSucess,
  sendOTPSuccess,
  resetPasswordSuccess
} = authSlice.actions;

export default authSlice.reducer;
