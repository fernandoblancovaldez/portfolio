import Row from "react-bootstrap/Row";

const Form = () => {
  return (
    <div className="container text-center  d-flex flex-column justify-content-center align-items-center">
      <form
        action="https://formsubmit.co/fernandoblancovaldez@gmail.com"
        method="POST"
      >
        <Row>
          <div className="mb-3 col-lg-2">
            <input className="btn btn-dark" type="submit" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/#/gracias"
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="Comentario del Portfolio!"
            ></input>
          </div>
          <div className="mb-3 col-lg-5">
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
          <div className="mb-3 col-lg-5">
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
          <div className="mb-3">
            {/* <label className="form-label" for="comments">
            Tus comentarios:
          </label> */}
            <textarea
              rows="1"
              className="form-control"
              id="comments"
              name="comments"
              placeholder="Dejame tus comentarios"
              required
            ></textarea>
          </div>
        </Row>
      </form>
    </div>
  );
};

export default Form;
