import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
    },
    isFetching: null,
    error: null,
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
      state.error = false;
      state.success = true;
    },
    loginFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },

    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.success = true;
      state.isSignUp = true;
    },
    registerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
    },
    logOutStart: (state) => {
      state.isFetching = true;
    },
    logOutSuccess: (state, action) => {
      state.isFetching = false;
      state.login.currentUser = null;
      state.error = false;
      state.success = true;
    },
    logOutFailed: (state) => {
      state.isFetching = false;
      state.error = true;
      state.success = false;
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
} = authSlice.actions;

export default authSlice.reducer;
