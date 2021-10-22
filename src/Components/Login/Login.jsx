import React, { useState, useEffect, useContext, Fragment } from "react";
import Formulario from "./Formulario";
import UserContext from "../Context/UserContext";
import { logIn } from "../Service/service";
import { Redirect } from "react-router";

function Login() {
  const data = useContext(UserContext);
  const { userCredentials, dispatch, setuserCredentials, login} = data;
  const { email, password } = userCredentials;
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    if (email && password !== "") {
      logIn(userCredentials, setSpinner, dispatch, setuserCredentials);
    }
  }, [userCredentials, setuserCredentials ]);
 
 
 
  return (
    <Fragment>
      {login? <Redirect to="/"/>  : <Formulario spinner={spinner} />}
    </Fragment>
  )
}
export default Login;
