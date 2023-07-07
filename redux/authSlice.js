import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    builderId: localStorage.getItem("builderId"),
    isLoggedIn: !!localStorage.getItem("token"),
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("builderId", action.payload.builderId);
      state.token = action.payload.token;
      state.builderId = action.payload.builderId;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.clear();
      state.token = localStorage.getItem("token");
      state.builderId = localStorage.getItem("builderId");
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
