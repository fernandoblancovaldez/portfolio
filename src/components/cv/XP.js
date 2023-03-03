import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function XP() {
  return (
    <Container className="fs-6 my-font fw-light">
      <Row className="mb-3">
        <Col className="bg-dark text-light justify-content-center">
          <p className="m-1 fw-bold">EXPERIENCIA LABORAL</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b className="fw-semibold">
              03/2015 - presente, Front-end desarrollador
            </b>
            , <em>startup BudgetMatador</em>, Tallinn, Estonia
            <ul>
              <li>
                <small>
                  Ayudando voluntariamente a una empresa de nueva creación aún
                  no financiada para desarrollar su producto, con fines de
                  autoeducación. Me trabajo incluye codificación en Javascript
                  (Backbone, jQuery, Underscore), HTML y CSS.
                </small>
              </li>

              <p className="text-muted">www.budgetmatador.com</p>
            </ul>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b className="fw-semibold">
              03/2014 - 04/2015, Consultor de servicio al cliente
            </b>
            , <em>Arvutitark OÜ</em>, Tallinn, Estonia
            <ul>
              <li>
                <small>
                  Trabajé como vendedor en una tienda de venta de productos de
                  TI.
                </small>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b className="fw-semibold">
              06/2008 - 08/2012, Asistente organizador
            </b>
            , <em>Estonian Athletic Association</em>, Tallinn, Estonia
            <ul>
              <li>
                {" "}
                <small>
                  Trabajé como asistente organizador durante varios eventos de
                  pista y campo.
                </small>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default XP;
