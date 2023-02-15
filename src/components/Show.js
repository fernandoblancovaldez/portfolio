import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Show({ name, text, img, url }) {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
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
    </Col>
  );
}

export default Show;
