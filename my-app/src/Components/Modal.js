import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import { useState } from "react";

function ModalForm(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit patient information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>NAME</Form.Label>
              <Form.Control type="text" placeholder="Name..." defaultValue="Mark" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>WEBSITE</Form.Label>
              <Form.Control type="text" placeholder="Website..." required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid website.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>DESCRIPTION</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Description..."
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid description.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom06">
              <Form.Label>AVATAR IMG</Form.Label>
              <Form.Control type="file" placeholder="Avatar..." required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid image.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="I agree that the new information supersedes the previous one"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalForm;
