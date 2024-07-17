import { EDIT_USER, ME_USER, PROFILE_LIST } from "../actions";

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
        meUser: {
          ...state.meUser,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;
