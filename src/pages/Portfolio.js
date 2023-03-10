import Accordion from "react-bootstrap/Accordion";
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
          <Accordion.Body className="px-0 px-md-2rem">
            <Weather />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <li className="fw-semibold">To-Do List</li>
          </Accordion.Header>
          <Accordion.Body className="px-0 px-md-2rem">
            <ToDoList />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <li className="fw-semibold">Carrito de Compras</li>
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
