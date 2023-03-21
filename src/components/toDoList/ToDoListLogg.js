import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Stack,
  Container,
  Form,
  Button,
  Row,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Google, DoorOpenFill, PersonFillAdd } from "react-bootstrap-icons";

import {
  createUserOrSignIn,
  redirect,
  switchLoggMethod,
} from "../../actions/toDoListActions";

const ToDoListLogg = () => {
  const state = useSelector((state) => state);
  const { userRegistering } = state.toDoList;
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.formBasicEmail.value;
    const pass = e.target.formBasicPassword.value;

    dispatch(createUserOrSignIn(userRegistering, email, pass));
    setLoading(false);
  };

  const handleRedirect = () => {
    dispatch(redirect());
    setLoading(true);
  };

  const handleLoggMethod = () => {
    dispatch(switchLoggMethod());
    setError(null);
  };

  return (
    <div>
      <Container>
        <Stack className="gap-3">
          {loading && (
            <Row className="justify-content-center mt-3 mb-0">
              <Spinner />
            </Row>
          )}
          <h1 className="text-dark">
            {userRegistering ? "Registrate" : "Inicia sesión"}
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu password"
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              {userRegistering ? (
                <PersonFillAdd size="1.5rem" />
              ) : (
                <DoorOpenFill size="1.5rem" />
              )}
            </Button>

            {error && (
              <Alert variant="danger" className="text-center mt-3 mb-0">
                {error}
              </Alert>
            )}
          </Form>
          <Button
            className="d-flex align-items-center justify-content-center"
            variant="primary"
            onClick={handleRedirect}
          >
            <Google size="1.5rem" />
          </Button>
          <Button variant="secondary" onClick={handleLoggMethod}>
            {userRegistering
              ? "Ya tenés cuenta? Inicia sesión"
              : "No tenés cuenta? Registrate"}
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default ToDoListLogg;
