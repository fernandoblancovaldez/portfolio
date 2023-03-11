import React, { useState } from "react";
import { Button, Col, Container, Row, Spinner, Stack } from "react-bootstrap";
import {
  XCircleFill,
  FileEarmarkFill,
  PencilFill,
} from "react-bootstrap-icons";

import firebaseApp from "../../helpers/toDoListCreds";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const TodolisthomeTaskList = ({ setTask, tasks, userEmail, setArrTasks }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id, fileName) => {
    setLoading(true);
    //crear nuevo array de tareas
    const newTasks = tasks.filter((task) => task.id !== id);

    //actualizar base de datos
    const refDoc = doc(firestore, `usuarios/${userEmail}`);
    await updateDoc(refDoc, { tasks: [...newTasks] });

    //eliminar archivo del store si existe
    if (fileName) {
      const fileRef = ref(storage, `docs/${fileName}`);
      await deleteObject(fileRef);
    }

    //actualizar state
    setArrTasks(newTasks);
    setLoading(false);
  };

  const handleUpdate = (task) => {
    //console.log(id);
    //selecciono la description a editar
    document.querySelector("#taskDescription").value = task.description;
    document.querySelector("#taskDescription").focus();
    setTask(task);
  };

  return (
    <Container>
      <Stack className="gap-2">
        {tasks.map((task) => {
          return (
            <Row key={task.id} className="align-items-center gap-1">
              <Col xs="auto" className="text-dark">
                <li>{task.description}</li>
              </Col>

              <Col xs="auto" className="p-0 ms-auto">
                {task.fileUrl && (
                  <a
                    href={task.fileUrl}
                    target="_BLANK"
                    rel="noreferrer noopener"
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="d-flex mx-auto"
                    >
                      <FileEarmarkFill size="1rem" />
                    </Button>
                  </a>
                )}
              </Col>
              <Col xs="auto" className="p-0">
                <Button
                  onClick={() => {
                    handleUpdate(task);
                  }}
                  variant="primary"
                  size="sm"
                  className="d-flex mx-auto"
                >
                  <PencilFill size="1rem" />
                </Button>
              </Col>
              <Col xs="auto" className="p-0">
                {loading ? (
                  <Button
                    disabled
                    variant="danger"
                    size="sm"
                    className="d-flex mx-auto"
                  >
                    <Spinner size="sm" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleDelete(task.id, task.fileName);
                    }}
                    variant="danger"
                    size="sm"
                    className="d-flex mx-auto"
                  >
                    <XCircleFill size="1rem" />
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
      </Stack>
    </Container>
  );
};

export default TodolisthomeTaskList;
