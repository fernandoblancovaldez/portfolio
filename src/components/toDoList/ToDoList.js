import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readUser } from "../../actions/toDoListActions";
import { Card, Spinner } from "react-bootstrap";
import ToDoListHome from "./ToDoListHome";
import ToDoListLogg from "./ToDoListLogg";

const ToDoList = () => {
  const state = useSelector((state) => state);
  const { globalUser } = state.toDoList;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    dispatch(readUser());
    setLoading(false);
  }, [dispatch]);

  return (
    <Card className="bg-transparent  text-secondary border-glass shadow py-3 gap-3 text-center align-items-center mx-auto">
      {loading && <Spinner />}
      {globalUser ? <ToDoListHome /> : <ToDoListLogg />}
    </Card>
  );
};

export default ToDoList;
