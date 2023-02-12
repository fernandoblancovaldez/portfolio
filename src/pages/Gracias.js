import Card from "react-bootstrap/Card";

function Gracias() {
  return (
    <div className="container text-center  min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <p className="hero-font fs-1">gracias !</p>
      <Card body className="text-center box-shadow w-75 fs-6 glass my-font">
        <blockquote className="mb-0">
          <p>tu mensaje ha sido enviado exitosamente</p>
          <p className="fs-6 text-muted mb-0">
            a la brevedad me estaré comunicando con vos
          </p>
        </blockquote>
      </Card>
    </div>
  );
}

export default Gracias;
