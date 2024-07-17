import { EDIT_USER } from "../actions";

const initialState = {
  listProfiles: [],
  user: {
    name: "",
    surname: "",
    email: "",
    username: "",
    bio: "",
    title: "",
    area: "",
  },
  meUser: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_LIST":
      return {
        ...state,
        listProfiles: state.listProfiles.concat(action.payload),
      };
    case "ME_USER":
      return {
        ...state,
        meUser: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
