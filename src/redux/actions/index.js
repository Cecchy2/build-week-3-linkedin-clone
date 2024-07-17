export const PROFILE_LIST = "PROFILE_LIST";
export const ME_USER = "ME_USER";
export const EDIT_USER = "EDIT_USER";
export const UPDATE_PROFILE_PICTURE = "UPDATE_PROFILE_PICTURE";

export const storeProfiles = (setCase, data) => ({ type: setCase, payload: data });
export const editUserAction = (inputValue) => ({ type: EDIT_USER, payload: inputValue });

export const getProfileData = () => {
  return async (dispatch) => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk3NmZhMTg2MTQyYzAwMTVjMWMzY2QiLCJpYXQiOjE3MjEyMDA1NDUsImV4cCI6MTcyMjQxMDE0NX0.jXahjnm_y-Q72IM9QipBQI03L56e1YH9ib0PU9ZC9rc",
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk3NmZhMTg2MTQyYzAwMTVjMWMzY2QiLCJpYXQiOjE3MjEyMDA1NDUsImV4cCI6MTcyMjQxMDE0NX0.jXahjnm_y-Q72IM9QipBQI03L56e1YH9ib0PU9ZC9rc",
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

export const editFetchProfile = (profiloModificato) => {
  return async (dispatch) => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "PUT",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk3NmZhMTg2MTQyYzAwMTVjMWMzY2QiLCJpYXQiOjE3MjEyMDA1NDUsImV4cCI6MTcyMjQxMDE0NX0.jXahjnm_y-Q72IM9QipBQI03L56e1YH9ib0PU9ZC9rc",
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

export const uploadProfilePicture = (file, userId) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append("profile", file);

    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk3NmZhMTg2MTQyYzAwMTVjMWMzY2QiLCJpYXQiOjE3MjEyMDA1NDUsImV4cCI6MTcyMjQxMDE0NX0.jXahjnm_y-Q72IM9QipBQI03L56e1YH9ib0PU9ZC9rc",
        },
        body: formData,
      });

      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch(storeProfiles(ME_USER, result));
      } else {
        throw new Error("Errore durante il caricamento dell'immagine");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};
