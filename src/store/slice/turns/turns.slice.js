import { createSlice } from "@reduxjs/toolkit";

export const turnSlice = createSlice({
  name: "turns",
  initialState: {
    turns: [],
    isPrint: false,
    infoTurn: {},
    viewModal: false,
    onlyTurn: [],
    userAsigned: [],
  },
  reducers: {
    setDataTurn: (state, action) => {
      const option = action.payload.option;
      state[option] = action.payload.value;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataTurn } = turnSlice.actions;
