import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (State, action) => {
      State.value = action.payload;
    },
  },
});

export const { setInputValue } = inputSlice.actions;
export default inputSlice.reducer;
