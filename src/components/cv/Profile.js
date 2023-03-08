import Card from "react-bootstrap/Card";

function Profile() {
  return (
    <Card
      body
      className="text-center bg-transparent border-glass fs-6 my-font fw-semibold  pb-0"
    >
      Profesional independiente y autodidacta que se desenvuelve en el área de
      desarrollo web.
      <br />
      <br />
      <blockquote className="mb-0">
        <p className="fw-light">
          Busco continuamente incorporar nuevas tecnologías que me permitan
          optimizar el trabajo del día a día.
        </p>
        <br />
        <footer className="blockquote-footer fw-light mb-0">
          A continuación ofrezco en mas detalle mis experiencias y habilidades
          adquiridas hasta el momento
        </footer>
      </blockquote>
    </Card>
  );
}

export default Profile;
