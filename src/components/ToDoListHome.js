/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import TodolisthomeNewTask from "./TodolisthomeNewTask";
import TodolisthomeTaskList from "./TodolisthomeTaskList";
import firebaseApp from "../helpers/toDoListCreds";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Button, Container } from "react-bootstrap";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const ToDoListHome = ({ userEmail }) => {
  const [arrTasks, setArrTasks] = useState(null);

  const initialData = [
    {
      id: 1,
      description: "Tarea falsa 1",
      url: "https://picsum.photos/420",
    },
    {
      id: 2,
      description: "Tarea falsa 2",
      url: "https://picsum.photos/420",
    },
    {
      id: 3,
      description: "Tarea falsa 3",
      url: "https://picsum.photos/420",
    },
  ];

  const searchOrCreateDoc = async (docId) => {
    //crear referencia al documento
    const refDoc = doc(firestore, `usuarios/${docId}`);

    //buscar documento
    const query = await getDoc(refDoc);

    //revisar que exista el documento
    if (query.exists()) {
      //si existe

      const docInfo = query.data();
      return docInfo.tasks;
    } else {
      //si no existe
      await setDoc(refDoc, { tasks: [...initialData] });
      const query = await getDoc(refDoc);
      const docInfo = query.data();
      return docInfo.tasks;
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await searchOrCreateDoc(userEmail);
      setArrTasks(tasks);
    };

    fetchTasks();
  }, []);

  return (
    <Container>
      <h4>Hola {userEmail.split("@")[0]}, sesion iniciada</h4>
      <Button onClick={() => signOut(auth)}>Cerrar sesión</Button>
      <hr />
      <TodolisthomeNewTask
        tasks={arrTasks}
        userEmail={userEmail}
        setArrTasks={setArrTasks}
      />
      {arrTasks ? (
        <TodolisthomeTaskList
          tasks={arrTasks}
          userEmail={userEmail}
          setArrTasks={setArrTasks}
        />
      ) : null}
    </Container>
  );
};

export default ToDoListHome;
