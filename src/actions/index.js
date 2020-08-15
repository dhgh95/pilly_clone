export const setLogin = (token) => {
  localStorage.setItem("token", token);
  return {
    type: "LOGIN",
    payload: {
      token,
    },
  };
};

export const setLogout = () => {
  localStorage.removeItem("token");
  return {
    type: "LOGOUT",
    payload: {
      token: null,
    },
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: "SET_CURRENTPAGE",
    payload: {
      currentPage,
    },
  };
};
