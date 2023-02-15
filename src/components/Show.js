import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Show({ name, text, img, url }) {
  return (
    <Card style={{ width: "14rem" }} className="mx-auto shadow ">
      <Card.Img variant="top" src={img} alt={name} className="img-fluid" />
      <Card.Body className="px-0 px-lg-2">
        <Card.Title>{name}</Card.Title>
        <Card.Text className="fs-6 lh-sm text-truncate">{text}</Card.Text>
        <Button
          variant="primary"
          href={url ? url : "#"}
          target={url ? "_BLANK" : "_SELF"}
          rel={url ? "noreferrer noopener" : ""}
        >
          {url ? "Ver mas" : ""}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Show;
