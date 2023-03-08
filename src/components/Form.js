import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Form = () => {
  return (
    <Card
      body
      className="bg-transparent border-glass"
      //text-center d-flex flex-column justify-content-center align-items-center
    >
      <form
        action="https://formsubmit.co/fernandoblancovaldez@gmail.com"
        method="POST"
        className="d-flex flex-column gap-2"
      >
        <Row className="gap-2">
          <Col className="p-0">
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Tu nombre"
              type="text"
              required
            />
          </Col>
          <Col className="p-0">
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Tu email"
              type="email"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <textarea
              rows="1"
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Tus comentarios"
              required
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col className="d-grid p-0">
            <Button variant="dark" type="submit" className="fw-semibold">
              Enviar
            </Button>
            <input
              type="hidden"
              name="_next"
              value="https://cvfernandoblanco2023.netlify.app//#/gracias"
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="Comentario del Portfolio!"
            ></input>
          </Col>
        </Row>
      </form>
    </Card>
  );
};

export default Form;
