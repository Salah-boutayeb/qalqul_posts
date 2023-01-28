// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import Post from "./Post";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} message={post.message} id={post.id} />
      ))}
    </div>
  );
}

export default Posts;
