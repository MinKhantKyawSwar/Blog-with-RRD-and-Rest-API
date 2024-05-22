import React from "react";
import PostForm from "../components/PostForm";
import { useRouteLoaderData } from "react-router-dom";

const Edit = () => {
  const post = useRouteLoaderData("post-detail");
  return (
    <>
      <PostForm
        header={"Edit your post now"}
        btnText={"Edit Post"}
        oldPostData={post}
        method={"patch"}
      />
    </>
  );
};

export default Edit;
