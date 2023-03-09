import React, { useState } from "react";
import { Stack, Container, Form, Button, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { Google, DoorOpenFill, PersonFillAdd } from "react-bootstrap-icons";

import firebaseApp from "../../helpers/toDoListCreds";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const ToDoListLogg = () => {
  const [userRegistering, setUserRegistering] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = e.target.formBasicEmail.value;
    const pass = e.target.formBasicPassword.value;
    //console.log(email.length, pass.length);

    userRegistering
      ? await createUserWithEmailAndPassword(auth, email, pass)
          .catch((err) => {
            console.log(err);
            let message =
              err.statusText ||
              `Ocurrió un error, revisa tus datos e intenta nuevamente.`;
            setError(message);
            //console.log(message);
          })
          .finally(() => setLoading(false))
      : await signInWithEmailAndPassword(auth, email, pass)
          .catch((err) => {
            console.log(err);
            let message =
              err.statusText ||
              `Ocurrió un error, revisa tus datos e intenta nuevamente.`;
            setError(message);
            //console.log(message);
          })
          .finally(() => setLoading(false));
  };

  return (
    <div>
      <Container>
        <Stack className="gap-3">
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
            {loading && (
              <Row className="justify-content-center mt-3 mb-0">
                <Spinner />
              </Row>
            )}
            {error && (
              <Alert variant="danger" className="text-center mt-3 mb-0">
                {error}
              </Alert>
            )}
          </Form>
          <Button
            className="d-flex align-items-center justify-content-center"
            variant="primary"
            onClick={() => {
              signInWithRedirect(auth, googleProvider);
              setLoading(true);
            }}
          >
            <Google size="1.5rem" />
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setUserRegistering(!userRegistering);
              setError(null);
            }}
          >
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
