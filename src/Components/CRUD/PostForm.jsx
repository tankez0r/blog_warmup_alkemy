import React, { Fragment } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../Login/TextField";
import * as Yup from "yup";
import { postPOST } from "../Service/service";

const PostForm = () => {
  const validate = Yup.object({
    email: Yup.string().required("Tenes que escribir un titulo"),
    password: Yup.string().required("Tenes que escribir algo..."),
  });
  return (
    <Fragment>
      <Formik
        initialValues={{
          titulo: "",
          body: "",
          id: 101,
          idusuario: 1,
          complete: false,
        }}
        validationSchema={validate}
        onSubmit={(values) => consolear(values)}
      >
        {(formik) => (
          <div className="container">
            
            <Form>
              <div className="form-group">
                <TextField
                  label="Titulo"
                  name="titulo"
                  type="text"
                  placeholder="a ver, tirate un titulazo"
                />
              </div>
              <div className="form-group">
                <TextField
                  label="Escribe lo que quieras"
                  name="body"
                  className="form-control textbox"
                  id="textArea"
                  placeholder="fake news, videos, memes tirate lo que quieras."
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                post it!{" "}
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </Fragment>
  );
};

export default PostForm;
