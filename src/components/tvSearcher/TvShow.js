import { Button, Card } from "react-bootstrap";

function TvShow({ name, text, img, url }) {
  return (
    <Card style={{ width: "10rem" }} className="p-0 shadow">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body className="px-2 py-1">
        <Card.Title className="text-truncate lh-sm m-0 fs-6 fw-semibold">
          {name}
        </Card.Title>
        <Card.Text className="lh-sm mb-1 text-truncate">
          <small>{text}</small>
        </Card.Text>
        <Button
          className="btn btn-dark btn-sm"
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

export default TvShow;
