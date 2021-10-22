import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./Context/UserContext";
import { types } from "./Context/Reducer";

const Navbar = () => {
  const { dispatch, login} = useContext(UserContext);
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar navbar-inverse navbar-static-top ">
        <div className="container-fluid">
          <Link className="text-decoration-none h1 text-white" to={"/"}>
            !F<del className="">alse</del>
          </Link>

          <div className="group-form">
            <input type="secondary-text " />{" "}
            <button className="btn btn-secondary">Buscar</button>
          </div>
          <div className="container mt-2">
            {login ? (
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => {
                    dispatch({ type: types.logoff });
                    dispatch({ type: types.vnull });
                  }}
                  className="btn btn-primary"
                >
                  cerrar sesión
                </button>
                <Link to="/crear" className="btn btn-secondary">
                  Crear Post
                </Link>
              </div>
            ) : (
              <div className="d-flex justify-content-between">
                <Link to="/login" className="btn btn-primary">
                  Iniciar Sesión
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
