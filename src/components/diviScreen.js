import { wait } from "@testing-library/user-event/dist/utils";
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

const DiviScreen = () => {
  let myTimeout;
  const [data, setData] = useState({ result: 0, status: "pending" });
  const [op1Internal, setop1Internal] = useState(0);
  const [op2Internal, setop2Internal] = useState(0);
  const [isSubmitting, setisSubmitting] = useState(false);

  const axios = require("axios");

  async function getDivi() {
    axios
      .get("https://backcalculatorf.herokuapp.com/divi", {
        params: {
          op1: op1Internal,
          op2: op2Internal,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error.status);
      })
      .then(() => {
        isSubmitting(false);
      });
  }

  return (
    <Container>
      <Row className="mt-4 ">
        <Col xs={12} md={6} className="mb-4">
          <Card bg="dark" className="text-light">
            <Card.Header>
              <h3>Dividir</h3>
            </Card.Header>
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
                      <h3 className="mb-0">/</h3>
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
                      e.preventDefault();
                      setisSubmitting(true);
                      getDivi();
                    }}
                  >
                    Dividir
                  </Button>
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
              <Card.Title className="text-light">Dividir</Card.Title>
              <div>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>operador1</th>
                      <th>operador2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{op1Internal || 0}</td>
                      <td>{op2Internal || 0}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td
                        className={
                          data.status == "OK"
                            ? "text-success"
                            : data.status == "pending"
                            ? "text-light"
                            : "text-danger"
                        }
                      >
                        {data.status == "OK"
                          ? data.result
                          : data.status == "pending"
                          ? null
                          : data.status}
                      </td>
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
export default DiviScreen;
