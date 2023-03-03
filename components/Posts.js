import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const dummys = [
  {
    id: "1,2,3",
    username: "alexSuprnova",
    userImg:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    img: "https://images.unsplash.com/photo-1668902610778-96403019a7f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    caption: "HEY! This is my first post",
  },
  {
    id: "1,2,3",
    username: "michealie",
    userImg:
      "https://images.unsplash.com/photo-1533689476487-034f57831a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    img: "https://images.unsplash.com/photo-1669069509809-5b78376afa69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    caption: "HEY! This is my first post",
  },
  {
    id: "1,2,3",
    username: "JohnDoe",
    userImg:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    img: "https://images.unsplash.com/photo-1669039569878-24094915068c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    caption: "HEY! This is my first post",
  },
  {
    id: "1,2,3",
    username: "JaneDoe",
    userImg:
      "https://images.unsplash.com/photo-1518708909080-704599b19972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    img: "https://images.unsplash.com/photo-1669059921524-327a4c52cff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    caption: "HEY! This is my first post",
  },
  {
    id: "1,2,3",
    username: "alexisBrown",
    userImg:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    img: "https://images.unsplash.com/photo-1669016585654-55d81d7cb8b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    caption: "HEY! This is my first post",
  },
];
function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
      {dummys.map((dummy) => (
        <Post
          key={dummy.id}
          id={dummy.id}
          username={dummy.username}
          userImg={dummy.userImg}
          img={dummy.img}
          caption={dummy.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
