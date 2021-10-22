import React, { createContext, useReducer, useState } from "react";
import { userdataReducer, InitialUserData } from "./Reducer";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userdataReducer, InitialUserData);
  const { token, login, validation } = userState;
  const [userCredentials, setuserCredentials] = useState({});
  const userData = {
    token,
    validation,
    login,
    userCredentials,
    dispatch,
    setuserCredentials,
  };
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
