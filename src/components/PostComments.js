import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const PostComments = (props) => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const getPost = () => {
    axios.get("https://qaqul-webhook.onrender.com/post/" + id).then((res) => {
      setPost(res.data);
      setComments(res.data.comments);
    });
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <Card>
        <Card.Header>Post</Card.Header>
        <Card.Body>
          <Card.Text>{post.message}</Card.Text>
        </Card.Body>
      </Card>
      comments
      <ListGroup>
        {comments.map((comment) => (
          <ListGroup.Item key={comment.id}>{comment.message}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default PostComments;
