import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import skillsReducer from "../reducers/skillsReducers";
import postsReducer from "../reducers/postsReducer";

const rootReducer = combineReducers({
  userProfile: profileReducer,
  skills: skillsReducer,
  postsList: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
