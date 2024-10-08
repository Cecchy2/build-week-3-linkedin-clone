export const PROFILE_LIST = "PROFILE_LIST";
export const ME_USER = "ME_USER";
export const EDIT_USER = "EDIT_USER";
export const EXPERIENCES = "EXPERIENCES";
export const EXPERIENCE = "EXPERIENCE";
export const UPDATE_PROFILE_PICTURE = "UPDATE_PROFILE_PICTURE";
export const GET_POSTS = "GET_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const GET_COMMENTS = "GET_COMMENTS";
export const QUERY = "QUERY";

export const GET_JOBS = "GET_JOBS";

export const token = import.meta.env.VITE_TOKEN;

export const storeProfiles = (type, data) => ({ type: type, payload: data });
export const storeExperience = (type, payload) => ({ type: type, payload: payload });
export const editUserAction = inputValue => ({ type: EDIT_USER, payload: inputValue });

// export const getDate = dateString => {
//   const dateObj = new Date(dateString);
//   const options = { month: "long", year: "numeric" };
//   const date = dateObj.toLocaleDateString("it-IT", options);
//   return date;
// };

export const getProfileData = () => {
  return async dispatch => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
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
          Authorization: `Bearer ${token}`,
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

export const getExp = userId => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        dispatch({ type: EXPERIENCES, payload: result });
      }
    } catch (err) {
      ``;
      console.log(err);
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
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch(getExp(userId));
        return result;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const uploadExpImage = (userId, expId, file) => {
  return async (dispatch) => {
    const baseEndpoint = ` https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`;
    const formData = new FormData();
    formData.append("experience", file);

    try {
      const resp = await fetch(baseEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch(getExp(userId));
        return result;
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
          Authorization: `Bearer ${token}`,
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
  return async dispatch => {
    const formData = new FormData();
    formData.append("profile", file);

    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
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

export const getPosts = () => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/posts/`;
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch({ type: GET_POSTS, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editPosts = (userId, post) => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${userId}`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const result = await resp.json(post);
        console.log(result);
        dispatch(getPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePost = userId => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/posts/${userId}`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);

        dispatch(getPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const getJobs = () => {
  return async dispatch => {
    const baseEndpoint = `https://strive-benchmark.herokuapp.com/api/jobs`;
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch({ type: GET_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getComments = () => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/comments/`;
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);
        dispatch({ type: GET_COMMENTS, payload: result });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createComment = comment => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/comments/`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        const result = await resp.json(comment);
        console.log(result);
        dispatch(getComments());
        return result;
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteComment = commentId => {
  return async dispatch => {
    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`;
    try {
      const resp = await fetch(baseEndpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);

        dispatch(getPosts());
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const searchJobs = query => {
  return async dispatch => {
    const baseEndpoint = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`;
    try {
      const resp = await fetch(baseEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        const result = await resp.json();
        console.log(result);

        dispatch({ type: GET_JOBS, payload: result.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
