import { GET_POSTS } from "../actions";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.paylload) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
export default postsReducer;
