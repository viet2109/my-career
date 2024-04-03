import { createSlice } from "@reduxjs/toolkit";

const apiGeneralSlice = createSlice({
  name: "apiGeneral",
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
    resetBlackList: (state) => {
      state.isFetching = false;
      state.success = false;
      state.error = false;
    }
  },
});

export const { fetchFailed, fetchStart, fetchSuccess, resetBlackList } = apiGeneralSlice.actions;

export default apiGeneralSlice.reducer;