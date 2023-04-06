import {
  BriefcaseFill,
  HouseDoorFill,
  PersonFill,
  Code,
} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function Head() {
  return (
    <header className="sticky-top bg-blur">
      <Navbar className="p-0 shadow" bg="transparent" expand="lg">
        <Container>
          <LinkContainer exact to="/" replace>
            <Navbar.Brand className="my-1 mx-auto fs-4 fw-light text-dark">
              <b className="fw-semibold">fernando</b>
              <em>blanco</em>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-row justify-content-evenly ms-lg-auto">
              <LinkContainer exact to="/" replace>
                <Nav.Link className="nav-icon bg-dark text-light text-center">
                  <HouseDoorFill />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/cv" replace>
                <Nav.Link className="nav-icon bg-dark text-light text-center">
                  <PersonFill />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/portfolio" replace>
                <Nav.Link className="nav-icon bg-dark text-light text-center">
                  <BriefcaseFill />
                </Nav.Link>
              </LinkContainer>
              <Nav.Link
                className="nav-icon bg-dark text-light text-center"
                href="https://github.com/fernandoblancovaldez/portfolio"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Code size="1.5rem" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Head;
