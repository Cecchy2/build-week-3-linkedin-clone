import { EDIT_USER } from "../actions";

const initialState = {
  user: {
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default profileReducer;
