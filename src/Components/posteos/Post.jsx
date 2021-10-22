import React, { useEffect, useState, useContext } from "react";
import { getPOST } from "../Service/service";
import Boton from "../util/Boton";
import { PostContext } from "../Context/PostDataContext";
const Post = () => {
  const urlPost = new URLSearchParams(window.location.search);
  const postId = urlPost.get("id");
  const postContext = useContext(PostContext);
  const { setPostData, postState } = postContext;
  const data = postState;
  useEffect(() => {
    getPOST(setPostData, postId);
  }, []);
  return (
    <div className="mt-3 shadow-box border">
      <h3 className="offset-1 col-10 h4"> {data.title} </h3>
      <p className="offset-2 col-10"> {data.body} </p>
      <Boton
        type="submit"
        classNames=""
        label="Borrar"
        action="borrar"
        id={data.id}
        icon="bi bi-x-circle"
      />
      <Boton
        type="submit"
        classNames=""
        label="Editar"
        action="editar"
        id={data.id}
        icon="bi bi-pencil-square"
      />
    </div>
  );
};

export default Post;
