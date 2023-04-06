import { Accordion } from "react-bootstrap";
import { Code } from "react-bootstrap-icons";
import TvSearcher from "../components/tvSearcher/TvSearcher";
import Weather from "../components/weather/Weather";
import ToDoList from "../components/toDoList/ToDoList";
import Shop from "../components/shop/Shop";

function Portfolio() {
  return (
    <div className="container m-sm-0 min-vh-100 d-flex flex-column justify-content-center">
      <Accordion flush className="px-0 px-md-2rem">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <a
              className="nav-icon bg-dark text-light text-center"
              href="https://github.com/fernandoblancovaldez/portfolio/tree/main/src/components/tvSearcher"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Code size="1.5rem" />
            </a>
            <b className="fs-5">Buscador de series</b>
          </Accordion.Header>
          <Accordion.Body className="px-0 bg-transparent">
            <TvSearcher />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <a
              href="https://github.com/fernandoblancovaldez/portfolio/tree/main/src/components/weather"
              className="nav-icon bg-dark text-light text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Code size="1.5rem" />
            </a>
            <b className="fs-5">App del Clima</b>
          </Accordion.Header>
          <Accordion.Body className="px-0 px-md-2rem">
            <Weather />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <a
              href="https://github.com/fernandoblancovaldez/portfolio/tree/main/src/components/toDoList"
              className="nav-icon bg-dark text-light text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Code size="1.5rem" />
            </a>
            <b className="fs-5">Lista de Tareas</b>
          </Accordion.Header>
          <Accordion.Body className="px-0 px-md-2rem">
            <ToDoList />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <a
              href="https://github.com/fernandoblancovaldez/portfolio/tree/main/src/components/shop"
              className="nav-icon bg-dark text-light text-center"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Code size="1.5rem" />
            </a>
            <b className="fs-5">Carrito de compras</b>
          </Accordion.Header>
          <Accordion.Body className="px-0 px-md-2rem">
            <Shop />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Portfolio;
