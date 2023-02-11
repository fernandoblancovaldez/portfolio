import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-dark text-light min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <Row>
          <Col className="text-end hero-font">
            <p>
              <b>sitio creado por</b>
              <br />
              <b>Fernando Blanco</b>
              <br />
              <b>DESARROLLADOR WEB FRONT END</b>
            </p>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
