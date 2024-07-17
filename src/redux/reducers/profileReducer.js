import { EDIT_USER, ME_USER, PROFILE_LIST, UPDATE_PROFILE_PICTURE } from "../actions";

const initialState = {
  listProfiles: [],
  meUser: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LIST:
      return {
        ...state,
        listProfiles: state.listProfiles.concat(action.payload),
      };
    case ME_USER:
      return {
        ...state,
        meUser: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_PROFILE_PICTURE:
      return { ...state, meUser: { ...state.meUser, image: action.payload.image } };
    default:
      return state;
  }
};

export default profileReducer;
