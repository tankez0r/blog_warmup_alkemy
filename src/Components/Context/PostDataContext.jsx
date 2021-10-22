import React, {createContext, useState } from "react";

const PostContext = createContext();
const emptyPost = {
  userId:'',
  id: '',
  title:"",
  body:"",
}
const PostSelected = ({ children }) => {
  const [postState, setPostData] = useState(emptyPost);
  const postData = { postState ,setPostData, emptyPost };

  return (
    <PostContext.Provider value={postData}>{children}</PostContext.Provider>
  );
};

export default PostSelected;
export { PostContext, PostSelected, emptyPost };
