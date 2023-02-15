import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";

const TvSearcher = () => {
  const d = document;

  return (
    <Card body className="glass">
      <Row>
        <input
          className="form-control search"
          type="search"
          id="search"
          placeholder="Buscar shows de tv..."
          autocomplete="off"
        />
      </Row>
      <Row>
        <Loader />
      </Row>
    </Card>
  );
};

export default TvSearcher;
