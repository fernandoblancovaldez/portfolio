import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";

import firebaseApp from "../helpers/toDoListCreds";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const TodolisthomeTaskList = ({ tasks, userEmail, setArrTasks }) => {
  const delTask = async (id) => {
    //crear nuevo array de tareas
    const newTasks = tasks.filter((task) => task.id !== id);

    //actualizar base de datos
    const refDoc = doc(firestore, `usuarios/${userEmail}`);
    updateDoc(refDoc, { tasks: [...newTasks] });

    //actualizar state
    setArrTasks(newTasks);
  };
  return (
    <Container>
      <Stack className="gap-2">
        {tasks.map((task) => {
          return (
            <Row key={task.id} className="align-items-center">
              <Col>{task.description}</Col>
              <Col>
                <Button variant="secondary" className=" btn-sm">
                  Ver Archivo
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    delTask(task.id);
                  }}
                  variant="danger"
                  className=" btn-sm"
                >
                  Eliminar Tarea
                </Button>
              </Col>
            </Row>
          );
        })}
      </Stack>
    </Container>
  );
};

export default TodolisthomeTaskList;
