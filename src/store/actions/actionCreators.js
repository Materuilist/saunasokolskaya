import {
  ADD_COMMENT,
  SET_LOADING,
  UNSET_LOADING,
  GET_FEEDBACK,
  SET_NEXT_PHOTO,
  SET_PREVIOUS_PHOTO,
  TOGGLE_AUTHENTICATED_STATUS,
  TOGGLE_ADMIN_STATUS
} from "./actionTypes";

function setLoading(sauna) {
  return {
    type: SET_LOADING,
    sauna
  };
}

function unsetLoading(sauna) {
  return {
    type: UNSET_LOADING,
    sauna
  };
}

function addCommentSync(postInfo) {
  return {
    type: ADD_COMMENT,
    ...postInfo
  };
}

export function addComment(postInfo) {
  return async function(dispatch) {
    await fetch("http://localhost:8080", {
      method: "POST",
      body: JSON.stringify(postInfo),
      headers: {
        "Content-Type": "application/json"
      }
    });

    addCommentSync(postInfo);
  };
}

function reloadFeedbackSync(sauna, comments, nextPageExists, page) {
  return {
    type: GET_FEEDBACK,
    sauna,
    comments,
    nextPageExists,
    page
  };
}

export function getFeedback(sauna, page=1, items = 2) {
  return async function(dispatch) {
    const res = await fetch(
      `http://localhost:8080/feedback/${sauna}?page=${page}&items=${items}`
    );
    const { feedback, nextPageExists } = await res.json();
    dispatch(reloadFeedbackSync(sauna, feedback, nextPageExists, page));
  };
}

export function setNextPhoto(sauna) {
  return {
    type: SET_NEXT_PHOTO,
    sauna
  };
}

export function setPreviousPhoto(sauna) {
  return {
    type: SET_PREVIOUS_PHOTO,
    sauna
  };
}

export function toggleAuthStatus() {
  return {
    type: TOGGLE_AUTHENTICATED_STATUS
  };
}

export function setAuthStatus(token, timeout = 1800000){
  return function(dispatch){
    localStorage.setItem('jwt', token);
    dispatch(toggleAuthStatus());
    setTimeout(() => {
      dispatch(toggleAuthStatus());
      localStorage.removeItem('jwt');
    }, timeout);
  }
}

export function toggleAdminStatus(){
  return({
    type:TOGGLE_ADMIN_STATUS
  })
}

export function setAdminStatus(token, timeout = 1800000){
  return function(dispatch){
    localStorage.setItem('ajwt', token);
    dispatch(toggleAdminStatus());
    setTimeout(() => {
      dispatch(toggleAdminStatus());
      localStorage.removeItem('ajwt');
    }, timeout);
  }
}