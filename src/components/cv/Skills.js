import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skills() {
  return (
    <Container fluid="sm" className="fs-6 my-font fw-light">
      <Row className="mb-3">
        <Col className="bg-dark text-light">
          <p className="m-1 fw-bold">HABILIDADES</p>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <b className="fw-semibold">En programación</b>
          <ul>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Redux (Thunk)</li>
            <li>Context API</li>
            <li>Ajax</li>
            <li>Fetch</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>
              Firebase (<em>backend as a service</em>)
            </li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </Col>
        <Col>
          <b className="fw-semibold">Informaticas</b>
          <ul>
            <li>MS Office</li>
            <li>MS Office 360</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Lightroom</li>
            <li>CorelDRAW</li>
          </ul>
        </Col>
        <Col>
          <b className="fw-semibold">En Idiomas</b>
          <ul>
            <li>Inglés</li>
            <li>Portugues</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
