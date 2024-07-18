import { GET_JOBS, QUERY } from "../actions";

const initialState = {
  jobs: [],
  query: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
