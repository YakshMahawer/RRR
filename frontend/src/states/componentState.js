import { createSlice } from "@reduxjs/toolkit";

// Initial state of the component and state in different pages

const initialState = {
  open: false,
  areaData: [],
};

export const componentState = createSlice({
  name: "componentState",
  initialState,
  reducers: {
    setStatOpen: (state, action) => {
      state.open = action.payload;
    },
    setAreaData: (state, action) => {
      state.areaData = action.payload;
    },
    
  },
});

export const { setStatOpen, setAreaData } = componentState.actions;

export default componentState.reducer;


