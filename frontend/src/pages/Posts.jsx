import React from "react";
import { useLoaderData } from "react-router-dom";
import PostItem from "../components/PostItem";

const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => <PostItem post={post} key={post.id} />)}
    </>
  );
};

export default Posts;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/posts");

  if (!response.ok) {
    // throw json({ message: "Unable to gain post now" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.posts;
  }
};
