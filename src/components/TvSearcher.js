import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const TvSearcher = () => {
  const [quer, setQuer] = useState("");
  const [shows, setShows] = useState([]);

  const d = document;

  useEffect(() => {
    d.addEventListener("keypress", async (e) => {
      if (e.target.matches(".search")) {
        console.log(e.key, e.keyCode);
      }
    });
    return () => {};
  }, [shows]);

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
      <Row></Row>
    </Card>
  );
};

export default TvSearcher;
