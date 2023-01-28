import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function PostModal({ update }) {
  const [show, setShow] = useState(false);
  const [post, setPost] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePost = (e) => {
    setPost(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://qaqul-webhook.onrender.com/post", { message: post })
      .then((res) => {
        console.log(res.data);
        setShow(false);
        setPost("");
        update();
      });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="PostModalForm.ControlTextarea1"
            >
              <Form.Label>add your post</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={post}
                onChange={handlePost}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostModal;
