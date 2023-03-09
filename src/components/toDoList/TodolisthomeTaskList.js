import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { XCircleFill, FileEarmarkFill } from "react-bootstrap-icons";

import firebaseApp from "../../helpers/toDoListCreds";
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
            <Row key={task.id} className="align-items-center gap-1">
              <Col xs="auto">{task.description}</Col>
              <Col xs="auto" className="p-0 ms-auto">
                <a href={task.url} target="_BLANK" rel="noreferrer noopener">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="d-flex mx-auto"
                  >
                    <FileEarmarkFill size="1rem" />
                  </Button>
                </a>
              </Col>
              <Col xs="auto" className="p-0 ">
                <Button
                  onClick={() => {
                    delTask(task.id);
                  }}
                  variant="danger"
                  size="sm"
                  className="d-flex mx-auto"
                >
                  <XCircleFill size="1rem" />
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
