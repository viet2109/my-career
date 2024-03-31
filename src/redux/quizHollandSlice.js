import { createSlice } from "@reduxjs/toolkit";

const quizHollandSlice = createSlice({
  name: "quiz",
  initialState: {
    result: {},
  },
  reducers: {
    resultCal: (state, action) => {
      const skills = action.payload;
      const skillTotals = Object.keys(skills).reduce((obj, skill) => {
        obj[skill] = {}
        obj[skill].value = skills[skill].reduce((sum, num) => sum + num, 0);
        obj[skill].maxValue = skills[skill].length;
        return obj;
      }, {});
      state.result = skillTotals;
    },
    sendResultSuccess: (state) => {
      
    }
  },
});

export const { resultCal, sendResultSuccess } = quizHollandSlice.actions;

export default quizHollandSlice.reducer;
