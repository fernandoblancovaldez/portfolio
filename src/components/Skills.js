import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Skills() {
  return (
    <Container fluid="sm">
      <Row className="mb-3">
        <Col className="bg-dark text-light">
          <p className="m-1 fw-bold">HABILIDADES</p>{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <b>En programación</b>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Visual Basic</li>
          </ul>
        </Col>
        <Col>
          <b>Informaticas</b>
          <ul>
            <li>3D Studio Max</li>
            <li>Adobe After Effects</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Premiere</li>
            <li>CorelDRAW</li>
          </ul>
        </Col>
        <Col>
          <b>En Idiomas</b>
          <ul>
            <li>Inglés</li>
            <li>Alemán</li>
            <li>Ruso</li>
            <li>Estonio</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
