import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import skillsReducer from "../reducers/skillsReducers";
import postsReducer from "../reducers/postsReducer";
import jobsReducer from "../reducers/jobsReducer";
import commentsReducer from "../reducers/commentsReducer";

const rootReducer = combineReducers({
  userProfile: profileReducer,
  skills: skillsReducer,
  postsList: postsReducer,
  jobList: jobsReducer,
  commentsList: commentsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
