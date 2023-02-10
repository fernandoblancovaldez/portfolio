import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import NavDropdown from "react-bootstrap/NavDropdown"; */
import { LinkContainer } from "react-router-bootstrap";
import ContactBtnDrpdwn from "./ContactBtnDrpdwn";

function Head() {
  return (
    <header className="sticky-top">
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer exact to="/">
            <Navbar.Brand>Fernando Blanco</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer exact to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/cv">
                <Nav.Link>Currículum</Nav.Link>
              </LinkContainer>
              <LinkContainer exact to="/portfolio">
                <Nav.Link>Portafolio</Nav.Link>
              </LinkContainer>
              <ContactBtnDrpdwn />
              {/* <NavDropdown title="Contacto" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Head;
