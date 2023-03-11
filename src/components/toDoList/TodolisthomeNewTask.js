import React, { useState } from "react";
import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import firebaseApp from "../../helpers/toDoListCreds";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const TodolisthomeNewTask = ({
  taskToUpdate,
  setTaskToUpdate,
  tasks,
  userEmail,
  setArrTasks,
}) => {
  const [loading, setLoading] = useState(false);

  const handleAddTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    const description = e.target.taskDescription.value;
    const localFile = e.target.taskFile.files[0] || null;
    let newTasks, //nueva lista de tareas vacía para Upgrade
      newTask; //nueva tarea vacía para Create

    if (taskToUpdate) {
      //si existe se Upgradea

      if (localFile) {
        //si hay archivo local para subir
        //se elimina el archivo en el storage de firestore SI existia con anterioridad
        if (taskToUpdate.fileName) {
          const oldFileRef = ref(storage, `docs/${taskToUpdate.fileName}`);
          await deleteObject(oldFileRef);
        }

        //se sube el archivo local al storage
        const newFileRef = ref(storage, `docs/${localFile.name}`);
        await uploadBytes(newFileRef, localFile);

        //obtener url de descarga
        const fileUrl = await getDownloadURL(newFileRef);

        //crear nuevo arr de tasks modificando aquella tarea CON archivo q coincida el id
        newTasks = tasks.map((el) => {
          if (el.id === taskToUpdate.id) {
            return {
              ...el,
              description,
              fileUrl,
              fileName: localFile.name,
            };
          } else {
            return el;
          }
        });
      } else {
        //si no hay localfile
        //crear nuevo arr de tasks modificando aquella tarea SIN archivo q coincida el id
        newTasks = tasks.map((el) => {
          if (el.id === taskToUpdate.id) {
            return {
              ...el,
              description,
            };
          } else {
            return el;
          }
        });
      }
      //actualizar base de datos del firestore
      const refDoc = doc(firestore, `usuarios/${userEmail}`);
      await updateDoc(refDoc, { tasks: [...newTasks] });

      //actualizar state
      setArrTasks(newTasks);
      setTaskToUpdate(null);
      setLoading(false);
      //console.log(dwnldURL);

      //limpiar input
      e.target.taskDescription.value = "";
      e.target.taskFile.value = "";
    } else {
      // si no existe variable "taskToUpdate", se Crea una nueva tarea

      if (localFile) {
        const newFileRef = ref(storage, `docs/${localFile.name}`);
        await uploadBytes(newFileRef, localFile);

        //obtener url de descarga
        let fileUrl = await getDownloadURL(newFileRef);

        //crear nueva tarea CON archivo
        newTask = {
          id: +new Date(),
          description,
          fileUrl,
          fileName: localFile.name,
        };
      } else {
        //o crear nueva tarea SIN archivo
        newTask = {
          id: +new Date(),
          description,
        };
      }

      //crear nuevo array de tareas
      const newTasks = [...tasks, newTask];

      //actualizar base de datos
      const refDoc = doc(firestore, `usuarios/${userEmail}`);
      await updateDoc(refDoc, { tasks: [...newTasks] });

      //actualizar state
      setArrTasks(newTasks);
      setLoading(false);
      //console.log(dwnldURL);

      //limpiar input
      e.target.taskDescription.value = "";
      e.target.taskFile.value = "";
    }
    //cargar archivo a firebase storage si es que existe tal archivo
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
