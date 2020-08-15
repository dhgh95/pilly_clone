import { combineReducers } from "redux";

const loginToken = (state = localStorage.getItem("token"), action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload.token;
    case "LOGOUT":
      return action.payload.token;
    default:
      return state;
  }
};

const currentPage = (state = "", action) => {
  switch (action.type) {
    case "SET_CURRENTPAGE":
      return action.payload.currentPage;
    default:
      return state;
  }
};

export default combineReducers({
  loginToken,
  currentPage,
});
