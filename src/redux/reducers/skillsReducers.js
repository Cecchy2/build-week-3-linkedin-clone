import { EXPERIENCE, EXPERIENCES } from "../actions";

const initialState = {
  experiences: [],

  experience: {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  },
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXPERIENCES:
      return {
        ...state,
        experiences: state.listProfiles.concat([action.payload]),
      };
    case EXPERIENCE:
      return {
        ...state,
        experience: action.payload,
      };
    default:
      return state;
  }
};
export default skillsReducer;
