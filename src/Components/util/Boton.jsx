import React, { useState, useEffect, useContext } from "react";
import { deletePOST } from "../Service/service";
import { Redirect } from "react-router";
import { PostContext } from "../Context/PostDataContext";

const Boton = ({ type, classNames, label, action, id, icon }) => {
  const [erase, deleteState] = useState(false);
  const [redirection, setRedirect] = useState(false);
  const [redirectPath, setPath] = useState("/");
  useEffect(() => {
    if (erase) {
      deletePOST(id, setRedirect, setPostData, deleteState);
    }
  }, [erase, deleteState]);
  const { setPostData } = useContext(PostContext);
  const dispatch = (trigger) => {
    switch (trigger) {
      case "borrar":
        deleteState(true);
        break;
      case "editar":
        setPath(`/editar`);
        setRedirect(true);
        break;
      default:
        return null;
    }
  };

  return (
    <div className="text-end">
      {redirection ? (
        <Redirect to={redirectPath} />
      ) : (
        <span
          onClick={() => {
            dispatch(action);
          }}
          type={type}
          className={"btn text-right " + classNames}
        >
          {label + " "}
          <li className={icon + " boton ml-1"}></li>
        </span>
      )}
    </div>
  );
};

export default Boton;
