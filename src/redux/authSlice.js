import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
    },
    isFetching: false,
    isSignInErr: false,
    isSignUpErr: false,
    success: null,
    isSignUp: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.login.currentUser = {
        ...action.payload.data,
        token: action.payload.token,
      };
      state.isSignInErr = false;
      state.isSignUpErr = false;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.isSignInErr = true;
      state.success = false;
    },

    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.isSignInErr = false;
      state.isSignUpErr = false;
      state.isSignUp = true;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.isSignUpErr = true;
      state.success = false;
    },
    logOutStart: (state) => {
      state.isFetching = true;
    },
    logOutSuccess: (state, action) => {
      state.isFetching = false;
      state.login.currentUser = null;
      state.isSignInErr = false;
      state.isSignUpErr = false;
    },
    logOutFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
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
        'hollandEntities': action.payload.currentUser.hollandEntities
      }
      
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logOutStart,
  logOutSuccess,
  logOutFailed,
  updateUserSuccess,
  getCurrentUserSucess
} = authSlice.actions;

export default authSlice.reducer;