import { configureStore } from "@reduxjs/toolkit";
import builderDetailReducer from "./builderDetailSlice";
import recentlySoldPropertyReducer from "./recentlySoldPropertySlice";
import recentlyAddedPropertyReducer from "./recentlyAddedPropertySlice";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    builderDetail: builderDetailReducer,
    soldPropertyDetail: recentlySoldPropertyReducer,
    addedPropertyDetails: recentlyAddedPropertyReducer,
  },
});

export default store;
