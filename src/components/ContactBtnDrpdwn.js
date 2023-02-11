import Dropdown from "react-bootstrap/Dropdown";

function ContactBtnDrpdwn() {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        variant="secondary"
        className="bg-dark"
      >
        Contacto
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        <Dropdown.Item href="#footer" active className="bg-success text-light">
          Action
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ContactBtnDrpdwn;
