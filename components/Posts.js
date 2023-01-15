import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "1,2,3",
    username: "cbartuk",
    userImg: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    img: "https://images.unsplash.com/photo-1615996330003-8b5c1b0c1f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "HEY! This is my first post",
  },
  {
    id: "1,2,3",
    username: "busefpur",
    userImg: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    img: "https://images.unsplash.com/photo-1615996330003-8b5c1b0c1f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "HEY! This is my first post",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}

      <Post />
      <Post />
    </div>
  );
}

export default Posts;
