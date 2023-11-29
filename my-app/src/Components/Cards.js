import { Accordion, Button, Card, Container, Col, Row } from "react-bootstrap";
import ModalForm from "./Modal";
import ModalAddForm from "./ModalAdd";
import React, { useState } from "react";

// incons
import EditIcon from "../Icons/edit.png";
import PlusIcon from "../Icons/plus.png";

const Cards = ({ pacients }) => {

  const [modalShow, setModalShow] = useState(false);
  const [modalAddShow, setModalAddShow] = useState(false);

  return (
    <Container className="mt-5 mb-5" fluid="md">
      <Row xs={1} md={4} className="g-4">
        {pacients.map((item, index) => (
          <Col key={index}>
            <Card className="cardContainer border-0">
              <Card.Img variant="top" src={item.image} />

              <ModalForm show={modalShow} onHide={() => setModalShow(false)} />
              <ModalAddForm
                show={modalAddShow}
                onHide={() => setModalAddShow(false)}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Button
                  className="m-2"
                  target="blank"
                  variant="outline-secondary"
                  href={item.website}
                >
                  website
                </Button>
                <Card.Text>
                  <Accordion>
                    <Accordion.Item eventKey="0" className="border-0">
                      <Accordion.Header className="bgAccordion">
                        See more description patient
                      </Accordion.Header>
                      <Accordion.Body>
                        {item.description}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Text>

                <Button
                  variant="none"
                  onClick={() => setModalShow(true)}
                  className="editBtn"
                  pacients={pacients}
                >
                  <img src={EditIcon} className="editIcon" alt="editIcon" />
                </Button>
                <Button
                  variant="none"
                  onClick={() => setModalAddShow(true)}
                  className="editBtn"
                >
                  <img src={PlusIcon} className="editIcon" alt="plusIcon" />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;