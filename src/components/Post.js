import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const Post = (props) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Header>Post</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>{props.message}</Card.Text>
        <Button variant="primary" onClick={() => navigate("post/" + props.id)}>
          see comments of this post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
