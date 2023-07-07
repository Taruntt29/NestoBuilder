import { createSlice } from "@reduxjs/toolkit";

const initialState = { properties: [] };

const recentlySoldPropertySlice = createSlice({
  name: "Recently Sold Property",
  initialState,
  reducers: {
    setSoldPropertyDetails(state, action) {
      // ;
      state.properties = action.payload.data;
    },
  },
});

export const recentlySoldPropertyActions = recentlySoldPropertySlice.actions;
export default recentlySoldPropertySlice.reducer;
