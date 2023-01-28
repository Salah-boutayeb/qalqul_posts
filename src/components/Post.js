import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Post = (props) => {
  const navigate = useNavigate();
  const deletePost = () => {
    axios.delete("http://192.168.11.118:3333/post/" + props.id).then((res) => {
      console.log(res.data);
      props.update();
    });
  };
  return (
    <Card>
      <Card.Header>Post</Card.Header>
      <Card.Body>
        <Card.Header>
          <Button variant="danger" onClick={deletePost}>
            delete
          </Button>
        </Card.Header>
        <Card.Title></Card.Title>
        <Card.Text>{props.message}</Card.Text>
        <Button variant="primary" onClick={() => navigate("post/" + props.id)}>
          see comments of this post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
