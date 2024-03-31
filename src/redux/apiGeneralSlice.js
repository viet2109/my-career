import { createSlice } from "@reduxjs/toolkit";

const apiGeneralSlice = createSlice({
  name: "apiGeneral",
  initialState: {
    isFetching: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.isFetching = true;
    },
    fetchEnded: (state) => {
      state.isFetching = false;
    }
  },
});

export const {fetchStart, fetchEnded } = apiGeneralSlice.actions;

export default apiGeneralSlice.reducer;
