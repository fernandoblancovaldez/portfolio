import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function XP() {
  return (
    <Container fluid="sm">
      <Row>
        <Col className="bg-dark text-light">
          <h6>EXPERIENCIA LABORAL</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b>03/2015 - presente, Front-end desarrollador</b>,{" "}
            <em>startup BudgetMatador</em>, Tallinn, Estonia
            <ul>
              <li>
                Ayudando voluntariamente a una empresa de nueva creación aún no
                financiada para desarrollar su producto, con fines de
                autoeducación. Me trabajo incluye codificación en Javascript
                (Backbone, jQuery, Underscore), HTML y CSS.
              </li>
              <li>
                <b>www.budgetmatador.com</b>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b>03/2014 - 04/2015, Consultor de servicio al cliente</b>,{" "}
            <em>Arvutitark OÜ</em>, Tallinn, Estonia
            <ul>
              <li>
                Trabajé como vendedor en una tienda de venta de productos de TI.
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <b>06/2008 - 08/2012, Asistente organizador</b>,{" "}
            <em>Estonian Athletic Association</em>, Tallinn, Estonia
            <ul>
              <li>
                Trabajé como asistente organizador durante varios eventos de
                pista y campo.
              </li>
            </ul>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default XP;
