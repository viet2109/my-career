import { createSlice } from "@reduxjs/toolkit";

const apiGeneralSlice = createSlice({
  name: "api",
  initialState: {
    isFetching: false,
    error: false,
    success: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.isFetching = true;
    },
    fetchFailed: (state) => {
      state.isFetching = false;
      state.success = false;
      state.error = true;
    },
    fetchSuccess: (state) => {
      state.isFetching = false;
      state.success = true;
      state.error = false;
    },
  },
});

export const { fetchFailed, fetchStart, fetchSuccess } = apiGeneralSlice.actions;

export default apiGeneralSlice.reducer;
