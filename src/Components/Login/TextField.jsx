import React, { useContext } from "react";
import { ErrorMessage, useField, Formik } from "formik";
import UserContext from "../Context/UserContext";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const data = useContext(UserContext);
  const { validation } = data;
  let validLog = (validacion) => {
    if (validacion === false) {
      return "is-invalid";
    } else {
      return null;
    }
  };
  return (
    <div className="mb-4 ">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none relative ${
          meta.touched && meta.error && "is-invalid"
        } ${validLog(validation)}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        render={(msg) => <span className="error"> {msg} </span>}
      />
    </div>
  );
};
