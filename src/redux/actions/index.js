export const PROFILE_LIST = "PROFILE_LIST";
export const ME_USER = "ME_USER";
export const EDIT_USER = "EDIT_USER";

export const storeProfiles = (setCase, data) => ({ type: setCase, payload: data });
export const editUserAction = (inputValue) => ({ type: EDIT_USER, payload: inputValue });

export const getProfileData = () => {
  return async (dispatch) => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGU3OTE5NmQ3YjAwMTVkNmI1MmQiLCJpYXQiOjE3MjEwMzIzMTMsImV4cCI6MTcyMjI0MTkxM30.LrieXR8WEpy4VvtclIVdzZOpB7dyEwD1st577EypH0Y",
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch(storeProfiles(PROFILE_LIST, result));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getProfileMe = () => {
  return async (dispatch) => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGU3OTE5NmQ3YjAwMTVkNmI1MmQiLCJpYXQiOjE3MjEwMzIzMTMsImV4cCI6MTcyMjI0MTkxM30.LrieXR8WEpy4VvtclIVdzZOpB7dyEwD1st577EypH0Y",
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch(storeProfiles(ME_USER, result));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
