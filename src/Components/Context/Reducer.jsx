import { useState } from "react";

const types = {
  token: "verify - token",
  logon: "active session",
  logoff: "inactive session or time out",
  verror: "interface invalid user/password",
  vvalid: "interface valid user/password",
  vnull: "interface null validation",
  postdata: "set post data in a object",
};

// user data context
const token = localStorage.getItem("token");
const InitialUserData = {
  token: token,
  login: token.length > 0 ? true : false,
  validation: null,
};
const userdataReducer = (state, action) => {
  switch (action.type) {
    case types.logon:
      return { ...state, login: true };
    case types.logoff:
      localStorage.removeItem("token");
      return { ...state, token: "", login: false };
    case types.verror:
      return { ...state, validation: false };
    case types.vvalid:
      return { ...state, validation: true };
    case types.vnull:
      return { ...state, validation: null };
    default:
      return state;
  }
};

export { userdataReducer, InitialUserData, types };
