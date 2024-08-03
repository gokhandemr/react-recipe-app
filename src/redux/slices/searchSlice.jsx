import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: [],
  search: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchIsActive: (state) => {
      state.search = true;
    },
    searchIsInactive: (state) => {
      state.search = false;
    },
  },
});

export const {searchIsActive, searchIsInactive} = searchSlice.actions;
export default searchSlice.reducer;