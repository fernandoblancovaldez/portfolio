import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";

import firebaseApp from "../../helpers/toDoListCreds";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const TodolisthomeNewTask = ({ tasks, userEmail, setArrTasks }) => {
  const [fileName, setFileName] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    let url;

    if (fileName) {
      //cargar archivo a firebase storage
      const fileRef = ref(storage, `docs/${fileName}`);
      await uploadBytes(fileRef, fileName);

      //obtener url de descarga
      url = await getDownloadURL(fileRef);
    }

    //crear nueva tarea
    const description = e.target.taskDescription.value;
    const task = {
      id: +new Date(),
      description: description,
      url,
      fileName,
    };

    //crear nuevo array de tareas
    const newTasks = [...tasks, task];

    //actualizar base de datos
    const refDoc = doc(firestore, `usuarios/${userEmail}`);
    await updateDoc(refDoc, { tasks: [...newTasks] });

    //actualizar state
    setArrTasks(newTasks);
    setFileName(null);
    setLoading(false);
    //console.log(dwnldURL);

    //limpiar input
    e.target.taskDescription.value = "";
    e.target.taskFile.value = "";
  };

  const handleAddFile = async (e) => {
    //detectar archivo
    const localFile = e.target.files[0];

    //actualizar estado con nombre de archivo
    setFileName(localFile.name);

    //console.log(fileName);
  };

  return (
    <Container>
      <Form onSubmit={handleAddTask}>
        <Row className="gap-2 align-items-center">
          <Col className="col-12 col-md-6 p-0">
            <Form.Control
              type="text"
              placeholder="Describe tu tarea"
              id="taskDescription"
              required
              size="sm"
            />
          </Col>
          <Col className="p-0">
            {loading ? (
              <Form.Control
                disabled
                type="file"
                placeholder="Añade archivo"
                id="taskFile"
                size="sm"
              />
            ) : (
              <Form.Control
                type="file"
                placeholder="Añade archivo"
                id="taskFile"
                onChange={handleAddFile}
                size="sm"
              />
            )}
          </Col>
          <Col xs="auto" className="p-0 ms-auto">
            {loading ? (
              <Button
                disabled
                type="submit"
                size="sm"
                variant="success"
                className="d-flex mx-auto"
              >
                <Spinner size="sm" />
              </Button>
            ) : (
              <Button
                type="submit"
                size="sm"
                variant="success"
                className="d-flex mx-auto"
              >
                <PlusCircleFill size="1rem" />
              </Button>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default TodolisthomeNewTask;
