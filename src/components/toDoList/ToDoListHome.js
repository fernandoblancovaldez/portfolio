import React, { useState, useEffect } from "react";
import TodolisthomeNewTask from "./TodolisthomeNewTask";
import TodolisthomeTaskList from "./TodolisthomeTaskList";
import firebaseApp from "../../helpers/toDoListCreds";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Button, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { BoxArrowLeft } from "react-bootstrap-icons";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const ToDoListHome = ({ userEmail }) => {
  const [task, setTask] = useState(null);
  const [arrTasks, setArrTasks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);

      const searchOrCreateDoc = async (docId) => {
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

      const tasks = await searchOrCreateDoc(userEmail).catch((err) => {
        console.log(err);
        let message =
          err.statusText ||
          `Ocurrió un error, revisa tus datos e intenta nuevamente.`;
        setError(message);
        console.log(message);
      });
      setArrTasks(tasks);
      setLoading(false);
    };

    fetchTasks();
  }, [userEmail]);

  return (
    <Container>
      {loading && <Spinner />}
      <h4 className="text-dark">Bienvenid@</h4>
      <h3 className="text-dark hero-font">{userEmail.split("@")[0]}</h3>
      <Button variant="secondary" size="sm" onClick={() => signOut(auth)}>
        <BoxArrowLeft size="1.5rem" />
      </Button>
      <hr />
      <TodolisthomeNewTask
        setTask={setTask}
        task={task}
        tasks={arrTasks}
        userEmail={userEmail}
        setArrTasks={setArrTasks}
      />
      <hr />
      {error && (
        <Alert variant="danger" className="text-center mt-3 mb-0">
          {error}
        </Alert>
      )}
      {arrTasks ? (
        <TodolisthomeTaskList
          setTask={setTask}
          tasks={arrTasks}
          userEmail={userEmail}
          setArrTasks={setArrTasks}
        />
      ) : null}
    </Container>
  );
};

export default ToDoListHome;
