import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="text-bg-dark p-3">
      <div className="container">
        <Row>
          <Col className="text-end text-light">
            <p>sitio creado por</p>
            <h2>Fernando Blanco</h2>
            <h4>DESARROLLADOR WEB FRONT END</h4>
          </Col>
          <Col></Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
