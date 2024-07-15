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
    default:
      return state;
  }
};

export default profileReducer;
