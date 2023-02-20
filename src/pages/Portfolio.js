import Accordion from "react-bootstrap/Accordion";
import ToDoList from "../components/ToDoList";
import TvSearcher from "../components/TvSearcher";
import Weather from "../components/Weather";

function Portfolio() {
  return (
    <div className="container m-sm-0 min-vh-100 d-flex flex-column justify-content-center">
      <Accordion /* defaultActiveKey="0" */ flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <li className="fw-semibold">Buscador de series</li>
          </Accordion.Header>
          <Accordion.Body className="px-0 bg-transparent">
            <TvSearcher />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <li className="fw-semibold">App del Clima</li>
          </Accordion.Header>
          <Accordion.Body>
            <Weather />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <li className="fw-semibold">To-Do List</li>
          </Accordion.Header>
          <Accordion.Body>
            <ToDoList />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <li className="fw-semibold">Carrito de Compras</li>
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Portfolio;
