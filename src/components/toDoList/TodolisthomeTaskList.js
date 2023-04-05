import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import {
  XCircleFill,
  FileEarmarkFill,
  PencilFill,
} from "react-bootstrap-icons";
import { deleteTask, selectTaskToUpdate } from "../../actions/toDoListActions";

const TodolisthomeTaskList = () => {
  const state = useSelector((state) => state);
  const { globalUser, arrTasks } = state.toDoList;
  const dispatch = useDispatch();

  const handleDelete = async (task) => {
    dispatch(deleteTask(task, arrTasks, globalUser));
  };

  const handleUpdate = (task) => {
    //console.log(id);
    //selecciono la description a editar
    document.querySelector("#taskDescription").value = task.description;
    document.querySelector("#taskDescription").focus();
    dispatch(selectTaskToUpdate(task));
  };

  return (
    <Container>
      <Stack className="gap-2">
        {arrTasks.map((task) => {
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
                <Button
                  onClick={() => {
                    handleDelete(task);
                  }}
                  variant="danger"
                  size="sm"
                  className="d-flex mx-auto"
                >
                  <XCircleFill size="1rem" />
                </Button>
              </Col>
            </Row>
          );
        })}
      </Stack>
    </Container>
  );
};

export default TodolisthomeTaskList;
