import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const Form = () => {
  return (
    <Card
      body
      className="text-center  d-flex flex-column justify-content-center align-items-center bg-transparent border-glass "
    >
      <form
        action="https://formsubmit.co/fernandoblancovaldez@gmail.com"
        method="POST"
      >
        <Row>
          <div className="mb-3 col-lg-2">
            <input className="btn btn-dark fw-semibold" type="submit" />
            <input
              type="hidden"
              name="_next"
              value="https://cvfernandoblanco2023.netlify.app//#/gracias"
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="Comentario del Portfolio!"
            ></input>
          </div>
          <div className="mb-1 col-lg-5">
            {/* <label className="form-label" for="name">
            Nombre:
          </label> */}
            <input
              className="form-control"
              id="name"
              name="name"
              placeholder="Tu nombre"
              type="text"
              required
            />
          </div>
          <div className="mb-1 col-lg-5">
            {/* <label className="form-label" for="email">
            Email:
          </label> */}
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Tu email"
              type="email"
              required
            />
          </div>
        </Row>
        <Row>
          {" "}
          <div className="">
            {/* <label className="form-label" for="comments">
            Tus comentarios:
          </label> */}
            <textarea
              rows="1"
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Tus comentarios"
              required
            ></textarea>
          </div>
        </Row>
      </form>
    </Card>
  );
};

export default Form;
