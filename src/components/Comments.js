import ListGroup from "react-bootstrap/ListGroup";

function Comments({ comments }) {
  return (
    <>
      <ListGroup>
        {comments.map((comment) => {
          <ListGroup.Item>{comment.message}</ListGroup.Item>;
        })}
      </ListGroup>
    </>
  );
}

export default Comments;
