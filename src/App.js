import "./App.css";
import Posts from "./components/Posts";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import PostModal from "./components/PostModal";
import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import PostComments from "./components/PostComments";

import axios from "axios";
import { Routes, Route } from "react-router-dom";
function App() {
  const [posts, setPosts] = useState([]);
  const [ignored, forceUpdate] = useReducer((X) => X + 1, 0);
  const getAllPosts = () => {
    axios.get("https://qaqul-webhook.onrender.com/post/").then((res) => {
      setPosts(res.data.data);
      console.log("hello", res.data.data);
    });
  };
  useEffect(() => {
    getAllPosts();
  }, [ignored]);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <PostModal update={forceUpdate} />
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/post/:id" element={<PostComments />} />
          <Route
            exact
            path="/"
            element={<Posts posts={posts} update={forceUpdate} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
