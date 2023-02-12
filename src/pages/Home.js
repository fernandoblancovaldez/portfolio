import Form from "../components/Form";

const Home = () => {
  return (
    <div className="container text-center  min-vh-100 d-flex flex-column justify-content-center align-items-center p-2">
      <h1 className="hero-font lh-1">Desarrollador frontend.</h1>
      <p className="text-muted fs-6">Enviame tus comentarios o sugerencias !</p>
      <Form />
    </div>
  );
};

export default Home;
