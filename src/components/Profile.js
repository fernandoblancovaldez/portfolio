/* import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; */
import Card from "react-bootstrap/Card";

function Profile() {
  return (
    <Card body className="text-center box-shadow w-75 fs-6">
      <Card.Header>
        <b>Profesional independiente, proactivo y autodidacta</b> que se
        desenvuelve en el área de desarrollo web.
      </Card.Header>
      <blockquote>
        <p>
          Busco continuamente incorporar nuevas tecnologías que nos permitan al
          equipo y a mi optimizar el trabajo del día a día.
        </p>
        <footer className="blockquote-footer">
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
