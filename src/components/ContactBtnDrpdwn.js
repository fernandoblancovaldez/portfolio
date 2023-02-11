import Dropdown from "react-bootstrap/Dropdown";

function ContactBtnDrpdwn() {
  return (
<<<<<<< HEAD
    <Dropdown className="align-self-center">
=======
    <Dropdown>
>>>>>>> 273273848ae221ad2094f47d4bab4f4e21338cbd
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        variant="secondary"
        className="bg-dark"
      >
        Contacto
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
<<<<<<< HEAD
        <Dropdown.Item
          href="#footer"
          active
          className="bg-light bg-gradient text-dark"
        >
=======
        <Dropdown.Item href="#footer" active className="bg-success text-light">
>>>>>>> 273273848ae221ad2094f47d4bab4f4e21338cbd
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
