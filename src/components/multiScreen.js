import React, { useState } from "react";

import {
  Stack,
  Button,
  Form,
  Card,
  Spinner,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

const MultiScreen = () => {
  const [data, setData] = useState({ result: 0, status: "pending" });
  const [op1Internal, setop1Internal] = useState(0);
  const [op2Internal, setop2Internal] = useState(0);
  const [isSubmitting, setisSubmitting] = useState(false);

  const axios = require("axios");

  async function getMulti() {
    console.log("entro");
    axios
      .get("https://backcalculatorf.herokuapp.com/multi", {
        params: {
          op1: op1Internal,
          op2: op2Internal,
        },
      })
      .then((res) => setData(res.data))
      .catch((error) => console.log(error))
      .then(() => setisSubmitting(false));
  }

  return (
    <Container
    >
      <Row className="mt-4 "
      >
        <Col xs={12} md={6} className="mb-4">
          <Card bg="dark" className="text-light">
            <Card.Header><h3>Multiplicar</h3></Card.Header>
            <Card.Body>
              <Form>
                <Stack direction="vertical" gap="4">
                  <Stack direction="horizontal" gap="3">
                    <Form.Group controlId="op1">
                      <Form.Label>Operador 1</Form.Label>
                      <Form.Control
                        type="Number"
                        placeholder="ingrese un numero"
                        required
                        value={op1Internal}
                        onChange={(e) => setop1Internal(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Text>
                      <h3 className="mb-0">*</h3>
                    </Form.Text>

                    <Form.Group controlId="op1">
                      <Form.Label>Operador 2</Form.Label>
                      <Form.Control
                        type="Number"
                        placeholder="ingrese un numero"
                        required
                        value={op2Internal}
                        onChange={(e) => setop2Internal(e.target.value)}
                      />
                    </Form.Group>
                  </Stack>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault()
                      setisSubmitting(true);
                      getMulti();
                    }}
                  >
                    {isSubmitting ? "Multiplicando" : "Multiplicar"}
                  </Button>
                  {isSubmitting ? (
                    <span
                      direction="horizontal"
                      gap="3"
                      className="justify-content-center"
                    >
                      <Spinner animation="border" variant="dark" />
                    </span>
                  ) : (
                    ""
                  )

                 
                  
                  }
                </Stack>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mb-4">
          <Card bg="dark">
            <CardHeader className="text-light">
              <h2>Resultado</h2>
            </CardHeader>
            <Card.Body>
              <Card.Title className="text-light">Multiplicar</Card.Title>
              <div>
                <Table striped bordered hover variant="dark"
                >
                  <thead>
                    <tr>
                      <th>operador1</th>
                      <th>operador2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{op1Internal}</td>
                      <td>{op2Internal}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>{data.result}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MultiScreen;
