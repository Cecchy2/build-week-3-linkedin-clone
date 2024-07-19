import { GET_COMMENTS } from "../actions";

const initialState = {
  comments: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
