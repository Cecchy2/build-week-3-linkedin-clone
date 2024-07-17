const initialState = {
  experiences: [],
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXPERIENCES":
      return {
        ...state,
        experiences: action.payload,
      };

    default:
      return state;
  }
};
export default skillsReducer;
