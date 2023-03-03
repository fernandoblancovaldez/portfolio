import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.formBasicEmail.value;
    const pass = e.target.formBasicPassword.value;
    /* console.log(email, pass); */

    if (userRegistering) {
      await createUserWithEmailAndPassword(auth, email, pass);
    } else {
      await signInWithEmailAndPassword(auth, email, pass);
    }
  };

  return (
    <div>
      <Container>
        <Stack className="gap-3">
          <h1> {userRegistering ? "Registrate" : "Inicia sesión"}</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              {userRegistering ? "Registrate" : "Inicia sesión"}
            </Button>
          </Form>
          <Button
            variant="primary"
            type="submit"
            onClick={() => signInWithRedirect(auth, googleProvider)}
          >
            Accede con Google
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setUserRegistering(!userRegistering);
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
