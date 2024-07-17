import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import skillsReducer from "../reducers/skillsReducers";

const rootReducer = combineReducers({
  userProfile: profileReducer,
  skills: skillsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
