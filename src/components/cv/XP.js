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
              03/2020 - presente, Front-end desarrollador
            </b>
            , <em>modalidad Freelance</em>
            <br />
            <br />
            <small>
              Ayudando a diversas PyMEs a desarrollar sus productos con fines de
              autoeducación.
            </small>
            <ul>
              <li>
                <small>
                  Me trabajo incluye codificación en Javascript (Vanilla JS,
                  React JS, Redux, Ajax), HTML y Cascading Style Sheets (CSS
                  puro y Bootstrap).
                </small>
              </li>
              <li>
                <small>
                  Uso de Git y Github en conjunto con la plataforma{" "}
                  <em>Netlify</em>.
                </small>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>
            <b className="fw-semibold">
              02/2015 - 04/2017, Técnico informático para administración
            </b>
            , <em>Cooperativa de vivienda Esperanza e Igualdad LTDA</em>
            <br />
            <br />
            <small>
              Mis principales tareas consistian en la asistencia técnica ante
              las demandas que comunmente surgen en el ámbito administrativo.
            </small>
            <ul>
              <li>
                <small>
                  Como el mantenimiento de los equipos, la creacion de
                  plantillas de MS Office, la instalacion de impresoras o el
                  reestablecimiento de la red LAN, entre otras muy diversas.
                </small>
              </li>
              <li>
                <small>Secretario de presidencia.</small>
              </li>
              <li>
                <small>Atención al público.</small>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>
            <b className="fw-semibold">
              03/2012 - 02/2015, Técnico informático SSR
            </b>
            , <em>GC Publicidad Móvil</em> (emprendimiento unipersonal)
            <br />
            <br />
            <small>
              Proyecto de mi autoría el cual consistía en el envío masivo de SMS
              con el objetivo de publicitar diversas marcas (de concecionarias
              automotrices, de empresas crediticias, de obras sociales prepagas,
              etc) y a su vez de receptar el feedback obtenido (es decir, los
              contactos de quien haya reaccionado positivamente a los SMS) para,
              finalmente, mejorar la performance de ventas de los clientes.
            </small>
            <ul>
              <li>
                <small>Producción, envio y recepción de sms masivos.</small>
              </li>
              <li>
                <small>Mantenimiento de equipos informáticos.</small>
              </li>
              <li>
                <small>
                  Elaboración, análisis y reportes de campañas publicitarias via
                  sms.
                </small>
              </li>
              <li>
                <small>Ventas y atención a clientes.</small>
              </li>
              <li>
                <small>Elaboración integral de la plataforma web.</small>
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>
            <b className="fw-semibold">
              01/2011 - 03/2012, Técnico informático SSR
            </b>
            , <em>Alluma Publicidad</em>
            <br />
            <br />
            <small>
              Mi labor se encontraba principalmente enfocado a la ejecución
              técnica de campañas publicitarias via el envío masivo de sms
              mediante el empleo de software y hardware especializado
            </small>
            <ul>
              <li>
                <small>Producción, envio y recepción de sms masivos.</small>
              </li>
              <li>
                <small>Mantenimiento de equipos informáticos.</small>
              </li>
              <li>
                <small>
                  Elaboración, análisis y reportes de campañas publicitarias via
                  sms.
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
