import React, { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { types } from "../Context/Reducer";
import * as Yup from "yup";
import UserContext from "../Context/UserContext";
import Swal from "sweetalert2";
const Formulario = ({ spinner }) => {
  //contexto
  const data = useContext(UserContext);
  const { validation, dispatch, setuserCredentials } = data;

  // initial values
  const initValues = { email: "", password: "", complete: false };

  //validacion response
  const userValisvalid = (formik) => {
    if (validation === false) {
      setTimeout(() => {
        dispatch({ type: types.vnull });
      }, 3000);
      setTimeout(() => {
        formik.resetForm();
      }, 5000);
      Swal.fire("ERROR", "Usuario o contraseña invalidos", "error");
    }
  };
  useEffect(() => {
    if (validation === false) {
      setuserCredentials(initValues);
    }
  }, [validation]);
  // validacion js
  const validate = Yup.object({
    email: Yup.string()
      .email("El correo que ingresaste es invalido")
      .required("Necesitas ingresar tu correo"),
    password: Yup.string().required("Debes ingresar tu contraseña"),
  });
  return (
    <Formik
      initialValues={initValues}
      validationSchema={validate}
      onSubmit={(values) => {
        setuserCredentials(values);
      }}
    >
      {(formik) => (
        <div className="container mt-5 justify-content-center d-flex mh-100">
          <div className="col-12 col-md-6 d-flex flex-column border shadow bg-primary p-4">
            <Form
              className="d-flex flex-column  col-12 align-self-center"
              action=""
              method="post"
            >
              <TextField
                label="Correo"
                name="email"
                type="email"
                placeholder="Ingresa tu correo/usuario"
              />

              <TextField
                label="Contraseña"
                name="password"
                type="password"
                placeholder="Ingresa tu contraseña"
              />
              {spinner ? (
                <div className="spinner">
                  <div className="rect1"></div>
                  <div className="rect2"></div>
                  <div className="rect3"></div>
                  <div className="rect4"></div>
                  <div className="rect5"></div>
                </div>
              ) : (
                <button className="btn btn-dark mt-3" type="submit">
                  Login
                </button>
              )}
            </Form>

            {userValisvalid(formik)}
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Formulario;
