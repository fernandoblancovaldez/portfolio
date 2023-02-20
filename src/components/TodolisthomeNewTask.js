import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import firebaseApp from "../helpers/toDoListCreds";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const TodolisthomeNewTask = ({ tasks, userEmail, setArrTasks }) => {
  const addTask = async (e) => {
    e.preventDefault();
    //crear nueva tarea
    const description = e.target.taskDescription.value;
    const task = {
      id: +new Date(),
      description: description,
      url: "https://picsum.photos/420",
    };
    e.target.taskDescription.value = "";
    //crear nuevo array de tareas
    const newTasks = [...tasks, task];

    //actualizar base de datos
    const refDoc = doc(firestore, `usuarios/${userEmail}`);
    updateDoc(refDoc, { tasks: [...newTasks] });

    //actualizar state
    setArrTasks(newTasks);
  };
  return (
    <Container>
      <Form onSubmit={addTask}>
        <Row className="gap-2 align-items-center">
          <Col className="col-12 col-lg-4">
            <Form.Control
              type="text"
              placeholder="Describe tu tarea"
              id="taskDescription"
            />
          </Col>
          <Col className="col-8 col-lg-4">
            <Form.Control type="file" placeholder="Añade archivo" />
          </Col>
          <Col>
            <Button type="submit" variant="dark">
              Agregar tarea
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default TodolisthomeNewTask;
