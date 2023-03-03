import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

import firebaseApp from "../../helpers/toDoListCreds";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const TodolisthomeNewTask = ({ tasks, userEmail, setArrTasks }) => {
  const [dwnldURL, setDwnldURL] = useState("https://picsum.photos/420");

  const handleAddTask = async (e) => {
    e.preventDefault();

    //crear nueva tarea
    const description = e.target.taskDescription.value;
    const task = {
      id: +new Date(),
      description: description,
      url: dwnldURL,
    };

    //limpiar input
    e.target.taskDescription.value = "";

    //crear nuevo array de tareas
    const newTasks = [...tasks, task];

    //actualizar base de datos
    const refDoc = doc(firestore, `usuarios/${userEmail}`);
    await updateDoc(refDoc, { tasks: [...newTasks] });

    //actualizar state
    setArrTasks(newTasks);
    await setDwnldURL("https://picsum.photos/420");
    console.log(dwnldURL);
  };

  const handleAddFile = async (e) => {
    //detectar archivo
    const localFile = e.target.files[0];

    //cargarlo a firebase storage
    const fileRef = ref(storage, `docs/${localFile.name}`);
    await uploadBytes(fileRef, localFile);

    //obtener url de descarga
    await setDwnldURL(await getDownloadURL(fileRef));
    console.log(dwnldURL);
  };

  return (
    <Container>
      <Form onSubmit={handleAddTask}>
        <Row className="gap-2 align-items-center">
          <Col className="col-12 col-lg-4">
            <Form.Control
              type="text"
              placeholder="Describe tu tarea"
              id="taskDescription"
            />
          </Col>
          <Col className="col-8 col-lg-4">
            <Form.Control
              type="file"
              placeholder="Añade archivo"
              onChange={handleAddFile}
            />
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
