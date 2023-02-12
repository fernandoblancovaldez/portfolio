/* import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */
import Card from "react-bootstrap/Card";

function Profile() {
  return (
    <Card
      body
      className="text-center glass w-75 fs-6 my-font fw-semibold  pb-0"
    >
      Profesional independiente, proactivo y autodidacta que se desenvuelve en
      el área de desarrollo web.
      <br />
      <br />
      <blockquote className="mb-0">
        <p className="fw-light">
          Busco continuamente incorporar nuevas tecnologías que permitan
          optimizar el trabajo del día a día.
        </p>
        <br />
        <footer className="blockquote-footer fw-light mb-0">
          A continuación ofrezco en mas detalle mis experiencias y habilidades
          adquiridas hasta el momento
        </footer>
      </blockquote>
    </Card>
    /* <Container fluid="sm" className="text-center">
      <Row>
        <Col>
          <p>
            <b>Profesional independiente, proactivo y autodidacta</b> que se
            desenvuelve en el área de desarrollo web.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <em>
              Busco continuamente incorporar nuevas tecnologías que nos permitan
              al equipo y a mi optimizar el trabajo del día a día.
            </em>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b>
              <em>
                A continuación ofrezco en mas detalle mis experiencias y
                habilidades adquiridas hasta el momento
              </em>
            </b>
          </p>
        </Col>
      </Row>
    </Container> */
  );
}

export default Profile;
