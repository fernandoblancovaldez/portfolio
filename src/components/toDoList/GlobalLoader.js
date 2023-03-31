import React from "react";
import { Spinner, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const GlobalLoader = () => {
  const state = useSelector((state) => state);
  const { loading } = state.toDoList;

  return (
    <Modal
      show={loading}
      backdrop="static"
      keyboard={false}
      className="d-flex justify-content-center rounded-pill"
      centered
    >
      <Spinner className="m-4" />
    </Modal>
  );
};

export default GlobalLoader;
