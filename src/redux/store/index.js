import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";

const rootReducer = combineReducers({
  userProfile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
