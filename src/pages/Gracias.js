import Card from "react-bootstrap/Card";

function Gracias() {
  return (
    <div className="container text-center  min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <Card body className="text-center box-shadow w-75 fs-6">
        <Card.Header>
          <b className="hero-font">GRACIAS !</b>
        </Card.Header>
        <blockquote>
          <p>tu mensaje ha sido enviado exitosamente</p>
          <footer className="blockquote-footer">
            a la brevedad me estaré comunicando con vos
          </footer>
        </blockquote>
      </Card>
    </div>
  );
}

export default Gracias;
