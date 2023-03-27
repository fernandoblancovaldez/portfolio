import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUser } from "../../actions/toDoListActions";
import { Card } from "react-bootstrap";
import ToDoListHome from "./ToDoListHome";
import ToDoListLogg from "./ToDoListLogg";
import GlobalLoader from "./GlobalLoader";

const ToDoList = () => {
  const state = useSelector((state) => state);
  const { globalUser } = state.toDoList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  return (
    <Card className="bg-transparent  text-secondary border-glass shadow py-3 gap-3 text-center align-items-center mx-auto">
      <GlobalLoader />
      {globalUser ? <ToDoListHome /> : <ToDoListLogg />}
    </Card>
  );
};

export default ToDoList;
