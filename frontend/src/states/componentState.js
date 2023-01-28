import { createSlice } from "@reduxjs/toolkit";

// Initial state of the component and state in different pages

const initialState = {
  open: false,
};

export const componentState = createSlice({
  name: "componentState",
  initialState,
  reducers: {
    setStatOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setStatOpen } = componentState.actions;

export default componentState.reducer;