import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import skillsReducer from "../reducers/skillsReducers";
import postsReducer from "../reducers/postsReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  userProfile: profileReducer,
  skills: skillsReducer,
  postsList: postsReducer,
  jobList: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
