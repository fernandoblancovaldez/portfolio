import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";
import {
  createTaskNoFile,
  createTaskWithFile,
  updateTaskNoFile,
  updateTaskWithFile,
} from "../../actions/toDoListActions";

const TodolisthomeNewTask = () => {
  const state = useSelector((state) => state);
  const { globalUser, arrTasks, taskToUpdate } = state.toDoList;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleAddTask = async (e) => {
    e.preventDefault();
    setLoading(true);
    const description = e.target.taskDescription.value;
    const localFile = e.target.taskFile.files[0] || null;

    if (taskToUpdate) {
      localFile
        ? dispatch(
            updateTaskWithFile(
              taskToUpdate,
              localFile,
              description,
              arrTasks,
              globalUser
            )
          )
        : dispatch(
            updateTaskNoFile(taskToUpdate, description, arrTasks, globalUser)
          );
    } else {
      localFile
        ? dispatch(
            createTaskWithFile(localFile, description, arrTasks, globalUser)
          )
        : dispatch(createTaskNoFile(description, arrTasks, globalUser));
    }
    setLoading(false);
    e.target.taskDescription.value = "";
    e.target.taskFile.value = "";
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
