import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TodolisthomeNewTask from "./TodolisthomeNewTask";
import TodolisthomeTaskList from "./TodolisthomeTaskList";
import { Button, Container, Alert } from "react-bootstrap";
import { BoxArrowLeft } from "react-bootstrap-icons";
import firebaseApp from "../../helpers/toDoListCreds";
import { getAuth, signOut } from "firebase/auth";
import { clearList, readTasks } from "../../actions/toDoListActions";
const auth = getAuth(firebaseApp);

const ToDoListHome = () => {
  const state = useSelector((state) => state);
  const { initialData, globalUser, arrTasks } = state.toDoList;
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(readTasks(globalUser.email));
    setError(false);
  }, [globalUser.email, initialData, dispatch]);

  return (
    <Container>
      <h4 className="text-dark">Bienvenid@</h4>
      <h3 className="text-dark hero-font">
        {globalUser.displayName || globalUser.email.split("@")[0]}
      </h3>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => {
          signOut(auth);
          dispatch(clearList());
        }}
      >
        <BoxArrowLeft size="1.5rem" />
      </Button>
      <hr />
      <TodolisthomeNewTask />
      <hr />
      {error && (
        <Alert variant="danger" className="text-center mt-3 mb-0">
          {error}
        </Alert>
      )}
      {arrTasks && <TodolisthomeTaskList />}
    </Container>
  );
};

export default ToDoListHome;
