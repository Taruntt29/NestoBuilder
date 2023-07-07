import { createSlice } from "@reduxjs/toolkit";

const initialState = { details: [], phone: localStorage.getItem("phone") };

const builderDetailSlice = createSlice({
  name: "BuilderDetail",
  initialState,
  reducers: {
    setDetails(state, action) {
      // ;
      state.details = action.payload.details;
    },
  },
});

export const builderDetailActions = builderDetailSlice.actions;
export default builderDetailSlice.reducer;
