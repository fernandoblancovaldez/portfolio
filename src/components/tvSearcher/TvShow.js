import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function TvShow({ name, text, img, url }) {
  return (
    <Card style={{ width: "14rem" }} className="p-0 shadow">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body className="px-2 ">
        <Card.Title className="text-truncate fs-5 hero-font">{name}</Card.Title>
        <Card.Text className="lh-sm text-truncate">
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
