export const PROFILE_LIST = "PROFILE_LIST";
export const ME_USER = "ME_USER";
export const EDIT_USER = "EDIT_USER";
export const EXPERIENCES = "EXPERIENCES";
export const EXPERIENCE = "EXPERIENCE";

export const storeProfiles = (setCase, data) => ({ type: setCase, payload: data });
export const editUserAction = inputValue => ({ type: EDIT_USER, payload: inputValue });

export const getProfileData = () => {
  return async dispatch => {
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
  return async dispatch => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGVmNTE5NmQ3YjAwMTVkNmI1MmUiLCJpYXQiOjE3MjExMzMzODgsImV4cCI6MTcyMjM0Mjk4OH0.EdRhnc4taOa_DnaL8pDiRe6T-aRTptWNZR8UY9sTwXA",
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

export const createExp = (userId, data) => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGU3OTE5NmQ3YjAwMTVkNmI1MmQiLCJpYXQiOjE3MjEwMzIzMTMsImV4cCI6MTcyMjI0MTkxM30.LrieXR8WEpy4VvtclIVdzZOpB7dyEwD1st577EypH0Y",
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch(storeProfiles(EXPERIENCES, result));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const editFetchProfile = profiloModificato => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZGVmNTE5NmQ3YjAwMTVkNmI1MmUiLCJpYXQiOjE3MjExMzMzODgsImV4cCI6MTcyMjM0Mjk4OH0.EdRhnc4taOa_DnaL8pDiRe6T-aRTptWNZR8UY9sTwXA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profiloModificato),
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch(storeProfiles(ME_USER, result));
      } else {
        throw new Error("Errore nella modifica");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
